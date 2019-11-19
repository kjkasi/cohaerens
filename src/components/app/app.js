import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Body from '../body';

import './app.css';

export default class App extends Component {
  render(){
    return (
        <Router>
          <div className="coha-app">
            <Header />
            <Body />
            <Footer />
          </div>
        </Router>
    );
  };
};