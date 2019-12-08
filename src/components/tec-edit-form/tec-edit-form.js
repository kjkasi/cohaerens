import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TecGraph from '../tec-graph';
import Spinner from '../spinner';
import ApiService from '../../services/api-service';

import './tec-edit-form.css';

class TecEditForm extends Component {

  api = new ApiService();

  state = {
    tec: null,
    success: false
  };

  onInputChanged = (e) => {
    console.log(onInputChanged);
  };

  componentDidMount() {
    this.updateData();
  };

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.updateData();
    };
  };

  updateData() {
    const { tecId } = this.props;

    this.api.getTec(tecId)
      .then((res) => {
        this.setState({
          tec: res
        });
      });
  };

  onSubmit() {
    console.log('onSubmit');
  };

  renderAlert(text, success) {
    if (success) {
      return (
        <div className="alert alert-success" role="alert">
          { text }
        </div>
      );
    }
  }

  render () {

    const { tec, success } = this.state;

    const alert = this.renderAlert('Файл ПЭС усешно загружен!', success);
    

    if (!tec) {
      return <Spinner />;
    }

    return (
      <div>
        <h3 className="p-2 text-center">Обновление ПЭС</h3>
        <div className="container">
          { alert }
          <form className="form-horizontal"
                onSubmit= { this.onSubmit }>

            <div className="form-group">
              <label>#</label>
              <input className="form-control form-control-sm"
                    value={ tec._id } 
                    readOnly />
            </div>
            <div className="form-group">
              <label>Created</label>
              <input className="form-control form-control-sm"
                    value={ tec.created }
                    readOnly />
            </div>
            <div className="form-group">
              <label>Satellite</label>
              <input className="form-control form-control-sm"
                    value={ tec.satellite }
                    readOnly />
            </div>
            <div className="form-group">
              <label>Site</label>
              <input className="form-control form-control-sm"
                    value={ tec.site }
                    readOnly />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input className="form-control form-control-sm"
                    value={ tec.position }
                    readOnly />
            </div>
            <div className="form-group">
                <label>График</label>
                <TecGraph data={ tec } />
              </div>
            <div className="form-group row">
              <Link className="btn btn-success btn-sm" 
                    to={ `/react/tec/${1}/list` }>Сохранить
              </Link>
              <Link className="btn btn-secondary btn-sm" 
                    to={ `/react/tec/${1}/list` }>Отмена
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default TecEditForm;