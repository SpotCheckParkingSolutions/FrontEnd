import React from 'react';

const OnOffClientOption = (props) =>{
  return (
    <div className="client-option">
      <span className="client-option-status">{props.optionName.toUpperCase()}:
      {props.optionStatus === 0 ? 'OFF' : (props.optionStatus === 1 ? 'ON' : 'ERROR')}</span>
      {props.optionStatus !== 2
      ?
      <button onClick={()=> {
        props.optionStatus === 0 ?
        alert(`this would turn ${props.optionName} on`) :
        alert(`this would turn ${props.optionName} off`)
          }}> Turn {props.buttonName} {props.optionStatus === 0 ? 'On' : 'Off'}
      </button>
      :
      <button
        style={{color: 'red'}}
        onClick={()=>alert("This would offer error handling options")}
      >Error</button>
      }

    </div>
  )
}

export default OnOffClientOption;
