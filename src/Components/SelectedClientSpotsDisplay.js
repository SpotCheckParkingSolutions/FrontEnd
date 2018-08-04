import React from 'react';

const SelectedClientSpotsDisplay = (props) => {
  let client = props.client;
  let data = client.dataPackage;

  return (
    <div className="spot-display-container">
      <h3>Display Mode</h3>
      <p className='temp'>This could eventually be a labeled map of the area or something</p>
      <div className="spot-display-attributes">
      <span>Open Spots: {data.openSpots}</span>
      <span>Cars Detected By Network: {data.numberCarsDetected}</span>
      <span>Cars Parked in Spots: {data.numberCarsParked}</span>
      </div>
    </div>
  )
}

export default SelectedClientSpotsDisplay;
