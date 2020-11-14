import React from 'react';
import styled, { keyframes } from 'styled-components';


function TextField(props){
  return (
    <Field {...props}/>
  )
};

export const TextFieldWrapper = styled.div`
  position: relative;
  padding: 10px;
  height: 70px;
  ::before, ::after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 10px;

    clip-path: polygon(
      0 100%, 10px 0, calc(100% - 10px) 0, 100% 100%, 
      calc(100% - 2.5px) 100%, calc(100% - 10.5px) 2px, 11px 2px, 2.5px 100%
    );
    background-image: linear-gradient(to right, transparent 50%, ${ p => p.theme.warm} 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    
  } 
  ::after {
    transform: scale(-1);
    top: auto;
    bottom: 0;
  }
`;

export const TextFieldOctogon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2px;

  clip-path: polygon(
    0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px,
    100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px)
  );
  background-color: ${ p => p.theme.cold };
`;

const Field = styled.input`
  background-color: #000;
  height: 100%;
  width: 100%;
  padding: 5px 10px;
  border: none;
  color: ${ p => p.theme.cold };
  font-size: 18px;
  transition: .3s;

  clip-path: polygon(
    0 9px, 9px 0, calc(100% - 9px) 0, 100% 9px,
    100% calc(100% - 9px), calc(100% - 9px) 100%, 9px 100%, 0 calc(100% - 9px)
  );

  ::placeholder {
    color: inherit;
    opacity: .6;
    font-size: 16px;
  }

  :focus {
    outline: none;
    background-color: #000000aa;
    ::placeholder {
      opacity: 0;
    }
  }
`;

export default TextField;
