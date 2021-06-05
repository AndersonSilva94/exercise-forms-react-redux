import React, { Component } from 'react';

class DadosGerais extends Component {
  render(){
    const { nome, email, cpf, adress, city, state, moradia, cv, job, description } = this.props.currentStates;
    return (
      <div>
        <h2>Dados pessoais:</h2>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {adress}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {state.toUpperCase()}</p>
        <p>Tipo de residência: {moradia}</p>
        <h2>Dados profissionais:</h2>
        <p>Resumo do currículo: {cv}</p>
        <p>Último cargo: {job}</p>
        <p>Descrição do cargo: {description}</p>
      </div>
    )
  }
}

export default DadosGerais;
