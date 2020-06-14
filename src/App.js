import React,{useState, useEffect} from 'react';
import './App.css';

import SignalGroup from './components/SignalGroup';
import Status from './components/Status';
import Control from './components/Control';


const App = () => {

  const [mode, setMode] = useState('START');
  const [timerState, setTimerState] = useState(false);
  
  const [startTime,setStartTime] = useState(0);
  const [stopTime,setStopTime] = useState(0.0);
  const [timePassed,setTimePassed] = useState(0);
  
  const [reactionTime, setReactionTime] = useState(0.0);
  const [bestTime, setBestTime] = useState(1000000.0);

  const handleClick = () => {
    if(mode === 'START' || mode === 'RESTART') {
      startTimer();
      setMode('LAUNCH');
      setTimerState(true);
    } else if (mode === 'LAUNCH') {
      stopTimer();
      setMode ('RESTART');
      setTimerState(false);
    } 
  };
  
  const startTimer = () => {
    setStartTime(performance.now());
    console.log('start',performance.now());
  }

  const stopTimer = () => {
    setStopTime(performance.now());
    let reactTime = Math.floor(performance.now() - startTime);
    setReactionTime(reactTime);
    console.log('stop',performance.now());
  console.log('reaction', typeof reactTime);
  
    if(reactTime < bestTime && reactTime !== 0) {
      setBestTime(reactTime);
    }
  }

  return (
  <div className="App">
    <header className="App-header">
    <h6>F1 LAUNCH TIMER</h6>
    </header>
    <div>
    <SignalGroup position={0} />
    <Status
      primary={reactionTime || 'READY?'} 
      secondary={bestTime} 
    />
    <Control mode={mode} handleClick ={handleClick} />
    </div>
    <footer>
    <a className="App-footer" href="https://mohithingoran.com" target="_blank" rel="noopener noreferrer">
      LEARN MORE
    </a>
    </footer>
  </div>
  );
}

export default App;
