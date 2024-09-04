import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen';
import HomePage from './components/HomePage';
import './App.css'; // Custom CSS for animations

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <div className="App">
      {!hasStarted ? (
        <OpeningScreen onStart={handleStart} />
      ) : (
        <div className="fade-in">
          <HomePage />
        </div>
      )}
    </div>
  );
}

export default App;
