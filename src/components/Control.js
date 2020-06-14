import React from 'react';
import PropTypes from 'prop-types';

const Control = ({mode, handleClick}) => {
	// useEffect(() => {
	// 	if(timerState === true) {
	// 		let timePassed = performance.now() - startTime;
	// 		console.log('timePassed', timePassed);
	// 		setTimePassed(timePassed);
	// 	}
	// 	else {
	// 		setTimePassed(0.0);
	// 	}
	// },[startTime, timerState]);

	return (
		<button
			className={`button b-${mode.toLowerCase()}`}
			onClick={handleClick}
		>
			{mode}
		</button>
	);
}

Control.propTypes = {
	status: PropTypes.string,
};

export default Control;