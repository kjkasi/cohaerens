import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner';
import ApiService from '../../services/api-service';
import Pages from '../pages';

import './research-list.css';

class ResearchList extends Component {

  api = new ApiService();

  state = {
    items: null,
    count: null,
    perPage: 5,
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
    const { page } = this.props;
    const { perPage } = this.state;

    this.api.getResearchList(page, perPage)
      .then((res) => {
        this.setState({
          items: res.result,
          count: res.count,
          page: Number.parseInt(this.props.page)
        });
      });
  };

  renderItems(items) {
    return items.map(({ _id, name, descriprtion, place }) => {
      return (
        <div className="row p-2"
             key={ _id }>
          <div className="col-1">{/* id */}
          </div>
          <div className="col">{ name }
          </div>
          <div className="col">{ descriprtion }
          </div>
          <div className="col">{ place }
          </div>
          <div className="col">
            <Link className="btn btn-outline-warning btn-sm" 
                  to={ `/react/research/${_id}/edit` }>Редактировать
            </Link>
            {/*
            <a className="btn btn-outline-warning btn-sm"
               href="#">Редактировать
            </a>
           
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

    if (!items) {
      return <Spinner />;
    }

    const itemList = this.renderItems(items);

    return (
      <div>
        <h3 className="p-2 text-center">Список исследований</h3>
        <div className="container">
          <div className="row">
            <div className="col-1 font-weight-bold">#</div>
            <div className="col font-weight-bold">Name</div>
            <div className="col font-weight-bold">Description</div>
            <div className="col font-weight-bold">Place</div>
            <div className="col">
              <Link className="btn btn-outline-success btn-sm" 
                  to={ "/react/research/add" }>Добавить
              </Link>
            </div>
          </div>
          { itemList }
          <Pages count={ count }
                 perPage={ perPage }
                 page={ page } />
        </div>
      </div>
    );
    
  };
};

export default ResearchList;


