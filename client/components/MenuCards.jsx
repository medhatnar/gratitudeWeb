import React from 'react';
import styled from 'styled-components';
import { LIGHT_GREY, DARK_BLUE, WHITE, RED } from 'Styles/colors';

export const MenuCards = ({
	cardInfo = ['card', 'card2', 'card3'],
	...props
}) => {
	return (
		<CardStyles>
			{cardInfo.map(info, i => {
				return (
					<div className='card' key={Math.random() * 4}>
						<h3 className='card-number'>{info}</h3>
						<h2 className='card-title'>{info}</h2>
					</div>
				);
			})}
		</CardStyles>
	);
};

const CardStyles = styled.div`
	&:nth-child(2) {
		background: ${RED};
	}
	/* padding: 100px; */
`;
