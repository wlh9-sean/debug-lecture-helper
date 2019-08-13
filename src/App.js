import React, { Component } from 'react';
import Card from './Card'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      baseUrl: 'https://joes-autos.herokuapp.com/api/vehicles'
    }
  }

  getAllVehicles() {
    axios.get(this.state.baseUrl)
      .then(res => this.setState({ vehicles: res.data }))
  }

  getOne() {
    axios.get(this.state.baseUrl + '/1/')
      .then(res => this.setState({ vehicles: res.data }))
  }
  getGreenVehicles() {
    axios.get(this.state.baseUrl + '?color=green')
      .then(res => this.setState({ vehicles: res.data }))
  }
  getFords() {
    axios.get(this.state.baseUrl + '?make=ford')
      .then(res => this.setState({ vehicles: res.data }))
  }

  render() {
    return (
      <div className="App">
        <h1>No console.log's allowed!</h1>
        <p>
          <Button variant='contained' onClick={() => this.getAllVehicles()}>All Vehicles</Button>
        </p>
        <p>
          <Button variant='contained' onClick={() => this.getOne()}>Vehicle with ID: 1</Button>
        </p>
        <p>
          <Button variant='contained' onClick={() => this.getGreenVehicles()}>Green Vehicles</Button>
        </p>
        <p>
          <Button variant='contained' onClick={() => this.getFords()}>Ford Vehicles</Button>
        </p>
        <hr />
        <h4>Vehicles:</h4>
        <div className='card-container'>
          {
            this.state.vehicles.map(vehicle => <Card key={vehicle.id} vehicle={vehicle} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
