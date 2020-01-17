import React from 'react';
import styled from 'styled-components';
import { MenuCards } from 'Components/MenuCards';
import { Navigation } from 'Components/Navigation';
import SplashImage from 'Assets/Red-Lotus';
import { GlobalStyles } from 'Styles/globalStyles';
import { GREY, DARK_BLUE, LIGHT_BLUE, WHITE, RED, YELLOW } from 'Styles/colors';

const WelcomeText = props => {
	return (
		<WelcomeTextStyles>
			<h3 className='app-title'>Daily Gratitude</h3>
			<h1 className='greeting'>{props.greeting}</h1>
			<p className='blurb'>{props.infoText}</p>
		</WelcomeTextStyles>
	);
};

const greeting = 'Take a minute to meditate and a moment to reflect';
const infoText =
	'An application with various calming sounds to meditate to and a personal diary of all you are grateful for. Start your day positively.';

export const Welcome = props => {
	return (
		<>
			<GlobalStyles />
			<Navigation loggedIn={false} />
			<ContainerWelcome className='container-welcome'>
				<ContainerMain className='container-main'>
					<WelcomeText greeting={greeting} infoText={infoText} />
				</ContainerMain>
				<MenuCards {...props} />
				<ContainerImage className='container-image' />
			</ContainerWelcome>
			<footer>
				<p>An App made by Nar and Ry</p>
				<p>Idea from Malika</p>
			</footer>
		</>
	);
};

const ContainerWelcome = styled.div`
	position: relative;
	background: ${WHITE};
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;
	display: flex;
	width: 100%;
	min-height: 40rem;
	@media(max-width: 830px) {
		flex-direction: column;
	}
`;

const ContainerMain = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const ContainerImage = styled.div`
	width: 55%;
	border-radius: 1em;
	background: url(${SplashImage}) no-repeat center center / cover;
`;

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
