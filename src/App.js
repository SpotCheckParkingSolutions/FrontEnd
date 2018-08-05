import React, { Component } from 'react';
import './App.css';

//Componenets
import Client from './Components/Client';
import SelectedClientDisplay from './Components/SelectedClientDisplay';
import SelectedClientSpotsDisplay from './Components/SelectedClientSpotsDisplay';


class App extends Component {
    constructor(){
      super()
      this.state = {
        username: 'Bob',
        serverStatus: 1,
        selectedIndex: 0,
        clientMode: true
      }
    }
    componentDidMount() {
      fetch('/users')
        .then(
          res=> {
            if (!res.ok){
              this.setState({
                ...this.state,
                serverStatus: 0
              })
            } else {
              return res.json()
            }
          })
        .then(clients => {
          this.setState({
            ...this.state,
            clients
          })
        })
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
        {
        this.state.clients ?
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

      :
      <div className="Body">
            <h1>ERROR ENCOUNTERED</h1>
            <button onClick={()=> window.location.reload()}>RELOAD APP</button>
      </div>
    }
    <div className="footer">
            <div className="server-status">
              <span>Server is: {this.state.serverStatus === 1 ? 'ON' : 'OFF' }</span>
            </div>
            <div>
              <button>Server Reset</button>
            </div>
            <div>
              <button>Admin Tools Manual Reload</button>
            </div>
        </div>
    </div>

    )
  }
}

export default App;
