import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './row-item';

import Spinner from '../spinner';

export default class RowItem extends Component {

  state = {
    items: null,
    count: null,
    perPage: 10,
    page: null
  };

  componentDidMount() {
    this.updateData();
  };

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.updateData();
    };
  };

  updateData() {
    const { getData, page } = this.props;
    const { perPage } = this.state;

    getData(page, perPage)
      .then((res) => {
        this.setState({
          items: res.result,
          count: res.count,
          page: Number.parseInt(this.props.page)
        });
      });
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

    const { items, count, perPage, page } = this.state;

    const pageCount = Math.ceil(count / perPage);
    let prevPage = 1
    if (page - 1 > 1) {
      prevPage = page - 1
    } else {
      prevPage = 1
    }

    let nextPage = 1
    if (page + 1 <= pageCount) {
      nextPage = page + 1
    } else {
      nextPage = page
    }

    if (!items) {
      return <Spinner />;
    }

    const itemList = this.renderItems(items);

    return (
      <div>
        { itemList }
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to={ "/react/place/" + prevPage }>Назад
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to={ "/react/place/" + nextPage }>Вперед
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
};