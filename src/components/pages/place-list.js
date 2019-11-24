import React from 'react';
import { withRouter } from 'react-router-dom';

import ItemList from '../item-list';

const PlaceList = ({ history, match }) => {
  const { id } = match.params;
  console.log('PlaceList:' + id);
  return (
    <ItemList page={ id }/>
  );
};

export default withRouter(PlaceList);