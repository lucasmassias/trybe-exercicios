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
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estado, email, write, age, name, vaiComparecer } = this.state;

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
      </div>
    );
  }
}

export default Form;