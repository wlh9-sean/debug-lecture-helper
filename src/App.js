import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      firstNum: null,
      secondNum: null
    }
    console.log('hey')
  }

  calculate() {
    let { firstNum, secondNum } = this.state;
    let sum = firstNum + secondNum;
    this.setState({
      result: sum,
      firstNum: '',
      secondNum: ''
    })
    console.log('hey')
  }

  render() {
    return (
      <div className="App">
        <h1>Let's do some math!</h1>
        <br />
        <input
          value={this.state.firstNum}
          type="number"
          onChange={(e) => this.setState({ firstNum: e.target.value })} />
        <span>+</span>
        <input
          value={this.state.secondNum}
          type="number"
          onChange={(e) => this.setState({ secondNum: e.target.value })} />
        <br /><br />
        <button onClick={() => this.calculate()}>Calculate</button>
        {
          this.state.result ? (
            <p>Result is {this.state.result}</p>
          ) : null
        }
      </div>
    );
  }
}

export default App;
