import React from 'react';
import styled from 'styled-components';
import Logo from 'Components/Logo';
import { GREY, WHITE, YELLOW, RED } from 'Styles/colors';

export const Navigation = props => {
	return (
		<header>
			<NavStyles>
				<span className='logo'>
					<a href='#'>
						<Logo />
					</a>
				</span>
				<nav>
					<ul role='list' className='nav-options'>
						<li>
							<a href='#' className='about'>
								About
							</a>
						</li>
						<li>
							<a href='#' className='download'>
								Download App
							</a>
						</li>
						<li>
							<a href='#' className='calendar'>
								{props.loggedIn || 'Calendar'}
							</a>
						</li>
						<li>
							<a href='#' className='login-logout'>
								{props.loggedIn || 'Login'}
							</a>
						</li>
					</ul>
				</nav>
			</NavStyles>
		</header>
	);
};

const NavStyles = styled.div`
	background: ${WHITE};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	display: flex;
	justify-content: space-between;
	@media(max-width: 830px) {
		justify-content: flex-start;
	}
	a:hover,
	a:focus {
		color: ${YELLOW};
	}

	ul {
		display: flex;
	}

	li {
		display: flex;
		flex-direction: column;
	}

	.logo {
		padding: 0.5em 0;
	}

	.about,
	.calendar,
	.download,
	.login-logout {
		margin: 1em;
		padding: 0.5em 0;
		color: ${GREY};
		text-decoration: none;
	}
`;
