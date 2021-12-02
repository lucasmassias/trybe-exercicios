import React, { Component } from "react";
import PropTypes from 'prop-types';

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
          { !inputName.length ? ' -sem resultados- ' : ' -ok- '}
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
          { !inputState.length ? ' -sem resultados- ' : ' -ok- '}
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
          { !inputEmail.match(/^\S+@\S+$/i)
          ? ' -sem resultados- ' : ' -ok- '}
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
          { !inputAge.length ? ' -não escolhido ainda- ' : ' -ok- '}
        </label>

      </fieldset>


    );
  }
}

PersonInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  inputEmail: PropTypes.string.isRequired,
  inputAge: PropTypes.string.isRequired,
};

