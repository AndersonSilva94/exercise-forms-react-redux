import React from 'react';
import './App.css';
import data from './data'
import PropTypes from 'prop-types';
import DadosPessoais from './components/DadosPessoais'
import UltimoTrabalho from './components/UltimoTrabalho';
import DadosGerais from './components/DadosGerais';
import { addInfo, clearInfo } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  moradia: '',
  cv: '',
  job: '',
  description: '',
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event) => {
    this.setState({
      moradia: event.target.value
    })
  }

  handleBlur = (event) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers.forEach((number) => {
      if (event.target.value.startsWith(number)) {
        event.target.value = '';
      }
    })
  }

  resetForm = () => {
    this.setState(INITIAL_STATE);
    this.props.clearInfo();
  };

  renderSubmit = (event) => {
    event.preventDefault();
    this.setState({submitted: true});
    this.props.addInfo(this.state);
  }

  render() {
    const { infos } = this.props;
    const { nome, email, cpf, adress, city, state, cv, job, description, submitted } = this.state;

    return (
      <div className="container">
        <h1 className="mt-4 text-center">Cadastro de Currículo</h1>
        <form className="my-3" autoComplete="new-password">
          <DadosPessoais
            onChange={this.handleChanges}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            value={{ nome, email, cpf, adress, city, state, data }} />

          <UltimoTrabalho
            onChange={this.handleChanges}
            value={{ cv, job, description }} />
        </form>
        <button className="btn btn-success col-md-2" onClick={this.renderSubmit}>Enviar</button>
        <button className="btn btn-danger ml-md-2 col-md-2" onClick={this.resetForm}>Limpar</button>
        <div className="renderInfo">
          { submitted && <DadosGerais 
          currentStates={infos}/> }
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  infos: state,
})

/* const mapDispatchToProps = (dispatch) => ({
  add: (form_data) => dispatch(addInfo(form_data)),
  clear: () => dispatch(clearInfo())
}); */

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ addInfo, clearInfo }, dispatch)

App.propTypes = {
  infos: PropTypes.shape({}).isRequired,
  addInfo: PropTypes.func.isRequired,
  clearInfo: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
