import React from 'react'
import ReactHighstock from 'react-highcharts/ReactHighstock'

/* Hack to import HC export module */
let Highcharts = require('highcharts/highstock');
require('highcharts/modules/exporting')(Highcharts);

const PrimaryChart = ({formattedData}) => {

  const config = {
    rangeSelector: {
      selected: 3
    },

    title: {
      text: 'IGOV'
    },

    series: [{
      name: 'IGOV',
      data: formattedData,
      tooltip: {
        valueDecimals: 2
      }
    }]
  }

  return (
    <ReactHighstock config={config}>
    </ReactHighstock>
  )
}

export default PrimaryChart
