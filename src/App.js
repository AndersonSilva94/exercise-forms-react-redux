import React from 'react';
import './App.css';
import data from './data'
import DadosPessoais from './components/DadosPessoais'
import UltimoTrabalho from './components/UltimoTrabalho';
import DadosGerais from './components/DadosGerais';

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
    this.setState(INITIAL_STATE)
  };

  renderSubmit = (event) => {
    event.preventDefault();
    this.setState({submitted: true});
  }

  render() {
    const { nome, email, cpf, adress, city, state, cv, job, description, submitted } = this.state;

    return (
      <div className="container">
        <h1>Cadastro de Currículo</h1>
        <form>
          <DadosPessoais
            onChange={this.handleChanges}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            value={{ nome, email, cpf, adress, city, state, data }} />

          <UltimoTrabalho
            onChange={this.handleChanges}
            value={{ cv, job, description }} />
        </form>
        <button className="submit" onClick={this.renderSubmit}>Enviar</button>
        <button className="clear" onClick={this.resetForm}>Limpar</button>
        <div className="renderInfo">
          { submitted && <DadosGerais 
          currentStates={this.state}/> }
        </div>
      </div >
    )
  }
}

export default App;
