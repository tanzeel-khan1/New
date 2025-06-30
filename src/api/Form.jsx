import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showMessage, setShowMessage] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupUser = async (userData) => {
    const response = await axios.post("http://localhost:5000/api/auth/register", userData);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      setShowMessage(true); 
      console.log(data);
      alert("sign successfull")
    },
    onError: (error) => {
      alert("Signup failed: " + error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: "3rem" }}>
      <h2>Signup Form</h2>

      {showMessage && <p>HI</p>} 

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
         
         
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>


    </div>
  );
};

export default SignupForm;
