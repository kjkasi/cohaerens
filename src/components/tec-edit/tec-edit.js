import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './tec-edit.css';

import Spinner from '../spinner';
import ApiService from '../../services/api-service';

class TecEdit extends Component {

  state = {
    id: '',
    created: '',
    satellite: '',
    site: '',
    position: '',
  };

  onCreatedChanged = (e) => {
    this.setState({
      created: e.target.value
    });
  };

  onSatteliteChanged = (e) => {
    this.setState({
      satellite: e.target.value
    });
  };

  onSiteChanged = (e) => {
    this.setState({
      site: e.target.value
    });
  };

  onPositionChanged = (e) => {
    this.setState({
      position: e.target.value
    });
  };

  render () {

    const { id, created, satellite, site, position } = this.state

    return (
      <div>
        <h3 className="p-2 text-center">Обновление ПЭС</h3>
        <div className="container">
          <div className="form-group">
            <label>#</label>
            <input className="form-control form-control-sm"
                   value={ id } 
                   readOnly />
          </div>
          <div className="form-group">
            <label>Created</label>
            <input className="form-control form-control-sm"
                   value={ created }
                   onChange={ this.onCreatedChanged } />
          </div>
          <div className="form-group">
            <label>Satellite</label>
            <input className="form-control form-control-sm"
                   value={ satellite }
                   onChange={ this.onSatteliteChanged } />
          </div>
          <div className="form-group">
            <label>Site</label>
            <input className="form-control form-control-sm" value={ site } />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input className="form-control form-control-sm" value={ position } />
          </div>
          <div className="form-group row">
            <button type="submit" className="btn btn-success btn-sm">Сохранить
            </button>
            <a className="btn btn-secondary btn-sm" href="/place"> Отмена
            </a>
          </div>
        </div>
      </div>
    );
  };
};

export default TecEdit;