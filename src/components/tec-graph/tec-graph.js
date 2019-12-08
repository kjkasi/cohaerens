import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

import './tec-graph.css';

class TecGraph extends Component {

  state = {
    data: null
  };

  componentDidMount() {

    if (!this.state.data) {
      this.updateData();
    }

  };

  componentDidUpdate(prevProps) {
    
    if (this.props.data !== prevProps.data) {
      this.updateData();
    };

  };

  updateData() {

    const { data } = this.props;

    this.setState({
      data: {
        labels: [ ...Array(data.rows.length).keys()],
        datasets: [
          {
            label: data.satellite,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.rows.map((row) => {
              return row.l1l2;
            })
          }
        ]
      }
    });
  }

  render() {

    const { data } = this.state;

    if (!data) {
      return <h3>Данные отсуствуют</h3>
    }

    return <Line data={ data } />;
  };

}

export default TecGraph;