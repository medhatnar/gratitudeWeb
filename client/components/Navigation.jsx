import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'Components/Logo';
import { Home } from 'Components/Welcome';
import { GREY, WHITE, YELLOW } from 'Styles/colors';

export const Navigation = props => {
	return (
		<header>
			<NavStyles>
				<BrowserRouter>
					<span className='logo'>
						<Link to={<Home />}>
							<Logo />
						</Link>
					</span>
					<nav>
						<ul role='list' className='nav-options'>
							<li>
								<Link className='about' to={<></>}>
									About
								</Link>
							</li>
							<li>
								<Link className='download' to={<></>}>
									Download App
								</Link>
							</li>
							{props.loggedIn && (
								<li>
									<Link className='calendar' to={<></>}>
										Calendar
									</Link>
								</li>
							)}
							<li>
								<Link className='login-logout' to={<></>}>
									{props.loggedIn ? 'Logout' : 'Login/Signup'}
								</Link>
							</li>
						</ul>
					</nav>
				</BrowserRouter>
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
