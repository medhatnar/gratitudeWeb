import React from 'react';
import styled from 'styled-components';
import { MenuCards } from 'Components/MenuCards';
import { Navigation } from 'Components/Navigation';
import SplashImage from 'Assets/Red-Lotus';
import { GlobalStyles } from 'Styles/globalStyles';
import { GREY, DARK_BLUE, WHITE, RED } from 'Styles/colors';

const defaultGreeting = 'Take a minute to meditate and a moment to reflect';
const defaultInfoText =
	'An application with various calming sounds to meditate to and a personal diary of all you are grateful for. Start your day positively.';

const WelcomeText = props => {
	return (
		<WelcomeTextStyles>
			<h3 className='app-title'>Daily Gratitude</h3>
			<h1 className='greeting'>{props.greeting}</h1>
			<p className='blurb'>{props.infoText}</p>
		</WelcomeTextStyles>
	);
};

export const Welcome = props => {
	return (
		<>
			<GlobalStyles />
			<Navigation loggedIn={true} />
			<ContainerWelcome className='container-welcome'>
				<ContainerMain className='container-main'>
					<WelcomeText greeting={defaultGreeting} infoText={defaultInfoText}/>
				<MenuCards {...props} />
				</ContainerMain>
				<ContainerImage className='container-image' />
			</ContainerWelcome>
			<FooterStyles>
				<p>An App made by Nar and Ry</p>
				<p>Idea from Malika</p>
			</FooterStyles>
		</>
	);
};

const ContainerWelcome = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 40rem;
	width: 100%;
	background: ${WHITE};
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;
	@media (min-width: 830px) {
		flex-direction: row;
	}
`;

const ContainerMain = styled.div`
	align-items: center;
	order: 2;
	@media (min-width: 830px) {
		order: 1;
		display:flex;
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
	@media (min-width: 830px) {
		order: 2;
		width: 75%;
	}
`;

const FooterStyles = styled.footer`
	display: block;
	text-align: center;
`

const WelcomeTextStyles = styled.div`
	padding: 5rem;
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
