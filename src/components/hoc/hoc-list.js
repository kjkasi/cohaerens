import React from 'react';
import ItemList from '../item-list';
import {
  compose,
  withData,
  withChildFunction,
  withApiService
} from '../hoc';

const renderPlace = ({ _id, Name, desciption, createdAt, updatedAt }) => {
  return (
    <div className="row p-2"
         key={ _id }>
      <div className="col-1">{/* _id */}
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
      </div>
    </div>
  );
};

const mapPlaceMethodToProps = (apiService) => {
  return {
    getData: apiService.getAllPlace
  };
};

const PlaceList = compose(
  withApiService(mapPlaceMethodToProps),
  withData,
  withChildFunction(renderPlace)
)(ItemList);

export {
  PlaceList
};