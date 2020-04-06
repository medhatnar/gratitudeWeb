import React, { useEffect, useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MainDescriptionStyles } from 'Styles/globalStyles';
import { DARK_BLUE } from 'Styles/colors';

export const Meditation = ({ meditations, ...props }) => {
	let audio;
	let { state, pathname } = useLocation();
	let currentMeditation = !state
		? state.currentMeditation
		: meditations.filter(
				med => med.name === pathname.substr(pathname.lastIndexOf('/'))
		  )[0];
	const [meditation, updateMeditation] = useState(state.currentMeditation);
	const [duration, setDuration] = useState(60);

	function fadeInOut(interval = 0.01) {
		if (audio) {
			let currVolume = audio.volume;
			const changeVol = setInterval(() => {
				var logBase = (Math.exp(currVolume) - 1) / (Math.E - 1); // formerly known as myMath
				if (logBase < 0 || logBase > 1) {
					clearInterval(changeVol);
					if (logBase < 0) audio.pause();
				} else {
					audio.volume = logBase;
					currVolume += interval;
				}
			}, 50);
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

	function setValidDuration(minutes) {
		console.log('minutes', minutes);
		if (minutes < 1) {
			setDuration(60);
		} else if (minutes > 10) {
			setDuration(600);
		} else {
			setDuration(minutes);
		}
	}

	return (
		<>
			<div className='overlay'>
				<button>back</button>
				<MainDescriptionStyles>
					<h2 className='title'>dddd </h2>
					<h1 className='headline'>unfocus</h1>
					<NumberInput>
						<datalist id='duration-times'>
							{[...Array(10).keys()].map(index => (
								<option key={index + 1} value={index + 1} />
							))}
						</datalist>
						<input
							list='duration-times'
							type='number'
							value={duration}
							autoComplete='off'
							name='durationNumber'
							onChange={e => setValidDuration(e.target.value)}
						/>{' '}
						minutes of unfocus
					</NumberInput>
					<p className='blurb'>bopb bopbop bop</p>
				</MainDescriptionStyles>
			</div>
			<TimerPageStyles>
				<div className='timer'>
					<h1></h1>
				</div>
				<button
					onClick={() => {
						fadeInOut();
					}}>
					start
				</button>
				<img
					src='../../assets/sunrays-through-trees.jpg'
					alt='meditative space'
				/>
			</TimerPageStyles>
		</>
	);
};

const AudioStyles = styled.div`
	margin: 0 auto;
`;

const NumberInput = styled.div`
	width: 20%;

	input {
		border: none;
		background: none;
		border-bottom: 6px solid ${DARK_BLUE};
	}

	/* input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	} */
`;

const TimerPageStyles = styled.div``;
