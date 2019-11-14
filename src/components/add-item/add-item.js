import React, { Component } from 'react';

import './add-item';

export default  class AddItem extends Component {
  render() {
    return (
      <form>
        <div className="row p-2">
          <div className="col-1">
            <input className="form-control form-control-sm" disabled />
          </div>
          <div className="col">
            <input className="form-control form-control-sm" />
          </div>
          <div className="col">
            <input className="form-control form-control-sm" />
          </div>
          <div className="col">
            <input className="form-control form-control-sm" disabled />
          </div>
          <div className="col">
            <input className="form-control form-control-sm" disabled />
          </div>
          <div className="col">
            <button type="submit" 
                    className="btn btn-outline-success btn-sm">Добавить
            </button>
          </div>
        </div>
      </form>
    );
  }
};