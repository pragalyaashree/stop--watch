import React, { useState, useEffect } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="display">
        <h2>Timer</h2>
        <div className="time">
          {("0" + Math.floor((time / 3600) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 60) % 60)).slice(-2)}:
          {("0" + (time % 60)).slice(-2)}
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleStart} className="start">Start</button>
        <button onClick={handleStop} className="stop">Stop</button>
        <button onClick={handleReset} className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;