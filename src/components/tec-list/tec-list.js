import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner';
import ApiService from '../../services/api-service';
import Pages from '../pages';

import './tec-list.css';

class TecList extends Component {

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

    this.api.getTecList(page, perPage)
      .then((res) => {
        this.setState({
          items: res.result,
          count: res.count,
          page: Number.parseInt(this.props.page)
        });
      });
  };

  renderItems(items) {
    return items.map(({ _id, created, sourses, satellite, interval, site, position, format }) => {
      return (
        <div className="row p-2"
             key={ _id }>
          <div className="col-1">{/* id */}
          </div>
          <div className="col">{ created }
          </div>
          <div className="col">{ satellite }
          </div>
          <div className="col">{ site }
          </div>
          <div className="col">{ position }
          </div>
          <div className="col">
            <Link className="btn btn-outline-warning btn-sm" 
                  to={ `/react/tec/${_id}/edit` }>Редактировать
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
        <h3 className="p-2 text-center">Список ПЭС</h3>
        <div className="container">
          <div className="row">
            <div className="col-1 font-weight-bold">#</div>
            <div className="col font-weight-bold">Created</div>
            <div className="col font-weight-bold">Satellite</div>
            <div className="col font-weight-bold">Site</div>
            <div className="col font-weight-bold">Position</div>
            <div className="col">
              <Link className="btn btn-outline-success btn-sm" 
                  to={ "/react/tec/add" }>Добавить
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

export default TecList;


