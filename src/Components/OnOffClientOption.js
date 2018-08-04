import React from 'react';

const OnOffClientOption = (props) =>{
  return (
    <div className="client-option">
      <span className="client-option-status">{props.optionName.toUpperCase()}:
      {props.optionStatus === 0 ? 'OFF' : 'ON'}</span>
      <button onClick={()=> {
        props.optionStatus === 0 ?
        alert(`this would turn ${props.optionName} on`) :
        alert(`this would turn ${props.optionName} off`)
          }}> Turn {props.buttonName} {props.optionStatus === 0 ? 'On' : 'Off'}</button>
    </div>
  )
}

export default OnOffClientOption;
