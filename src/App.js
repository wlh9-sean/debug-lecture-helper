import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount method invoked...')
    const incrementTimer = () => this.setState({ timer: this.state.timer + 1 })
    setInterval(incrementTimer, 1000)
  }


  render() {
    return (
      <div className="App">
        <p>How many seconds have you been on my app?</p>
        <p>{this.state.timer} seconds</p>
      </div>
    );
  }
}

export default App;
