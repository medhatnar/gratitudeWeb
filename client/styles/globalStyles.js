import styled, { css, createGlobalStyle } from 'styled-components';
import { TEAL , WHITE} from 'Styles/colors';

// resetting browser default styles
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${TEAL};
  }

  html, body {
    min-width: 540px;
    height: 100%;
    width: 100%;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6,p,ul,li {
    margin: 0;
    padding: 0;
  }

  img {
      width: 100%;
  }

`;

