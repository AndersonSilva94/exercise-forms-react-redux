import React, { Component } from 'react';
import PropTypes from 'prop-types'

class DadosGerais extends Component {
  render(){
    const { nome, email, cpf, adress, city, state, moradia, cv, job, description } = this.props.currentStates;
    return (
      <div className="row my-4">
        <div className="col-md">
          <h2>Dados pessoais:</h2>
          <p><strong>Nome: </strong>{nome}</p>
          <p><strong>Email: </strong>{email}</p>
          <p><strong>CPF: </strong>{cpf}</p>
          <p><strong>Endereço: </strong>{adress}</p>
          <p><strong>Cidade: </strong>{city}</p>
          <p><strong>Estado: </strong>{state.toUpperCase()}</p>
          <p><strong>Tipo de residência: </strong>{moradia}</p>
        </div>
        <div className="col-md">
          <h2>Dados profissionais:</h2>
          <p><strong>Resumo do currículo: </strong>{cv}</p>
          <p><strong>Último cargo: </strong>{job}</p>
          <p><strong>Descrição do cargo: </strong>{description}</p>
        </div>
      </div>
    )
  }
}

DadosGerais.propTypes = {
  currentStates: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    moradia: PropTypes.string.isRequired,
    cv: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired
}

export default DadosGerais;
