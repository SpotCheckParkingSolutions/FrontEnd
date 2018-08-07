import React from 'react';

const OnOffClientOption = (props) =>{
  return (
    <div className="client-option">
      <span className="client-option-status">{props.optionName.toUpperCase()}:
      {props.optionStatus === 0 ? 'OFF' : (props.optionStatus === 1 ? 'ON' : <h4 className='optionError'>ERROR</h4>)}</span>
      {props.optionStatus !== 2
      ?
      <button onClick={()=> {
        props.optionStatus === 0 ?


          fetch('http://localhost:3001/command', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${props.optionName}`
          })
        }).then(res=> res.json()).then(res=> alert(res))



         :

          fetch('http://localhost:3001/command', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${props.optionName}`
          })
        }).then(res=> res.json()).then(res=> alert(res.command))

    }}

      > Turn {props.buttonName} {props.optionStatus === 0 ? 'On' : 'Off'}
      </button>
      :
      <button
        className='errorButton'
        onClick={()=> {fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${props.optionName}`
          })
        })
        console.log("Ran POST");
      }
      }
      >Error</button>
      }

    </div>
  )
}

export default OnOffClientOption;
