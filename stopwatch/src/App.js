import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch-time">Time: {formatTime()}</div>
      <div className="button-container">
        {isRunning ? (
          <button className="stopwatch-button" onClick={startStopwatch}>
            Stop
          </button>
        ) : (
          <button className="stopwatch-button" onClick={startStopwatch}>
            Start
          </button>
        )}
        <button className="stopwatch-button" onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;