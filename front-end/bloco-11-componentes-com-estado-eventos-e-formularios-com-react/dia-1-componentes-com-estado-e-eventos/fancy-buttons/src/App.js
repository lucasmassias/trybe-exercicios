import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.eventOfButton = this.eventOfButton.bind(this);
    this.eventOfOtherButton = this.eventOfOtherButton.bind(this);
    this.eventOfTheFuckingButton = this.eventOfTheFuckingButton.bind(this);

    this.state = {
      numberOfClicks1: 0,
      numberOfClicks2: 0,
      numberOfClicks3: 0,
    }
  }

  eventOfButton() {
    this.setState((lastResult, _props) => ({
      numberOfClicks1: lastResult.numberOfClicks1 + 1
    }))
  }
  
  eventOfOtherButton() {
    this.setState((lastResult, _props) => ({
      numberOfClicks2: lastResult.numberOfClicks2 + 1
    }))
  }
  
  eventOfTheFuckingButton() {
    this.setState((lastResult, _props) => ({
      numberOfClicks3: lastResult.numberOfClicks3 + 1
    }))
  }
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <ol>
        <li>
        <button onClick={ this.eventOfButton } style={{backgroundColor: this.getButtonColor(this.state.numberOfClicks1)}} >{ this.state.numberOfClicks1 }</button>
        </li>
        <li>
          <button onClick={ this.eventOfOtherButton } style={{backgroundColor: this.getButtonColor(this.state.numberOfClicks2) }} >{ this.state.numberOfClicks2 }</button>
        </li>
        <li>
          <button onClick={ this.eventOfTheFuckingButton } style={{backgroundColor: this.getButtonColor(this.state.numberOfClicks3)}} >{ this.state.numberOfClicks3 }</button>
        </li>
      </ol>
      );
  }
}

export default App;
