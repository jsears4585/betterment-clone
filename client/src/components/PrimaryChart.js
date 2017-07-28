import React from 'react'
import ReactHighstock from 'react-highcharts/ReactHighstock'

const PrimaryChart = ({formattedData}) => {

  const config = {
    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'IGOV Price'
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
