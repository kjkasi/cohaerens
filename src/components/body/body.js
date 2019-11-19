import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApiService from '../../services/api-service';
import {
  Item,
  PlaceList
} from '../pages';

import './body.css';

export default class Body extends Component {

  api = new ApiService();

  render() {

    return (
      <Switch>
        <Route path="/"
               component={ Item }
               exact />
        <Route path="/place" component={ PlaceList } />
      </Switch>
    );
  };
};