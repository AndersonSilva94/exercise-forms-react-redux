import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UltimoTrabalho extends Component {
  render() {
    const { value: { cv, job, description }, onChange } = this.props;

    return (
      <fieldset>
        <label> Resumo do currículo
          <textarea maxLength="1000" required name="cv" value={cv} onChange={onChange}/>
        </label>

        <label> Cargo
          <textarea maxLength="40" required name="job" value={job} onChange={onChange} />
        </label>

        <label> Descrição do cargo
          <input type="text" maxLength="500" value={description} required name="description" onChange={onChange} />
        </label>

      </fieldset>
    )
  }
}

UltimoTrabalho.propTypes = {
  value: PropTypes.shape({
    cv: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default UltimoTrabalho;
