import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { LIGHT_BLUE, DARK_BLUE, WHITE, RED } from 'Styles/colors';

export const MenuCards = ({
	cardInfo = ['Get Started', 'Ocean', 'Nature', 'White Noise', 'Lo-fi'],
	...props
}) => {
	return (
			<ContainerMenuStyles className='container-menu'>
				{cardInfo.map((info, cardNumber) => {
					return (
						<CardStyles key={cardNumber}>
							<div className='card'>
								<h3 className='card-number'>{`0${++cardNumber}`}</h3>
								<h2 className='card-title'>{info}</h2>
							</div>
						</CardStyles>
					);
				})}
			</ContainerMenuStyles>
	);
};

const ContainerMenuStyles = styled.div`
	background: ${RED};
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
	padding: 5em 1em 1em 1em;
	cursor: pointer;
	transition: ease-in-out 120ms;

	&:hover {
		transition: ease-in-out 120ms;
		transform: scale(1) translateY(-20px);
	}

	&:nth-child(even) {
		background: ${LIGHT_BLUE};

		h3 {
			color: ${RED};
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
