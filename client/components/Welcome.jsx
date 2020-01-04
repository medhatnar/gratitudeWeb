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

export const Welcome = props => {
	return (
		<>
			<GlobalStyles />
			<Navigation loggedIn={false} />
			<ContainerWelcome className='container-welcome'>
				<main role='main'>
					<div className='container-main'>
						<div className='welcome-text'>
							<WelcomeText
								greeting='Take a minute to meditate and a moment to reflect'
								infoText='An application with various calming sounds to meditate to and a personal
				diary of all you are grateful for. Start your day
				positively.'
							/>
						</div>
						<div className='container-menu'>
							<MenuCards {...props} />
						</div>
					</div>
				</main>
				{/* splash image */}
				<div className='container-image'>
					<img src={SplashImage} alt='some calming image' />
				</div>
			</ContainerWelcome>
			<footer>
				<p>An App made by Nar and Ry</p>
				<p>Idea from Malika</p>
			</footer>
		</>
	);
};

const ContainerWelcome = styled.div`
	background: ${WHITE};
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	display: flex;
`;

const WelcomeTextStyles = styled.div`
	.app-title {
		color: ${LIGHT_BLUE};
	}

	.greeting {
		color: ${YELLOW};
	}

	.blurb {
		color: ${GREY};
	}
`;
