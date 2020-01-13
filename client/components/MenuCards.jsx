import React from 'react';
import styled from 'styled-components';
import { LIGHT_BLUE, DARK_BLUE, WHITE, RED } from 'Styles/colors';

export const MenuCards = ({
	cardInfo = ['Get Started', 'Ocean', 'Nature', 'White Noise'],
	...props
}) => {
	return (
		<ContainerMenuStyles className='container-menu'>
			{cardInfo.map((info, cardNumber) => {
				return (
					<CardStyles key={Math.random() * 4}>
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
	position: absolute;
	border: 5px solid green;
	bottom: 0;
	right: 25%;
	display: flex;
`;

const CardStyles = styled.div`
	width: 25%;
	padding: 5em 1em 1em 1em;

	&:nth-child(1) {
		border-top-left-radius: 1rem;
	}

	&:last-child {
		border-top-right-radius: 1rem;
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
	/* trying to figure out how to color every other card
       try coloring even indexes(i) ?
    */
`;
