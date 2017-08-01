import React, { Component } from 'react'
let total = 0

export default class Name extends Component{

  state = {
    userAge: 0,
    userCategory: 0,
    userRisk: 0,
    total: 0
  }

  handleUserAge = event => {
    this.setState({
      userAge: event.target.value
    })
  }

  handleUserCategory = event => {
    const userCategoryNum = event.target.value
    this.setState({
      userCategory: userCategoryNum
    })
  }

  handleUserRisk = event => {
    this.setState({
      userRisk: event.target.value
    })
  }

  addUserTotal = () => {
  return  parseInt(this.state.userAge, 10) + parseInt(this.state.userCategory, 10) + parseInt(this.state.userRisk, 10)
  }

  render(){
      if (this.props.questions=== 0) {
        return (
          <form >
            <input type="radio" name="18-30" value="3" checked={this.state.userAge === "3"} onChange={this.handleUserAge}  /> 18-30
            <input type="radio" name="31-40" value="2" checked={this.state.userAge === "2"} onChange={this.handleUserAge} /> 31-40
            <input type="radio" name="41-50" value="1" checked={this.state.userAge=== "1"} onChange={this.handleUserAge} /> 41-50
            <input type="radio" name="41-50+" value="0" checked={this.state.userAge === "0"} onChange={this.handleUserAge} /> 41-50+
          </form>
        )
      } else if (this.props.questions === 1) {
        this.state.total = this.state.total + parseInt(this.state.userAge, 10)
        return (
          <form class="form-questions">
            <input type="radio" name="Saving for retirement" value="1"  checked={this.state.userCategory === "1"} onChange={this.handleUserCategory}/> Saving for retirement
            <input type="radio" name="Other" value="0" checked={this.state.userCategory === "0"} onChange={this.handleUserCategory}/> Other
          </form>
        )
      } else if (this.props.isLastQuestion && this.props.questions === 2) {
        this.state.total = this.state.total + this.state.userRisk
        this.props.handleUserTotal(this.addUserTotal())
        return (<span></span>)
      } else if (this.props.questions === 2) {
        this.state.total = this.state.total + parseInt(this.state.userCategory, 10)

        return (
          <form class="form-questions">
            <input type="radio" name="Liquidate porfolio" value="3"  checked={this.state.userRisk === "3"} onChange={this.handleUserRisk}/> Liquidate porfolio
            <input type="radio" name="Sell some 50% of assets" value="2"  checked={this.state.userRisk === "2"} onChange={this.handleUserRisk}/> Sell some 50% of assets
            <input type="radio" name="Buy more assets" value="1"  checked={this.state.userRisk === "1"} onChange={this.handleUserRisk}/> Buy more assets
            <input type="radio" name="Leave portfolio alone" value="0"  checked={this.state.userRisk === "0"} onChange={this.handleUserRisk}/> Leave portfolio alone
          </form>
        )
      }
  }
}
