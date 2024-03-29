import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

import './tec-graph.css';

const TecGraph = ({ data }) => {

  const tec = {
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
  };
  return <Line data={ tec } />;
};

export default TecGraph;