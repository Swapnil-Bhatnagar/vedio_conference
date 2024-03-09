import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { AuthProvider } from "C:\\Users\\user\\Desktop\\vedio_app\\meet-app\\src\\components\\AuthContext.js"; // Import the AuthProvider

function App() {
  return (
    <AuthProvider>
      {/* Wrap the entire application with AuthProvider */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          

        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
