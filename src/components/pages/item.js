import React from 'react';
import { withRouter } from 'react-router-dom';

const Item = ({ history, match }) => {
  return (
    <div>
        <h3 className="p-2 text-center">Добро пожаловать
        </h3>
    </div>
  );
};

export default withRouter(Item);