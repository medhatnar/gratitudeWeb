import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { MenuCards } from 'Components/MenuCards';
import { Navigation } from 'Components/Navigation'; // Server Side Render Nav bar and base container
import SplashImage from 'Assets/Red-Lotus';
import { GlobalStyles } from 'Styles/globalStyles';
import { GREY, DARK_BLUE, WHITE, RED } from 'Styles/colors';
import { reducer, SET_MEDITATIONS } from 'Utils/reducer';
const defaultGreeting = 'Take a minute to meditate and a moment to reflect';
const defaultInfoText =
	'An application with various calming sounds to meditate to and a personal diary of all you are grateful for. Select a meditation theme below when ready.';

const GreetingText = props => {
	return (
		<GreetingTextStyles>
			<h2 className='app-title'>Daily Gratitude</h2>
			<h1 className='greeting'>{props.greeting}</h1>
			<p className='blurb'>{props.infoText}</p>
		</GreetingTextStyles>
	);
};

// const meditations = [
// 	{
// 		id: 1,
// 		img:
// 			'https://dailygratitudemeditation.s3.amazonaws.com/getting_started.jpg',
// 		mp3:
// 			'https://dailygratitudemeditation.s3.amazonaws.com/getting_started.mp3',
// 		name: 'getting_started',
// 	},
// 	{
// 		id: 2,
// 		img: 'https://dailygratitudemeditation.s3.amazonaws.com/nature.jpg',
// 		mp3: 'https://dailygratitudemeditation.s3.amazonaws.com/nature.mp3',
// 		name: 'nature',
// 	},
// 	{
// 		id: 3,
// 		img: 'https://dailygratitudemeditation.s3.amazonaws.com/ocean.jpg',
// 		mp3: 'https://dailygratitudemeditation.s3.amazonaws.com/ocean.mp3',
// 		name: 'ocean',
// 	},
// 	{
// 		id: 420,
// 		img: 'https://dailygratitudemeditation.s3.amazonaws.com/ocean.jpg',
// 		mp3: 'https://dailygratitudemeditation.s3.amazonaws.com/ocean.mp3',
// 		name: 'lo-fi',
// 	},
// ];

export const Welcome = props => {
	const [state, dispatch] = useReducer(reducer, {
		meditations: [],
	});

	useEffect(() => {
		fetch_meditations();
	}, []);

	async function fetch_meditations() {
		let meditationReq = await fetch('http://localhost:5000/meditations', {
			method: 'GET',
			'Access-Control-Allow-Origin': '*',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const meditations = await meditationReq.json();
		console.log(meditations);
		dispatch({ action: SET_MEDITATIONS, payload: meditations });
	}

	return (
		<>
			<GlobalStyles />
			<Navigation loggedIn={false} />
			<MainContainer className='container-welcome'>
				<ContentContainer className='container-main'>
					<GreetingText greeting={defaultGreeting} infoText={defaultInfoText} />
					<MenuCards meditations={state.meditations} />
				</ContentContainer>
				<ContainerImage className='container-image' />
			</MainContainer>
			<FooterStyles>
				<p>An App made by Recursers</p>
				<p>Idea from Malika</p>
			</FooterStyles>
		</>
	);
};

return (
	<>
		<BrowserRouter>
		<div>
			<Navigation loggedIn={false} />
		</div>
		
		<div>
			<Route path='/' component={welcomePage} exact/>
			<Route path='/about' component={About} />
			<Route path='/download' component={DownloadApp} />
		</div>
		</BrowserRouter>
	</>
);

const MainContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 40rem;
	width: 100%;
	background: ${WHITE};
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;
	@media (min-width: 952px) {
		flex-direction: row;
	}
`;

const ContentContainer = styled.div`
	align-items: center;
	order: 2;
	@media (min-width: 952px) {
		order: 1;
		display: flex;
	}
`;

const ContainerImage = styled.div`
	min-height: 20rem;
	min-width: 20rem;
	border-radius: 1em;
	background: url(${SplashImage}) no-repeat center center / cover;
	order: 1;
	width: 85%;
	margin: 0 auto;
	@media (min-width: 952px) {
		order: 2;
		width: 100%;
		padding-top: 30em;
	}
`;

const FooterStyles = styled.footer`
	display: block;
	text-align: center;
`;

export const GreetingTextStyles = styled.div`
	padding: 2rem;
	margin: 0 1em;
	left: 25px;
	@media (min-width: 640px) {
		padding: 5rem;
	}

	.app-title {
		color: ${RED};
	}

	.greeting {
		color: ${DARK_BLUE};
	}

	.blurb {
		color: ${GREY};
	}
`;
