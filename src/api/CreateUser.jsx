import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// GET users
const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};

// POST user
const createUser = async (newUser) => {
  return axios.post('https://jsonplaceholder.typicode.com/users', newUser);
};

const UsersList = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({ name: '', email: '', city: '' });
  const [showForm, setShowForm] = useState(false); // Show/Hide Form

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 4000,
  });

  // Create Mutation
  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newData) => {
      queryClient.setQueryData(['users'], (oldData) => [
        ...oldData,
        newData.data,
      ]);
      setForm({ name: '', email: '', city: '' });
      setShowForm(false); // Auto-hide form
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    if (form.name && form.email && form.city) {
      createMutation.mutate({
        name: form.name,
        email: form.email,
        address: { city: form.city },
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  if (isLoading) return <p className="text-yellow-600">Loading...</p>;
  if (isError) return <p className="text-red-600">Something went wrong</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Show/Hide Button */}
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        {showForm ? "Close Form" : "➕ Create New User"}
      </button>

      {/* User Create Form */}
      {showForm && (
        <div className="mb-6 p-4 border rounded shadow-sm space-y-3">
          <h3 className="text-lg font-semibold">Create New User</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleInputChange}
            className="border px-3 py-2 w-full rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleInputChange}
            className="border px-3 py-2 w-full rounded"
          />
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={form.city}
            onChange={handleInputChange}
            className="border px-3 py-2 w-full rounded"
          />
          <button
            onClick={handleCreate}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            ✅ Create User
          </button>
        </div>
      )}

      {/* User List */}
      <div className="grid grid-cols-3 font-bold text-lg mb-2 border-b pb-2">
        <span className="text-green-600">Name</span>
        <span className="text-red-400">Email</span>
        <span className="text-blue-700">City</span>
      </div>

      <ul className="space-y-2">
        {data.map((user) => (
          <li
            key={user.id}
            className="grid grid-cols-3 items-center border p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
          >
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.address.city}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
