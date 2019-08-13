import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      firstNum: '',
      secondNum: ''
    }
  }

  calculate() {
    let { firstNum, secondNum } = this.state;
    let sum = +firstNum + +secondNum;
    this.setState({
      result: sum,
      firstNum: '',
      secondNum: '',
      cost: '',
      quantity: '',
      taxRate: ''
    })
  }

  calcTotal() {
    let { cost, quantity, taxRate } = this.state;
    let subTotal = cost * quantity;
    let tax = subTotal * taxRate / 100;
    this.setState({
      total: tax + subTotal
    })
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

        <hr />
        <p>Cost of item <input type="text" onChange={e => this.setState({ cost: e.target.value })} /></p>
        <p>Quantity <input type="text" onChange={e => this.setState({ quantity: e.target.value })} /></p>
        <p>Sales tax % <input type="text" onChange={e => this.setState({ taxRate: e.target.value })} /></p>
        <br />
        <button onClick={() => this.calcTotal()}>Calculate</button>
        <p>Total cost: {this.state.total}</p>

      </div>
    );
  }
}

export default App;
