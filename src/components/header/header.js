import React, { Component } from 'react';

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
              <li className="nav-item active">
                <a className="nav-link"
                   href="#">Места
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                   href="#">Системы связи
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                   href="#">Частотные диапазоны
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                   href="#">Пользователи
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                   href="#">Приемники
                </a>
              </li>
            </ul>
          </div>
          <form className="form-inline"
                action="#"
                method="get">
            <button className="btn btn-outline-primary"
                    type="submit">Войти
            </button>
          </form>
          
      </nav>
    );
  };
};