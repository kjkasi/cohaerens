import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApiService from '../../services/api-service';
import PlaceList from '../place-list';
import MainItem from '../main-item';

import './body.css';

export default class Body extends Component {

  api = new ApiService();

  render() {

    return (
      <Switch>
        <Route path="/react"
               render={ () => {return <MainItem />}}
               exact />
        <Route path="/react/place/:id" 
               render={({ match }) => {
                const { id } = match.params;
                return <PlaceList page={ id }/>
               }} />
      </Switch>
    );
  };
};