import React, { Component } from 'react';

import ApiService from '../../services/api-service';
import AddItem from '../add-item';
import RowItem from '../row-item';


import './body.css';

export default class Body extends Component {

  api = new ApiService();

  render() {

    return (
      <div>
        <h3 className="p-2 text-center">Список мест
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-1 font-weight-bold">#</div>
            <div className="col font-weight-bold">Имя</div>
            <div className="col font-weight-bold">Описание</div>
            <div className="col font-weight-bold">Дата создания</div>
            <div className="col font-weight-bold">Дата обновления</div>
            <div className="col"></div>
          </div>
          <AddItem />
          <RowItem
            getData={ this.api.getAllPlace } />
        </div>
      </div>
    );
  };
};