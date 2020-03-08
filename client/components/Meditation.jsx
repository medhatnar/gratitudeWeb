import React, { useEffect, useState, useReducer } from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { reducer } from 'Utils/reducer';

export const Meditation = props => {
	let audio;
	let { name } = useParams();
	const [duration, setDuration] = useState(5);
	const [meditation, setMeditation] = useState(
		props.meditations.filter(meditation => meditation.name === name)[0]
	);

	function fadeInOut(interval=0.01) {
		if (audio) {
			let newVolume = audio.volume;
			const changeVol = setInterval(() => {
				var my_math = (Math.exp(newVolume) - 1) / (Math.E - 1);
				if (my_math < 0 || my_math > 1) {
					clearInterval(changeVol);
					if (my_math < 0) audio.pause();
				} else {
					audio.volume = my_math;
					newVolume += interval;
				}
			}, 40);
		} else {
			audio = new Audio(meditation.mp3);
			audio.addEventListener('timeupdate', event => {
				console.log(
					'The currentTime attribute has been updated. Again.',
					audio.currentTime
				);
				if (audio.currentTime >= duration) {
					fadeInOut(-0.01);
				}
			});
			audio.play();
			fadeInOut(0.01);
		}
	}

	return (
		<>
			<button
				onClick={() => {
					fadeInOut();
				}}
			>
				start
			</button>
			<input type='text' />
			hello goodbye
		</>
	);
};
