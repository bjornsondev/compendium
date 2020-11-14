// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
// API
import * as firebase from 'firebase/firebase'; 
import firebaseConfig from './apiKeys/apiKeys';
// Styles
import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';
import GlobalStyles from './config/GlobalStyles';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <App />   
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

