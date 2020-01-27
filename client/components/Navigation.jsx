import React from 'react';
import {Link, Switch}  from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components';
import Logo from 'Components/Logo';
import { GREY, WHITE, YELLOW } from 'Styles/colors';
import About from './About'
import DownloadApp from './DownloadApp'

export const Navigation = props => {
	// <Switch>
	// 	<Route path="/about" component={About}></Route>
	// 	<Route path="/download" component={DownloadApp}></Route>
	// </Switch>
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
							<Link to='/about' className='about'>
								About
							</Link>
						</li>
						<li>
							<Link to='/download' className='download'>
								Download App
							</Link>
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
	.download,
	.login-logout {
		margin: 1em;
		padding: 0.5em 0;
		color: ${GREY};
		text-decoration: none;
	}
`;
