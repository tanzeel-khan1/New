import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginUser = async (data) => {
    const response = await axios.post("http://localhost:5000/api/auth/login", data);
    return response.data;
  };

  const signupUser = async (data) => {
    const response = await axios.post("http://localhost:5000/api/auth/register", data);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: isLogin ? loginUser : signupUser,
    onSuccess: (data) => {
      setMessage(`${isLogin ? "Login" : "Signup"} Successful!`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    },
    onError: (error) => {
      setMessage(error.response?.data?.message || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    mutation.mutate(dataToSend);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {!isLogin && (
          <>
          
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />

       
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </>
        )}

        {isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />

     
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mb-3"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading
            ? isLogin
              ? "Logging in..."
              : "Signing up..."
            : isLogin
            ? "Login"
            : "Signup"}
        </button>

      
        <p className="text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-blue-500 underline"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>

       
        {message && (
          <p className="text-center text-green-600 font-medium mt-3">{message}</p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
