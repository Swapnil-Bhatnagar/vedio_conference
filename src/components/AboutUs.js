import React from "react";
import pop1 from "../assests/pop1.webp"; // Replace with the actual path

const AboutUs = () => {
  const containerStyle = {
    backgroundImage: `url(${pop1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Adjust as needed
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    padding: "20px",
    opacity: 0,
    animation: "fade-in 1s forwards",
    textAlign: "center", // Center-align text
  };

  const textContainerStyle = {
    maxWidth: "800px", // Limit text width for better readability
    margin: "0 auto", // Center-align text within the container
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Introducing our advanced video conferencing app, developed with React and WebRTC technologies. 
          Seamlessly bridging distances, our user-friendly interface ensures easy navigation, while WebRTC guarantees high-quality, real-time communication. 
          Join us in revolutionizing virtual interactions and experience the future of seamless connectivity.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
