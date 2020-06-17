import React, { useEffect, useState, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MainDescription } from 'Components/SharedComponents/shared';
import { DARK_BLUE, WHITE, RED } from 'Styles/colors';
import { AudioPlayer } from 'Components/AudioPlayer';

export const Meditation = ({ meditations, ...props }) => {
	let { state, pathname } = useLocation();
	let currentMeditation = !state
		? state.currentMeditation
		: meditations.filter(
				med => med.name === pathname.substr(pathname.lastIndexOf('/'))
		  )[0];
	const [meditation, updateMeditation] = useState(state.currentMeditation);
	const [duration, setDuration] = useState(5);



	function setValidDuration(minutes) {
		console.log('minutes', minutes);
		if (minutes > 10) {
			setDuration(600);
		} else if (minutes < 1) {
			setDuration(60);
		} else {
			setDuration(minutes * 60);
		}
	}

	return (
		<>
			<TimerPageStyles className={`timer-page`}>
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
					<AudioPlayer duration={duration} media={meditation.mp3} />
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
	background: ${WHITE};
	flex-direction: column;
	/* transition: background 1s ease-in-out; */
	color: ${WHITE};
	width: 100%;
	min-height: 100vh;
`;

const OverlayStyles = styled.div`
	word-break: normal;
	width: 100%;

	input {
		color: ${DARK_BLUE};
		border: none;
		background: none;
		text-align: center;
		font-size: 3rem;
		border-bottom: 6px solid ${DARK_BLUE};
	}
`;

const UnderlayStyles = styled.div`
	min-height: 100vh;
	width: 100%;
	background-image: url(${props => props.meditationBackground});
	background-size: cover;
`;
