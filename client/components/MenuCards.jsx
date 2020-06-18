import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LIGHT_BLUE, DARK_BLUE, WHITE, RED, BLACK } from 'Styles/colors';

export const MenuCards = ({ meditations, ...props }) => {
	return (
		<ContainerMenuStyles className='container-menu'>
			{meditations.map((meditation, cardNumber) => {
				return (
					<CardStyles key={meditation.id}>
						<Link
							to={{
								pathname: `/meditation/${meditation.name}`,
								state: { currentMeditation: meditation },
							}}>
							<div className='card'>
								<h3 className='card-number'>{`0${++cardNumber}`}</h3>
								<h2 className='card-title'>{meditation.name}</h2>
							</div>
						</Link>
					</CardStyles>
				);
			})}
		</ContainerMenuStyles>
	);
};

const ContainerMenuStyles = styled.div`
	background: none;
	bottom: 0;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	position: absolute;
	display: flex;
	width: 100%;

	@media (min-width: 952px) {
		right: 25%;
		width: 50%;
	}
`;

const CardStyles = styled.div`
	width: 25%;
	display: block;
	cursor: pointer;
	transition: ease-in-out 120ms;
	min-width: 10vw;
	min-height: 10vh;
	word-wrap: wrap;
	overflow-wrap: break-word;
	padding: 5em 1em 1em 1em;

	a {
		text-decoration: none;
		padding: 0rem;
	}

	@media (min-width: 952px) {
		a {
			padding: 5rem;
		}
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
			color: ${BLACK};
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
