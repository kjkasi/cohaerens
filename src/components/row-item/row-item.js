import React, { Component } from 'react';

import './row-item';

export default class RowItem extends Component {

  state = {
    items: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((items) => {
        this.setState({
          items
        });
      });
  };

  renderItems(items) {
    return items.map(({ id, name, desciption, createdAt, updatedAt }) => {
      return (
        <div className="row p-2"
             key={ id }>
          <div className="col-1">{ id }
          </div>
          <div className="col">{ name }
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
            <a className="btn btn-outline-danger btn-sm"
               href="#">Удалить
            </a>
          </div>
        </div>
      );
    });
  };

  render() {

    const { items } = this.state;

    if (!items) {
      return (
        <div>No items</div>
      );
    }

    const  itemList = this.renderItems(items);

    return (
      <div>
        { itemList }
      </div>
    );
  };
};