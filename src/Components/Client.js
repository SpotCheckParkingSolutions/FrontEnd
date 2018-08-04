import React from 'react';

const Client = (props)=>{

  return (
    <div
      className= {
        `client client-${props.id}
         ${props.selected ? 'selected' : 'not-selected'}`}>
      <span> id: {props.id} </span>
      <span> power: {props.power ? 'on' : 'off'}</span>
      <button
        onClick = {props.onClick}
      >
          Select Client {props.id}
      </button>
    </div>
  )

}

export default Client;
