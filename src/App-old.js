import React,{useState, useEffect} from 'react';
import './App.css';

import SignalGroup from './components/SignalGroup';
import Status from './components/Status';
import Control from './components/Control';

const App = () => {

	const [mode, setMode] = useState('START');

  const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	
	const [startTime,setStartTime] = useState(0);
	const [stopTime,setStopTime] = useState(0.0);

	const [reactionTime, setReactionTime] = useState(0.0);
	const [bestTime, setBestTime] = useState(1000000.0);


	const handleClick = () => {
		if(mode === 'START' || mode === 'RESTART') {
			intiateCountDown();
			setMode('LAUNCH');
		} else if (mode === 'LAUNCH') {
			stopTimer();
			setMode ('RESTART');
		} 
	};


	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
			} else if (!isActive && seconds !== 0) {
				clearInterval(interval);
			}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	
	const intiateCountDown = () => {
		const countDown5 = setInterval(() => {
			setSeconds(seconds => seconds + 1);
			console.log(seconds);
			// console.log(seconds);
			// seconds++;
			if(seconds === 5 ) {
				clearInterval(countDown5);
				setSeconds(seconds => 0);
				runRestofCountdown();  // add delay and start timer
			}
			// return () => clearInterval(countDown5);
		}, 1000);
	}

	const runRestofCountdown = () => {
		const randomDelay = 300 + 2700 * Math.random(); // set a random delay between 0.3 & 3 seconds
		console.log('delay by', randomDelay);
		setTimeout(() => {
			console.log('delay end');
			// seconds = 0;
			setSeconds(0);
			console.log(seconds);
			startTimer();
		}, randomDelay);
		console.log('end of countdown');
	}
		
	
	const startTimer = () => {
		setStartTime(performance.now());
		console.log('start timer',performance.now());
	}

	const stopTimer = () => {
		setStopTime(performance.now());
		let reactTime = Math.floor(performance.now() - startTime);
		setReactionTime(reactTime);

		console.log('stop timer',performance.now());
		console.log('reaction', reactTime);

		if(reactTime < bestTime && reactTime !== 0) {
			setBestTime(reactTime);
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<h5>F1 LAUNCH TIMER</h5>
			</header>
			<div>
				<SignalGroup position={seconds} />
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
