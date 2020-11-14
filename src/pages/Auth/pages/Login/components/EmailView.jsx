// React
import React from 'react';
// Components
import RunningText from '../animations/RunningText';
// Styles
import styled from 'styled-components';
import EmailField from './EmailField';

function EmailView(props){
  
  return (
    <Wrapper>
      <Label>
        <RunningText duration="1200">
          Please identify your person
        </RunningText>
      </Label>

      <EmailField {...props}/>
    </Wrapper>
  )
};



export default EmailView;

// Styles 

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
`;
const Label = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 10px;
  transition: .3s;
  height: 30px;
`;
