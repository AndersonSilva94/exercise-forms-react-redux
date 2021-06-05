import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UltimoTrabalho extends Component {
  render() {
    const { value: { cv, job, description }, onChange } = this.props;

    return (
      <>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Cargo</label>
            <textarea className="form-control" maxLength="40" required name="job" value={job} onChange={onChange} rows="3"/>
          </div>
          <div className="form-group col-md-8">
            <label> Resumo do currículo</label>
            <textarea className="form-control" maxLength="1000" required name="cv" value={cv} onChange={onChange} rows="3"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Descrição do cargo</label>
            <textarea className="form-control" type="text" maxLength="500" value={description} required name="description" onChange={onChange} rows="3" />
          </div>
        </div>
      </>
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
