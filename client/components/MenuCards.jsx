import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { Meditation } from 'Components/Meditation';
import { LIGHT_BLUE, DARK_BLUE, WHITE, RED, BLACK } from 'Styles/colors';

export const MenuCards = ({ meditations, ...props }) => {
	return (
		<Router>
			<ContainerMenuStyles className='container-menu'>
				{meditations.map((meditation, cardNumber) => {
					return (
						<CardStyles key={meditation.id}>
							<Link to={`/meditation/${meditation.name}`}>
								<div className='card'>
									<h3 className='card-number'>{`0${++cardNumber}`}</h3>
									<h2 className='card-title'>{meditation.name}</h2>
								</div>
							</Link>
							<Switch>
								<Route path='/:name' children={<Meditation />} />
							</Switch>
						</CardStyles>
					);
				})}
			</ContainerMenuStyles>
		</Router>
	);
};

const ContainerMenuStyles = styled.div`
	background: none;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	position: relative;
	bottom: 0;
	display: flex;

	@media (min-width: 952px) {
		position: absolute;
		right: 35%;
	}
`;

const CardStyles = styled.div`
	width: 25%;
	display: block;
	padding: 5em 1em 1em 1em;
	cursor: pointer;
	transition: ease-in-out 120ms;
	min-width: 5vw;
	word-wrap: wrap;
	overflow-wrap: break-word;

	a {
		text-decoration: none;
	}

	&:hover {
		transition: ease-in-out 120ms;
		transform: scale(1) translateY(-20px);
	}

	&:nth-child(even) {
		background: ${LIGHT_BLUE};

		h3 {
			color: ${RED};
		}

		h2 {
			color: ${BLACK}
		}
	}

	&:nth-child(odd) {
		background: ${DARK_BLUE};

		h3 {
			color: ${WHITE};
		}

		h2 {
			color: ${RED};
		}
	}

	&:first-child {
		border-top-left-radius: 1rem;
	}

	&:last-child {
		border-top-right-radius: 1rem;
	}
`;
