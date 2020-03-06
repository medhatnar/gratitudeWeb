import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

let mp3 = 'https://dailygratitudemeditation.s3.amazonaws.com/nature.mp3';

export const Meditation = () => {
    const [duration, setDuration] = useState(10);
    
    function fadeInOut(interval) {
        let newVolume = myAudio.volume;
        const changeVol = setInterval(() => {
            var my_math = (Math.exp(newVolume) - 1) / (Math.E - 1);
            if (my_math < 0 || my_math > 1) {
                clearInterval(changeVol);
                if (my_math < 0) myAudio.pause();
            } else {
                myAudio.volume = my_math;
                newVolume += interval;
            };
        }, 50);
    }

	var myAudio = new Audio(mp3);
	myAudio.volume = 0;
	myAudio.addEventListener('timeupdate', event => {
		console.log(
			'The currentTime attribute has been updated. Again.',
			myAudio.currentTime
		);
		if (myAudio.currentTime >= duration) {
			fadeInOut(-0.01);
		}
	});

	return (
		<div>
			<button
				onClick={() => {
					myAudio.play();
					fadeInOut(0.01);
				}}
			>
				start
			</button>
			<input type='text' />
			hello goodbye
		</div>
	);
};
