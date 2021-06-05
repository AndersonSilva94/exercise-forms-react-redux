import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DadosPessoais extends Component {
  render() {

    const { value: { nome, email, cpf, adress, city, state, data }, onChange, onClick, onBlur } = this.props;

    return (
      <>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label>Nome</label>
            <input type="text" name="nome" maxLength="40" required onChange={onChange} value={nome.toUpperCase()} className="form-control" autoComplete="new-password" />
          </div>

          <div className="form-group col-md-4">
            <label>E-mail</label>
            <input type="email" name="email" maxLength="50" required onChange={onChange} value={email} className="form-control" autoComplete="new-password" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-3">
            <label>CPF</label>
            <input type="text" name="cpf" maxLength="11" required onChange={onChange} value={cpf} className="form-control" />
          </div>
          <div className="form-group col-md-9">
            <label>Endereço</label>
            <input type="text" name="adress" maxLength="200" required onChange={onChange} value={adress.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} className="form-control" autoComplete="new-password" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Cidade</label>
            <input type="text" name="city" maxLength="28" required onChange={onChange} value={city} onBlur={onBlur} className="form-control" autoComplete="new-password" />
          </div>

          <div className="form-group col-md-4">
            <label>Estado</label>
            <select name="state" className="custom-select" value={state} onChange={onChange}>
              <option key="" value="">Selecione seu estado</option>
              {data.map(element => {
                return <option key={element.sigla} value={element.sigla}> {element.estado} </option>
              })};
            </select>
          </div>

          <div className="form-group col-md-4 my-auto">
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="casa" name="moradia" value="casa" onClick={onClick} className="custom-control-input" /> 
              <label htmlFor="casa" className="custom-control-label">Casa</label>
            </div>
            
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="apartamento" name="moradia" value="apartamento" onClick={onClick} className="custom-control-input" />
              <label htmlFor="apartamento" className="custom-control-label">Apartamento</label> 
            </div>
          </div>
        </div>

      </>
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
