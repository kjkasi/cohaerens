import React from 'react';
import { withRouter } from 'react-router-dom';

import ItemList from '../item-list';

const PlaceList = ({ history, match }) => {
  return (
    <ItemList />
  );
};

export default withRouter(PlaceList);