import React, { Component } from "react";

export default class PersonInfo extends Component {
  render() {
    const { inputName, inputState, inputEmail, inputAge, handleChange } = this.props;
    return (
      <fieldset>
        <legend> Informações pessois</legend>

        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={inputName}
          />
        </label>

        <label htmlFor='fState'>
          Estado:
          <input
            id='estado'
            name="estado"
            type='text'
            value={inputState}
            onChange={handleChange}
          />
        </label>

        <label htmlFor='email'>
          Email:
          <input
            id="email"
            name="email"
            tyoe="email"
            onChange={handleChange}
            value={inputEmail}
          />
        </label>

        <label htmlFor='age'>
          Idade:
          <select
            id="age"
            name="age"
            onChange={handleChange}
            value={inputAge}
          >
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>

      </fieldset>


    );
  }
}

