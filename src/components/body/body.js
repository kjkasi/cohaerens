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
        <Route path="/react"
               component={ Item }
               exact />
        {/*<Route path="/place" exact component={ PlaceList } />*/}
        <Route path="/react/place/:id" 
               component={ PlaceList } />
      </Switch>
    );
  };
};