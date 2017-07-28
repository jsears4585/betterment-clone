import React, { Component } from 'react'

const Form = ({questions, isLastQuestion}) => {
    console.log(questions)
  if(questions === 0) {
    return (
      <form>
        <input type="radio" name="18-30" value="18-30" checked /> 18-30
        <input type="radio" name="31-40" value="31-40" /> 31-40
        <input type="radio" name="41-50" value="41-50" /> 41-50
        <input type="radio" name="41-50+" value="41-50+" /> 41-50+
      </form>
    )
  } else if (questions === 1) {
    return (
      <form>
        <input type="radio" name="Saving for retirement" value="Saving for retirement" checked /> Saving for retirement
        <input type="radio" name="Other" value="Other" /> Other
      </form>
    )
  } else if (isLastQuestion && questions === 2) {
    return (<span></span>)
  } else if (questions === 2) {
    return (
      <form>
        <input type="radio" name="Liquidate porfolio" value="Liquidate porfolio" checked /> Liquidate porfolio
        <input type="radio" name="Sell some 50% of assets" value="Sell some 50% of assets" checked /> Sell some 50% of assets
        <input type="radio" name="Buy more assets" value="Buy more assets" checked /> Buy more assets
        <input type="radio" name="Leave portfolio alone" value="Leave portfolio alone" checked /> Leave portfolio alone
      </form>
    )
  }
}

export default Form
