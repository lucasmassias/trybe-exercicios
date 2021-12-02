import React, { Component } from 'react'
import PersonInfo from './PersonInfo';
import Reacreative from './Recreative';

class Form extends Component {
  constructor() {
    super();


    this.state = {
      estado: '',
      email: '',
      write: '',
      age: '',
      name: '',
      vaiComparecer: 0,
      formularioComErros: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleError() {
    const { name, email, age, write, vaiComparecer } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !write.length,
      !vaiComparecer,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estado, email, write, age, name, vaiComparecer, formularioComErros } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonInfo
          inputName={name}
          inputState={estado}
          inputEmail={email}
          inputAge={age}
          handleChange={this.handleChange}
          />
          <Reacreative
          inputWrite={write}
          inputVaicomparecer={vaiComparecer}
          handleChange={this.handleChange}
          />
        </form>
        { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;