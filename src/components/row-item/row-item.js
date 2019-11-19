import React, { Component } from 'react';

import './row-item';

import Spinner from '../spinner';

export default class RowItem extends Component {

  state = {
    items: null,
    count: 0,
    page: 1,
    perPage: 5
  };

  componentDidMount() {
    const { getData } = this.props;
    const { page, perPage } = this.state;

    getData(page, perPage)
      .then((res) => {
        this.setState({
          items: res.result,
          count: res.count
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

    const { items } = this.state;

    if (!items) {
      return <Spinner />;
    }

    const  itemList = this.renderItems(items);

    return (
      <div>
        { itemList }
        <nav>
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    );
  };
};