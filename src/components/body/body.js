import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApiService from '../../services/api-service';
import PlaceList from '../place-list';
import MainItem from '../main-item';
import TecList from '../tec-list';
import TecAddForm from '../tec-add-form';
import TecEditForm from '../tec-edit-form';
import ResearchList from '../research-list';

import './body.css';

export default class Body extends Component {

  api = new ApiService();

  render() {

    return (
      <Switch>
        <Route path="/react"
               render={ () => { return <MainItem /> }}
               exact />
        {/* TEC */}
        <Route path="/react/tec/:id/list"
               render={({ match }) => {
                 const { id } = match.params;
                 return <TecList page={ id }/>
               }} />
        <Route path="/react/tec/add"
               render={ () => { return <TecAddForm /> }} />
        <Route path="/react/tec/:id/edit"
               render={ ({ match }) => {
                 const { id } = match.params;
                 return <TecEditForm tecId= { id } />
               }} />
        {/* Research */}
        <Route path="/react/research/:id/list"
               render={({ match }) => {
                 const { id } = match.params;
                 return <ResearchList page={ id }/>
               }} />
        {/*
        <Route path="/react/placelist/:id"
               render={({ match }) => {
                 const { id } = match.params;
                 return <PlaceList page={ id }/>
               }} />
        */}
      </Switch>
    );
  };
};