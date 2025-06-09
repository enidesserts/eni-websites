import React from 'react';
import './App.css';

function App() {
   const style = {
    backgroundImage: 'url(/Cream.jpg)', // Path to the image in the public folder
    backgroundSize: 'cover', // Makes sure the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    height: '100vh', // Takes up full viewport height
    width: '100%', // Full width
  };
  return (
      <div className="landing-page-container">
        <img
          src="/eni_logo.svg"
          alt="Logo"
          className="svg-overlay"
        />
        <p>Coming soon | Follow our journey on @eni.desserts</p>
      </div>
  );
}

export default App;
