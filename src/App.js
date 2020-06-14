import React,{useState, useEffect} from 'react';
import './App.css';

import SignalGroup from './components/SignalGroup';
import Status from './components/Status';
import Control from './components/Control';

const App = () => {

	const [mode, setMode] = useState('START');

	const [startTime,setStartTime] = useState(0);
	const [stopTime,setStopTime] = useState(0.0);
	const [reactionTime, setReactionTime] = useState(0.0);
	const [bestTime, setBestTime] = useState(1000000.0);

	let lightsToBeOn = 0;
	// const [lightsToBeOn, setLightsToBeOn] = useState(0);

	const handleClick = () => {
		if(mode === 'START' || mode === 'RESTART') {
			intiateCountDown();
			setMode('LAUNCH');
		} else if (mode === 'LAUNCH') {
			stopTimer();
			setMode ('RESTART');
		} 
	};

	const intiateCountDown = () => {
		const countDown5 = setInterval(() => {
			if(lightsToBeOn < 5 ) {
				// setLightsToBeOn(lightsToBeOn => lightsToBeOn + 1);
				// console.log(lightsToBeOn);
				lightsToBeOn++;
				console.log(lightsToBeOn);
			} else {
				const randomDelay = 300 + 2700 * Math.random(); // set a random delay between 0.3 & 3 seconds
				console.log('delay by', randomDelay);
				setTimeout(() => {
					console.log('delay end');
					lightsToBeOn = 0;
					startTimer();
				}, randomDelay);
				// setLightsToBeOn(0);
				clearInterval(countDown5);
			}
		}, 1000);
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
				<h6>F1 LAUNCH TIMER</h6>
			</header>
			<div>
				<SignalGroup position={lightsToBeOn} />
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
