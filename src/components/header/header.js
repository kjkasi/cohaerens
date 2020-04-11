import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';

export default class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-light navbar-expand-sm bg-light">
         <a className="navbar-brand"
            href="#"> Cohaerens SPA
          </a>
          <button className="navbar-toggler"
                  type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/react" exact
                          className="nav-link">Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/react/tec/1/list"
                        className="nav-link">ПЭС
                </NavLink>
              </li>
              {/*
              <li className="nav-item">
                <NavLink to="#"
                        className="nav-link">Вариации
                </NavLink>
              </li>
              */}
              <li className="nav-item">
                <NavLink to="/react/research/1/list"
                      className="nav-link">Исследования
                </NavLink>
              </li>
            </ul>
          </div>
          {/*
          <form className="form-inline"
                action="#"
                method="get">
            <button className="btn btn-outline-primary"
                    type="submit">Войти
            </button>
          </form>
          */}
      </nav>
    );
  };
};