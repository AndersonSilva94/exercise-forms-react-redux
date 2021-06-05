import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DadosPessoais extends Component {
  render() {

    const { value: { nome, email, cpf, adress, city, state, data }, onChange, onClick, onBlur } = this.props;

    return (
      <fieldset>
        <label> Nome
          <input type="text" name="nome" maxLength="40" required onChange={onChange} value={nome.toUpperCase()} />
        </label>

        <label> E-mail
          <input type="email" name="email" maxLength="50" required onChange={onChange} value={email} />
        </label>

        <label> CPF
          <input type="text" name="cpf" maxLength="11" required onChange={onChange} value={cpf} />
        </label>

        <label> Endereço
          <input type="text" name="adress" maxLength="200" required onChange={onChange} value={adress.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} />
        </label>

        <label> Cidade
          <input type="text" name="city" maxLength="28" required onChange={onChange} value={city} onBlur={onBlur} />
        </label>

        <label> Estado
          <select name="state" value={state} onChange={onChange}>
            {data.map(element => {
              return <option key={element.sigla} value={element.sigla}> {element.estado} </option>
            })};
          </select>
        </label>

        <label>
          <input type="radio" name="moradia" value="casa" onClick={onClick} /> Casa
            <input type="radio" name="moradia" value="apartamento" onClick={onClick} /> Apartamento
        </label>

      </fieldset>
    )
  }
}

DadosPessoais.propTypes = {
  value: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}

export default DadosPessoais;