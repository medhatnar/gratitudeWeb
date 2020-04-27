import React, { useEffect, useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MainDescription } from 'Components/SharedComponents/shared';
import { DARK_BLUE, WHITE, RED } from 'Styles/colors';

const fiveMin = 300;

export const Meditation = ({ meditations, ...props }) => {
	let audio;
	let { state, pathname } = useLocation();
	let currentMeditation = state
		? state.currentMeditation
		: meditations.filter(
				med => med.name === pathname.substr(pathname.lastIndexOf('/'))
		  )[0];
	const [meditation, updateMeditation] = useState(currentMeditation);
	const [duration, setDuration] = useState(fiveMin);
	const [playOrPause, setPlayOrPause] = useState('play');

	function fadeInOut(interval = 0.01) {
		if (audio) {
			let currVolume = audio.volume;
			const changeVol = setInterval(() => {
				var logBase = (Math.exp(currVolume) - 1) / (Math.E - 1);
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
			audio.addEventListener('play', event => {
				console.log('pway');
			});
			audio.play();
			fadeInOut(0.01);
		}
	}

	function setValidDuration(minutes) {
		setDuration(minutes * 60);
	}

	return (
		<>
			<TimerPageStyles className={`timer-page ${playOrPause}`}>
				<OverlayStyles className='meditation-pause'>
					<MainDescription
						title='Set your day up for success.'
						headline='minutes of unfocus'
						blurb='Take a moment to recognize how good it feels to give yourself a few moments of peace each day.'>
						<input
							list='duration-times'
							type='number'
							autoComplete='off'
							placeholder='5'
							name='duration-number'
							min='1'
							max='10'
							onChange={e => setValidDuration(e.target.value)}
						/>
					</MainDescription>
				</OverlayStyles>
				<UnderlayStyles
					meditationBackground={meditation.img}
					className='meditation-playing'>
					<h1 className='clock'>4:20</h1>
					<button
						onClick={() => {
							fadeInOut();
							if (playOrPause === 'play') {
								setPlayOrPause('pause');
							} else {
								setPlayOrPause('play');
							}
						}}>
						<div className={`icon ${playOrPause}`}></div>
					</button>
				</UnderlayStyles>
			</TimerPageStyles>
		</>
	);
};

const AudioStyles = styled.div`
	margin: 0 auto;
`;

const TimerPageStyles = styled.div`
	display: flex;
	flex-direction: column;
	/* transition: background 1s ease-in-out; */
	color: ${WHITE};
	width: 100%;
	min-height: 90vh;
`;

const OverlayStyles = styled.div`
	position: relative;
	background: ${RED};
	word-break: normal;
	width: 100%;
`;

const UnderlayStyles = styled.div`
	display: flex;
	position: absolute;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	font-size: 9rem;
	min-height: 90vh;
	width: 100%;
	background-image: url(${props => props.meditationBackground});
	background-size: cover;

	input {
		color: ${DARK_BLUE};
		border: none;
		background: none;
		text-align: center;
		font-size: 3rem;
		border-bottom: 6px solid ${DARK_BLUE};
	}

	.clock {
		background: rgba(255, 255, 255, 0.25);
		border: outset 0.1em rgba(255, 255, 255, 0.25);
		border-radius: 0.15em;
	}

	button {
		border: none;
		background: transparent;
		padding: 2em;
		cursor: pointer;
	}

	.icon {
		transition: border-style, border-width 100ms ease-in-out;
		box-sizing: border-box;
		height: 15em;
		width: 15em;
		border-color: transparent;
		border-left-color: ${WHITE};
	}

	.icon.play {
		border-style: solid;
		border-width: 7.5em 0 7.5em 15em;
	}

	.icon.pause {
		border-width: 0 0 0 3em;
		border-style: double;
	}


`;
