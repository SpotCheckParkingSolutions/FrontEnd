import React, { Component } from 'react';

import OnOffClientOption from './OnOffClientOption';
import ErrorNotification from './ErrorNotification';
const SelectedClientDisplay =(props)=>{
  let client = props.client
  return (
    <div className="client-selection">
      <h3>{client.name ? client.name : null} Client Info Mode - ID: {client.id}</h3>
      <div className="client-display">

        <OnOffClientOption
          optionName = 'power'
          optionStatus = {client.power}
          buttonName = 'power'
        />
        <OnOffClientOption
          optionName = 'nueral network status'
          optionStatus = {client.neuralNetStatus}
          buttonName = 'nn status'
        />
        <OnOffClientOption
          optionName = 'photo stream enabled'
          optionStatus = {client.photoStreamEnabled}
          buttonName = 'ps enabled'
        />
        <OnOffClientOption
          optionName = 'system online'
          optionStatus = {client.sysOnline}
          buttonName = 'system'
        />
        <ErrorNotification
          error = {client.errorStatus === 1 ? true : false }
        />

      </div>
    </div>
  )
}

export default SelectedClientDisplay;
