import React from 'react';
import styled from 'styled-components';
import { RED, DARK_BLUE, GREY } from 'Styles/colors';

export const MainDescription = ({ children, ...props }) => (
	<MainDescriptionStyles>
		<h2 className='title'>{props.title}</h2>
        {children}
		<h1 className='headline'>{props.headline}</h1>
		<h3 className='blurb'>{props.blurb}</h3>
	</MainDescriptionStyles>
);

const MainDescriptionStyles = styled.div`
	.title {
		color: ${RED};
	}

	.headline {
		color: ${DARK_BLUE};
	}

	.blurb {
		font-weight: 400;
		color: ${GREY};
	}
`;