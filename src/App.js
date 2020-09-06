import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function buttonState() {
    if (isActive === false) {
        setIsActive(true);
    }
    else {
      setIsActive(false);
      if(seconds > 5) {
        setEndTime(Date.now());
        setReactionTime(Date.now() - startTime);
      }
      else
      setReactionTime(6969);
      setSeconds(0);
      setStartTime(0);
      console.log(reactionTime);
    }
}

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if(seconds >= 0 && seconds <= 5) {
          setSeconds(seconds => seconds + 1);
          console.log(seconds);
        }
        else if (seconds > 5) {
          console.log(seconds);
          clearInterval(interval);
          setStartTime(Date.now());
          // console.log(startTime);
          // setIsActive(false);
          }
      }, 1000);
    }  else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}
      </div>
      <div className="time">
        {reactionTime}
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