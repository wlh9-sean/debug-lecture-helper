import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('mounted')
    window.removeEventListener('error', () => {
      console.log('removed')
    }, true)
    window.removeEventListener('unhandlerejection', () => {
      console.log('removed')
    }, true)
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.incremen()}>Click Me!</button>
        <p>
          Button Clicks: {this.state.count}
        </p>
      </div>
    );
  }
}

export default App;
