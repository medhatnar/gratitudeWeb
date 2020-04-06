import styled, { css, createGlobalStyle } from 'styled-components';
import { TEAL, RED, DARK_BLUE, GREY } from 'Styles/colors';

// resetting browser default styles
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    bottom: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${TEAL};
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  h1,h2,h3,h4,h5,h6,p,ul,li {
    margin: 0;
    padding: 0;
  }

  img {
      width: 100%;
  }

`;

export const MainDescriptionStyles = styled.div`
	padding: 2rem;
	margin: 0 1em;
	left: 25px;
	@media (min-width: 640px) {
		padding: 5rem;
	}

	.title {
		color: ${RED};
	}

	.headline {
		color: ${DARK_BLUE};
	}

	.blurb {
		color: ${GREY};
	}
`;

// wrapper for keeping all elements in the same box-model styles
// export const wrapper = css`
//   padding: 16px;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// export const Wrapper = styled.div`
//   ${wrapper}
// `;

