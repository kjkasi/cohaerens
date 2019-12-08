import React, { Component } from 'react';

import './main-item.css';

import ApiService from '../../services/api-service';
import { Line } from 'react-chartjs-2';

class MainItem extends Component {

  render () {

    return (
      <div className="jumbotron">
        <h1 className="display-4">Добро пожаловать</h1>
        <p className="lead">Научно-исследователсьвая работа по теме "Экспетная система для анализа сбоев радионавигационных сигналов"</p>
        <hr className="my-4" />
        <p>Разработал студент.</p>
      </div>
    );
  };
};

export default MainItem