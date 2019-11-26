import React, { Component } from 'react';

import './main-item.css';

class MainItem extends Component {

  componentDidMount() {
    console.log('componentDidMount');
  };

  renderPlace(items) {
    console.log('');
  };

  render () {
    return (
      <form className="form-horizontal">
       
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

        <label>Диапозон частот, Гц:</label>
        <div className="form-row">
          <div className="form-group col-xs-3">
            <label >от</label>
            <input type="text" className="form-control form-control-sm" placeholder="0" />
          </div>
          <div className="form-group col-xs-3">
            <label >до</label>
            <input type="text" className="form-control form-control-sm" placeholder="10 000 000" />
          </div>
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
        
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
    );
  };
};

export default MainItem