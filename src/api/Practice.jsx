import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Practice() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== '') {
        fetchData();
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:5000/iphones');
      const filtered = response.data.filter(phone =>
        phone.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } catch (error) {
      console.error('Error fetching iPhone data:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <input
        type="text"
        value={query}
        placeholder="Search Here..."
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          marginTop: '2rem',
          width: '100%',
          marginBottom: '20px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {results.length > 0 ? (
            results.map(phone => {
              const isExpanded = expandedId === phone.id;
              return (
                <div
                  key={phone.id}
                  onClick={() => toggleExpand(phone.id)}
                  style={{
                    cursor: 'pointer',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    padding: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff',
                    width: '100%',
                    boxSizing: 'border-box',
                  }} >
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ flex: '0 0 200px' }}>
                      {phone.img && (
                        <img
                      src={phone.img}
                          alt={phone.name}
                          style={{
                            width: '100%',
                            maxHeight: '150px',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            marginBottom: '10px'
                            }}/>
                      )}
                      {isExpanded && phone.img1 && (
                        <img
                          src={phone.img1}
                          alt={`${phone.name} extra`}
                          style={{
                            width: '100%',
                            maxHeight: '150px',
                            objectFit: 'contain',
                            borderRadius: '8px'
                          }}
                        />
                      )}
                    </div>

                    <div style={{ flex: '1', textAlign: 'left' }}>
                      <h3 style={{ fontSize: '2rem', fontFamily: 'sans-serif', fontWeight: 'bold', color: '#344CB7', marginLeft: '1rem' }}>
             {phone.name}
                      </h3>
                      {isExpanded && (
                        <>
                          <p style={{ fontSize: '2rem', fontWeight: 'lighter', color: '#000000', marginLeft: '1rem', cursor: 'progress' }}>
                            {phone.price}
                          </p>
                          <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
                            {phone.features.map((f, i) => (
                              <li key={i} style={{ marginTop: '0.4rem', color: '#222831' }}>{f}</li>
                            ))}
                            <span style={{paddingTop: '4rem'}}>{phone.wwe}</span>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : query ? (
            <p>No iPhones found</p>
          ) : null}
        </div>
      )}

      
    </div>
  );
}

export default Practice;
