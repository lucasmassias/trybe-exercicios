import React, { Component } from "react";

export default class Reacreative extends Component {
  render() {
    const {handleChange, inputWrite, inputVaiComparecer} =this.props;
    return (

      <fieldset>
        <legend> Diga se irá comparecer e compartilhe o que achar necessário </legend>

        <label htmlFor='write'>
          Escreva o que quiser:
          <textarea
            id='write'
            name='write'
            onChange={handleChange}
            value={inputWrite}
          />
        </label>

        <label>

          <input
            id='vaiComparecer'
            name="vaiComparecer"
            type="checkbox"
            onChange={handleChange}
            value={inputVaiComparecer}
          />
          Vai comparecer?
        </label>

        <label>
          Envie o que quiser:
          <input type="file" />
        </label>
      </fieldset>



    );
  }
}
