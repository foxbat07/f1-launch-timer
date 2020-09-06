import React, { useState, useEffect } from 'react';

import Control from './components/Control';
import SignalGroup from './components/SignalGroup';
import Status from './components/Status';

import './App.css';

const baseTime = 5; // 5 second gap

const App = () => {

  const [bestTime, setBestTime] = useState(1000000.0);
  const [totalTime, setTotalTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);

  const [signalPosition, setSignalPosition] = useState(5);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if(!isActive) {
      setIsActive(true);
      setTimer();
      setStartTime(Date.now());
    }
    else {
      setIsActive(false);
      const elapsed = elapsedTime - totalTime;
      setReactionTime(elapsed);
      if(elapsed < bestTime && elapsed > 0)
        setBestTime(elapsed);
    }
  }

  const setTimer = () => {
    const rd = 0.3 + 2.7 * Math.random();
    setTotalTime((baseTime+rd) * 1000);
  }

  const tick = () => {
    setElapsedTime(Date.now()-startTime);  // repeat date now VIMP.
    if(elapsedTime < totalTime )
      setSignalPosition(Math.min(5, Math.trunc(elapsedTime/1000)));
    else 
      setSignalPosition(0);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => tick(), 5);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
   });
  
  return (
    <div className="App">
      <header className="App-header">
				<h6>F1 LAUNCH TIMER</h6>
			</header>
      <SignalGroup position={signalPosition} />
      <div>
        <Status
          isActive
					primary={Math.trunc(reactionTime)} 
					secondary={Math.trunc(bestTime)}
				/>
        <Control mode={isActive ? 'LAUNCH' : 'START'} handleClick ={handleClick} />
      </div>
      <footer>
        Created by &nbsp;
				<a className="App-footer" href="https://mohithingorani.com" target="_blank" rel="noopener noreferrer">
					Mohit Hingorani
				</a>
			</footer>
    </div>
  );
};

export default App;