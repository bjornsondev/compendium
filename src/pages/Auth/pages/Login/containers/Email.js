// React
import React, { useState } from 'react';
// Components
import EmailView from '../components/EmailView';

function Email(props){
  let [value, setValue] = useState("");

  let onValueChange = (newValue) => {
    setValue( prev => newValue);
  };

  return (
    <EmailView value={ value } onValueChange={ onValueChange }/>
  )
};

export default Email;