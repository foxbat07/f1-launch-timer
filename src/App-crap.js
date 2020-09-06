import React, { useState, useEffect } from 'react';
import SignalGroup from './components/SignalGroup';
import './App.css';

const cd = 4; // 5 second gap
let rd = 0; // random delay set to 0 initially

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  function createRandomDelay() {
    rd = 0.3 + 2.7 * Math.random();
  }
  
  function buttonState() {
    if (isActive === false) {
        createRandomDelay();
        setIsActive(true);
    }
    else {
      setIsActive(false);
      if(seconds > cd + rd) {
        setEndTime(Date.now());
        setReactionTime(Date.now() - startTime);
      }
      else {  
        setReactionTime(9043);
        setSeconds(0);
        setStartTime(0);
        console.log(reactionTime);
      }
    }
}

  useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

  return (
    <div className="app">
      <header className="App-header">
				<h5>F1 LAUNCH TIMER</h5>
			</header>
      <SignalGroup position={seconds} />
      <div className="time">
        {seconds}
      </div>
      <div className="time">
        {reactionTime}
      </div>
      <div className="time">
        {rd}
      </div>
      <div className="row">
        <button className="button" onClick={buttonState}>
            {isActive ? 'LAUNCH' : 'START'}
        </button>
      </div>
    </div>
  );
};

export default App;