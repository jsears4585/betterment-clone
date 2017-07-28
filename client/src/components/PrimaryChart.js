import React from 'react'
import ReactHighstock from 'react-highcharts/ReactHighstock'

/* Hack to import HC export module */
let Highcharts = require('highcharts/highstock');
require('highcharts/modules/exporting')(Highcharts);

const PrimaryChart = props => {

  const config = {
    rangeSelector: {
      selected: 3
    },

    title: {
      text: props.selectedFund
    },

    series: [{
      name: props.selectedFund,
      data: props.formattedData,
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
