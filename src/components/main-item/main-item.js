import React, { Component } from 'react';

import './main-item.css';

import ApiService from '../../services/api-service';

class MainItem extends Component {

  api = new ApiService();

  state = {
    file: '',
    filePath: null
  };

  componentDidMount() {
    //console.log('componentDidMount');
  };

  renderPlace(items) {
    console.log('');
  };

  handleChange(e) {
    this.setState({
      file: e.target.value
    });
  };

  parseFile(file) {
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
    const dat = {
      created: created,
      sources: sources,
      satellite: satellite,
      interval: interval,
      site: site,
      position: position,
      format: format,
      rows: rows.slice(1, 10)
    };
    console.log(dat);
    this.api.postData(dat);
  };

  handleFileChosen = (e) => {

    this.setState({
      filePath: e.target.files[0].name
    });

    const reader = new FileReader();
    /*
    reader.onload = function(evt) {
      //console.log(evt.target.result);
      this.setState({
        file: evt.target.result
      });
    }.bind(this);
    */
    reader.onload = (evt) => {
      const result = evt.target.result;
      this.parseFile(result);
      this.setState({
        file: result
      });
    };
    reader.readAsText(e.target.files[0]);
};

  render () {

    const { file, filePath } = this.state;

    return (
      <form className="form-horizontal">
       
       <div className="form-group">
          <label>Файл ПЭС</label>
          <div className="input-group">
            <div className="custom-file">
              <input type="file"
                     className="custom-file-input"
                     accept="*.dat"
                     onChange={ this.handleFileChosen } />
              <label className="custom-file-label">
                { filePath ? filePath : 'Выбрать файл' }
              </label>
            </div>
          </div>
        </div>

        <textarea className="form-control"
                  value={ file }
                  onChange={ this.handleChange }>
        </textarea>

        {/*
        <div className="form-group">
          <label className="control-label">Название населенного пункта:</label>
          <select className="form-control form-control-sm">
            <option>Йошкар-Ола</option>
            <option>Казань</option>
            <option>Москва</option>
            <option>Воронеж</option>
            <option>Минск</option>
          </select>
        </div>
      
        <div className="form-group">
          <label>Вид спутниковой системы:</label>
          <select className="form-control form-control-sm">
            <option>GPS</option>
            <option>GLONASS</option>
            <option>Transit</option>
            <option>Tsikada</option>
            <option>BeiDou</option>
            <option>Galileo</option>
            <option>DORIS</option>
            <option>IRNSS</option>
            <option>QZSS</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Модель приемника:</label>
          <select className="form-control form-control-sm">
            <option>Javad</option>
            <option>Leyca</option>
            <option>Spectra</option>
            <option>Trible</option>
            <option>South</option>
          </select>
        </div>

        
        <div className="form-group">
          <label>Диапозон частот:</label>
          <select className="form-control form-control-sm">
            <option>L (1.452, 1.55)</option>
            <option>S (1.93, 2.7)</option>
            <option>C (3.4, 5.25)</option>
            <option>X (7.255, 8.4)</option>
            <option>Ku (10.7, 12.75)</option>
            <option>Ka (15.4, 26.5)</option>
          </select>
        </div>
                  
        <div className="form-group">
          <label >Дата:</label>
          <input type="date" className="form-control form-control-sm" />
        </div>
    
        <div className="form-group">
          <label>Выбор Кр:</label>
          <select className="form-control form-control-sm">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>

        <label>Число солнечных пятен, W = k(f+10g):</label>
        <div className="form-row">
          <div className="form-group col-xs-3">
            <input type="text" className="form-control form-control-sm" placeholder="0" />
            <small className="form-text text-muted">кол-во наблюдаемых пятен, f</small>
          </div>
          <div className="form-group col-xs-3">
            <input type="text" className="form-control form-control-sm" placeholder="0" />
            <small className="form-text text-muted">кол-во наблюдаемых групп, g</small>
          </div>
          <div className="form-group col-xs-3">
            <input type="text" className="form-control form-control-sm" placeholder="0" />
            <small className="form-text text-muted">нормировочный коэффициент, k</small>
          </div>
        </div>
        
        <div className="form-group">
          <label>Наличие сбоев аппаратуры</label>
          <select className="form-control form-control-sm">
            <option>-</option>
            <option>сбой0</option>
            <option>сбой1</option>
            <option>сбой2</option>
            <option>сбой3</option>
            <option>сбой4</option>
            <option>сбой5</option>
            <option>сбой6</option>
            <option>сбой7</option>
            <option>сбой8</option>
            <option>сбой9</option>
          </select>
        </div>

        <div className="form-group">
          <label>Температура, &#8451</label>
          <input type="text" className="form-control form-control-sm" placeholder="0" />
          <small className="form-text text-muted">Текст под строкой.</small>
        </div>

        <div className="form-group">
          <label>Давление, мм рт.ст.</label>
          <input type="email" className="form-control form-control-sm" placeholder="0" />
        </div>

        <div className="form-group">
          <label>Относительная влажность, %.</label>
          <input type="email" className="form-control form-control-sm" placeholder="70" />
        </div>

        <div className="form-group">
          <label>Осадки, мм.</label>
          <input type="email" className="form-control form-control-sm" placeholder="0" />
        </div>

        <div className="form-group">
          <label>Файл ПЭС</label>
          <div className="input-group">
            <div className="custom-file">
              <input type="file" className="custom-file-input" />
              <label className="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text">Upload</span>
            </div>
          </div>
        </div>
        */}
        <div className="input-group">
          <button type="submit" className="btn btn-primary">Отправить</button>
        </div>
      </form>
    );
  };
};

export default MainItem