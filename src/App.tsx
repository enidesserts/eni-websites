import React from 'react';
import './App.css';

function App() {
  return (
      <div className="landing-page-container">
        <img
          src="/eni_logo.svg"
          alt="Logo"
          className="svg-overlay"
        />
        <p>
          Coming soon | Follow our journey on
          <a className="hyperlink" href='https://www.instagram.com/eni.desserts/'> @eni.desserts</a>
        </p>
      </div>
  );
}

export default App;
