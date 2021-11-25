import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.eventOfButton = this.eventOfButton.bind(this);
    this.eventOfOtherButton = this.eventOfOtherButton.bind(this);
    this.eventOfTheFuckingButton = this.eventOfTheFuckingButton.bind(this);
  }

  eventOfButton() {
    console.log('Clicou no botão mesmo!', this);
  }
  
  eventOfOtherButton() {
    console.log('Clicou neste outro botão');
  }
  
  eventOfTheFuckingButton() {
    console.log('Caramba quanto botão ein sinho');
  }

  render() {
    return (
      <ol>
        <li>
        <button onClick={ this.eventOfButton }>Botão</button>
        </li>
        <li>
          <button onClick={ this.eventOfOtherButton }> Outro Botão</button>
        </li>
        <li>
          <button onClick={ this.eventOfTheFuckingButton }> Caramba q é Botão ein!</button>
        </li>
      </ol>
      );
  }
}

export default App;
