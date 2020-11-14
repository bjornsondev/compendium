import React from 'react';
import { createGlobalStyle } from 'styled-components';
import oscFont from '../assets/fonts/osca.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'osc';
    src: url(${oscFont});
  }
  *, *::after, *::before {
    box-sizing: border-box;
    font-family: 'osc', Arial, Helvetica, sans-serif;
  }
  body {
    background-color: #000;
    color: ${ p => p.theme.cold };
  }
`;

export default GlobalStyles;