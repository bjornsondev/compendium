import React from 'react';
import { Spring } from 'react-spring/renderprops';

function RunningText(props){
  let textCharCode = props.children.split("").map( char => char.charCodeAt() );

  let animatedText = textCharCode.map( (e, i) => // Надо придумать чтото другое, мне это не нравится
    <Spring
      from={{offset: Math.floor(Math.random() * 100), display: "none"}}
      to={{offset: 0, display: "inline"}}
      delay={props.duration / textCharCode.length * i}
      config={{duration: props.duration / textCharCode.length}}
      key={i}
    >
      {props => <span style={props}>{String.fromCharCode(e + props.offset)}</span>}
    </Spring>
  );
  
  return animatedText;
};

export default RunningText;