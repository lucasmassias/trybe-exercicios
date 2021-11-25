import React from 'react';
import './App.css';

function eventOfButton() {
  console.log('Clicou no botão mesmo!');
}

function eventOfOtherButton() {
  console.log('Clicou neste outro botão');
}

function eventOfTheFuckingButton() {
  console.log('Caramba quanto botão ein sinho');
}

class App extends React.Component {
  render() {
    return (
      <ol>
        <li>
        <button onClick={ eventOfButton }>Botão</button>
        </li>
        <li>
          <button onClick={ eventOfOtherButton}> Outro Botão</button>
        </li>
        <li>
          <button onClick={ eventOfTheFuckingButton}> Caramba q é Botão ein!</button>
        </li>
      </ol>
      );
  }
}

export default App;
