import React, { Component } from 'react'
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

          <fieldset>
            <legend> Informações pessois</legend>

            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={name}
              />
            </label>

            <label htmlFor='fState'>
              Estado:
              <input
                id='estado'
                name="estado"
                type='text'
                value={estado}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor='email'>
              Email:
              <input
                id="email"
                name="email"
                tyoe="email"
                onChange={this.handleChange}
                value={email}
              />
            </label>

              <label htmlFor='age'>
              Idade:
              <select
                id="age"
                name="age"
                onChange={this.handleChange}
                value={age}
                >
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>

          </fieldset>

          <fieldset>
            <legend> Diga se irá comparecer e compartilhe o que achar necessário </legend>

            <label htmlFor='write'>
              Escreva o que quiser:
              <textarea
                id='write'
                name='write'
                onChange={this.handleChange}
                value={write}
              />
            </label>

            <label>

              <input
                id='vaiComparecer'
                name="vaiComparecer"
                type="checkbox"
                onChange={this.handleChange}
                value={vaiComparecer}
              />
              Vai comparecer?
            </label>

            <label>
              Envie o que quiser:
              <input type="file" />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;