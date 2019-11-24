import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './row-item';

import Spinner from '../spinner';

export default class RowItem extends Component {

  state = {
    items: null,
    count: 0,
    perPage: 10
  };

  componentDidMount() {
    const { getData, page } = this.props;
    const { perPage } = this.state;

    console.log('componentDidMount RowItem: ' + page);

    getData(page, perPage)
      .then((res) => {
        this.setState({
          items: res.result,
          count: res.count
        });
      });
  };

  componentDidUpdate() {
    console.log('componentDidUpdate')
  };

  renderItems(items) {
    return items.map(({ _id, Name, desciption, createdAt, updatedAt }) => {
      return (
        <div className="row p-2"
             key={ _id }>
          <div className="col-1">{/* id */}
          </div>
          <div className="col">{ Name }
          </div>
          <div className="col">{ desciption }
          </div>
          <div className="col">{ createdAt }
          </div>
          <div className="col">{ updatedAt }
          </div>
          <div className="col">
            <a className="btn btn-outline-warning btn-sm"
               href="#">Редактировать
            </a>
            {/*
            <a className="btn btn-outline-danger btn-sm"
               href="#">Удалить
            </a>
            */}
          </div>
        </div>
      );
    });
  };

  render() {

    const { items, count, perPage } = this.state;

    if (!items) {
      return <Spinner />;
    }

    const  itemList = this.renderItems(items);

    return (
      <div>
        { itemList }
        <nav>
          <ul className="pagination">
            {/*
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
            */}
            <li className="page-item">
              <Link className="page-link" to="/react/place/1">Первая
              </Link>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3
              </a>
            </li>
            <li className="page-item">
              <Link className="page-link" to={ '/react/place/' + Math.ceil(count / perPage) }>Последняя
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
};