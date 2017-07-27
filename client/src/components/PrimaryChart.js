import React from 'react'
let LineChart = require("react-chartjs").Line;

const PrimaryChart = ({data}) => {
  return (
    <LineChart data={data} width="670" height="340" />
  )
}

export default PrimaryChart
