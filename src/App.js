// React
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// Components
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className="App">
      { true // Temporarily for coding
        ? <Redirect to="/auth"/> 
        : <Redirect to="/home"/> }

      <Route path="/home" 
             render={ () => <Home/> } />
      <Route path="/auth" 
             render={ () => <Auth/> } />
    </div>
  );
}


export default App;
