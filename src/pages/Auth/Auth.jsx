// React
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// Styles
import styled from 'styled-components';
// Components
import Login from './pages/Login/Login';

function Auth(props){
  return (
    <Wrapper>
      { true // Temporarily for coding
        ? <Redirect to="/auth/login"/> 
        : <Redirect to="/auth/register"/> }

      <Route path="/auth/login" 
             render={ () => <Login/>} />
    </Wrapper>
  )
};

export default Auth;

// Styles 
let Wrapper = styled.div`
  display: block;
`;