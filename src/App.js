import React, { Component } from 'react';
import './App.css';

//Componenets
import Client from './Components/Client';
import SelectedClientDisplay from './Components/SelectedClientDisplay';
import SelectedClientSpotsDisplay from './Components/SelectedClientSpotsDisplay';


class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Bob',
      serverStatus: 1,
      clients: [
        {
          id: 1, //Client Id
          name: false, //default none, admin can change this
          staticIp: '10.0.0.94',
          globalIp: '76.115.126.228',
          power: 1, //Is unit powered on?
          neuralNetStatus: 1, //Nueral Net on/off
          photoStreamEnabled: 1, //PhotoStream on/off
          photoCaptureRate: 2,
          sysOnline: 1,
          errorStatus: 0,
          dataPackage: {
            //This is a really simplified package,
            //The point of this demo isn't to display nueral net results,
            //Eventually we'll have an object with all spots and their status here
            openSpots: 5,
            numberCarsDetected: 12,
            numberCarsParked: 10
          }
        },
        {
          id: 2, //Client Id
          name: false, //default none, admin can change this
          staticIp: '10.0.0.95',
          globalIp: '76.115.126.229',
          power: 0, //Is unit powered on?
          neuralNetStatus: 0, //Nueral Net on/off
          photoStreamEnabled: 0, //PhotoStream on/off
          photoCaptureRate: 5,
          sysOnline: 0,
          errorStatus: 0,
          dataPackage: {
            //This is a really simplified package,
            //The point of this demo isn't to display nueral net results,
            //Eventually we'll have an object with all spots and their status here
            openSpots: 10,
            numberCarsDetected: 12,
            numberCarsParked: 10
          }
        },
        {
          id: 3, //Client Id
          name: "Error prone POS",
          staticIp: '10.0.0.95',
          globalIp: '76.115.126.229',
          power: 0,
          neuralNetStatus: 1,
          photoStreamEnabled: 1,
          photoCaptureRate: 5,
          sysOnline: 1,
          errorStatus: 1,
          dataPackage: {
            openSpots: 10,
            numberCarsDetected: 12,
            numberCarsParked: 10
          }
        }
      ],
      selectedIndex: 0,
      clientMode: true
    }
  }

  toggleSelectedClient = (index)=>{
    //Changes Selected Client in State
    this.setState({
      ...this.state,
      selectedIndex: index
    })
  }

  toggleDisplayMode = ()=>{
    //Flips clientMode in state
    this.setState({
      ...this.state,
      clientMode: !this.state.clientMode
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>SpotCheck Parking Solutions</h1>
          <h2>Administration Tools</h2>
        </div>
        <div className="body">
          <div className="client-list-container">
            <h3>Client List</h3>
            <div className="client-list">
              {
                this.state.clients.map((client, index)=>{
                  return (
                  <Client
                    key = { index }
                    id = { client.id }
                    power = { client.power }
                    onClick = { ()=>{ this.toggleSelectedClient(index) } }
                    selected =  { this.state.selectedIndex === index}
                  />)
                })
              }
            </div>
          </div>
          <div className="client-displays">
            <button
              className='toggle'
              onClick={()=>this.toggleDisplayMode()}
            >Toggle
            </button>
            {this.state.clientMode
            //Ternary Determines Right Hand Side Display mode
            ?
              <SelectedClientDisplay
              client = {this.state.clients[this.state.selectedIndex]}
            />
            :
            <SelectedClientSpotsDisplay
              client = {this.state.clients[this.state.selectedIndex]}
            />
            }


          </div>
        </div>
        <div className="footer">
            <div className="server-status">
            {<span>Server is: {this.state.serverStatus === 1 ? 'ON' : 'OFF' }</span>}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
