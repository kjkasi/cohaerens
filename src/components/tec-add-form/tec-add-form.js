import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TecGraph from '../tec-graph';
import ApiService from '../../services/api-service';

import './tec-add-form.css';

class TecAddForm extends Component {

  api = new ApiService();

  state = {
    tec: {
      created: '',
      satellite: '',
      site: '',
      position: '',
      rows: []
    },
    filePath: null,
    success: false
  };

  onSubmit = (e) => {
    e.preventDefault();
    const res = this.api.postData(this.state.tec);
    console.log(res);
  };

  parseFile = (file) => {
    const arr = file.split('#');
    const created = arr[1].replace('Created on', '').trim();
    const sources = arr[2].replace('Sources:', '').trim();
    const satellite = arr[3].replace(' Satellite:', '').trim();
    const interval = arr[4].replace('Interval:', '').trim();
    const site = arr[5].replace('Site:', '').trim();
    const position = arr[7].replace('Position (X, Y, Z):', '').trim();
    const format = arr[8].replace('datetime format:', '').trim();
    const columns = arr[9].replace('Columns:', '').trim();
    const data = arr[10];
    const rows = data.split('\n').map((row) => {
      const item = {
        tsn: row.substr(0, 11).trim(),
        hour: row.substr(12, 14).trim(),
        el: row.substr(27, 10).trim(),
        az: row.substr(38, 11).trim(),
        l1l2: row.substr(51, 21).trim(),
        p1p2: row.substr(73, 10).trim(),
        validity: row.substr(83, 7).trim()
      };
      return item;
    });

    //console.log(created, sources, satellite, interval, site, position, format, columns, rows);

    rows.splice(0, 1);

    const tec = {
      created: created,
      sources: sources,
      satellite: satellite,
      interval: interval,
      site: site,
      position: position,
      format: format,
      rows: rows
    };

    return tec;
  };

  onChangeFile = (e) => {

    this.setState({
      filePath: e.target.files[0].name
    });

    const reader = new FileReader();
  
    reader.onload = (evt) => {
      const tec = this.parseFile(evt.target.result);
      this.setState({
        tec: tec
      });
    };
    reader.readAsText(e.target.files[0]);
  };

  renderAlert(text, success) {
    if (success) {
      return (
        <div className="alert alert-success" role="alert">
          { text }
        </div>
      );
    }
  };

  render () {

    const { tec, filePath, success } = this.state;
    const { created, satellite, site, position } = tec;

    const alert = this.renderAlert('Файл ПЭС усешно загружен!', success);

    return (
      <div>
        <h3 className="p-2 text-center">Добавление ПЭС</h3>
        <div className="container">
          { alert }
          <form className="form-horizontal"
                onSubmit= { this.onSubmit }>
            <div className="form-group">
              <label>Файл ПЭС</label>
              <div className="input-group">
                <div className="custom-file">
                  <input type="file"
                        className="custom-file-input"
                        accept="*.dat"
                        onChange={ this.onChangeFile } />
                  <label className="custom-file-label">
                    { filePath ? filePath : 'Выбрать файл' }
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Created</label>
              <label className="form-control form-control-sm">{ created }</label>
            </div>
            <div className="form-group">
              <label>Satellite</label>
              <label className="form-control form-control-sm">{ satellite }</label>
            </div>
            <div className="form-group">
              <label>Site</label>
              <label className="form-control form-control-sm">{ site }</label>
            </div>
            <div className="form-group">
              <label>Position(X, Y, Z)</label>
              <label className="form-control form-control-sm">{ position }</label>
            </div>
            <div className="form-group">
              <label>График</label>
              <TecGraph data={ tec } />
            </div>
            <div className="form-group row">
              <button type="submit" className="btn btn-success btn-sm">Добавить
              </button>
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

export default TecAddForm;