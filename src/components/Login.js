import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Create a navigate function

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using the form data (formData)
    console.log('Login logic goes here:', formData);

    // Redirect to the home page after successful login
    navigate('/');
  };

  return (
    <div className="login-container min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/view-photo-frames-with-home-decor-interior-design_23-2149513961.jpg")' }}>
      <form className="login-form bg-white p-8 rounded shadow-md w-96 text-center" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login to Your Account</h2>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
