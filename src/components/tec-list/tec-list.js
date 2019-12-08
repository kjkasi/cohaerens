import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './tec-list.css';

import Spinner from '../spinner';
import ApiService from '../../services/api-service';

class TecList extends Component {

  api = new ApiService();

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
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to={ `/react/tec/${prevPage}/list` }>Назад
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to={ `/react/tec/${nextPage}/list` }>Вперед
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
    
  };
};

export default TecList;


