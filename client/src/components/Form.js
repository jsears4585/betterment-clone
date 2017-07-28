import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    if(true) {
      return (
          <form>
            <input type="radio" name="18-30" value="18-30" checked /> 18-30
            <input type="radio" name="31-40" value="31-40" /> 31-40
            <input type="radio" name="41-50" value="41-50" /> 41-50
            <input type="radio" name="41-50+" value="41-50+" /> 41-50+
          </form>
      )
    }
  }
}
