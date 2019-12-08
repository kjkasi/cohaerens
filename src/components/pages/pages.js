import React from 'react';
import { Link } from 'react-router-dom';

import './pages.css';

const Pages = ({count, perPage, page}) => {

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

  return (
    <nav className="d-sm-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to={ `/react/tec/${prevPage}/list` }>Назад
          </Link>
        </li>
        <li className="page-item disabled">
          <a className="page-link" 
             href="#"
             tabIndex="-1">{ page }
          </a>
        </li>
        <li className="page-item">
          <Link className="page-link" to={ `/react/tec/${nextPage}/list` }>Вперед
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pages;
