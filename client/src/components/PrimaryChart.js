import React from 'react'
let LineChart = require("react-chartjs").Line;

const PrimaryChart = ({data, newData, newLabels}) => {

  let chartData = {
      datasets: [{
        data: newData,
        fillColor: "rgba(220,220,220,0.2)",
        label: "Test Dataset",
        pointColor: "rgba(220,220,220,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        strokeColor: "rgba(220,220,220,1)"
      }],
      labels: newLabels
    }

  return (
    <LineChart data={chartData} width="670" height="340" redraw />
  )
}

export default PrimaryChart
