import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LiveSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== '') {
        fetchData();
      } else {
        setResults([]);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounce); // Cleanup
  }, [query]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const filtered = response.data.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>🔍 Live Search (with API Call)</h2>
      <input
        type="text"
        value={query}
        placeholder="Type to search..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '100%' }}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.length > 0 ? (
            results.map(user => (
              <li key={user.id}>{user.name}</li>
            ))
          ) : query ? (
            <li>No results found</li>
          ) : null}
        </ul>
      )}
    </div>
  );
}

export default LiveSearch;
