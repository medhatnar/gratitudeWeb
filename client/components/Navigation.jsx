import React from 'react';
import styled from 'styled-components';
import Logo from 'Components/Logo';
import { GREY, WHITE, YELLOW } from 'Styles/colors';

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
						{props.loggedIn && (
							<li>
								<a href='#' className='calendar'>
									Calendar
								</a>
							</li>
						)}
						<li>
							<a href='#' className='login-logout'>
								{props.loggedIn ? 'Logout' : 'Login/Signup'}
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
	justify-content: flex-start;

	@media (min-width: 952px) {
		justify-content: space-between;
	}

	.about,
	.calendar,
	.download,
	.login-logout {
		margin: 0.5em;
		padding: 0.5em 0;
		color: ${GREY};
		text-decoration: none;
	}

	@media (min-width: 640px) {
		.about,
		.calendar,
		.download,
		.login-logout {
			margin: 1em;
		}
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
`;
