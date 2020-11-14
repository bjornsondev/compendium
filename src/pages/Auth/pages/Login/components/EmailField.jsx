import React from 'react';
import TextField, { TextFieldOctogon, 
                    TextFieldWrapper } from '../../../components/TextField/TextField';
import styled, {keyframes} from 'styled-components';

function EmailField({value, onValueChange}){
  return (
    <Wrapper>
      <Octogon>
        <TextField 
          type="email" placeholder="E-mail"
          onChange={ e => onValueChange(e.target.value) }
          value={ value }/>
      </Octogon>
    </Wrapper>
  )
};

export default EmailField;

// Styles
const borderAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
`;
const fieldAnimation = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

let Wrapper = styled(TextFieldWrapper)`
  ::before, ::after {
    animation: ${borderAnimation} 1.2s ease-out 1;
  }
`;
let Octogon = styled(TextFieldOctogon)`
    animation: ${fieldAnimation} 1.2s ease-in 1;
`;