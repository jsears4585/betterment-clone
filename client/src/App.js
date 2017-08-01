import React, { Component } from 'react';
import './App.css';

import ModalContainer from './containers/ModalContainer'
import DashboardContainer from './containers/DashboardContainer'
import AddFundsModal from './components/AddFundsModel'

class App extends Component {
  constructor() {
    super()
    this.state = {
      AddFundsModalShow: false,
    }
  }

  handleClickAddFunds = () => {
    this.setState({
      AddFundsModalShow: true,
    })
  }

  handleClickExitFundsModel = () => {
    this.setState({
      AddFundsModalShow: false
    })
  }

  render() {

    return (
      <div >
        <div id="logo_container">
          <svg id="svg_logo" viewBox="0 0 233.2 113.2" width="100%" height="100%">
            <g fill="#01B2E5">
              <path d="M18.4,0h8.1L8.1,61.4H0L18.4,0z"></path>
              <path d="M35,0h8.1L24.7,61.4h-8.1L35,0z"></path>
            </g>
            <g fill="#FFFFFF">
              <path d="M51.7,61.5V19.7h20.1v6.2H58.9v10.8h9.6V43h-9.6v18.6h-7.2V61.5z"></path>
              <path d="M75.6,61.5V19.7h7.2v35.6h11.3v6.3L75.6,61.5L75.6,61.5z"></path>
              <path d="M105.1,61.5h-7l7.7-41.9h8.9l7.7,41.9h-7l-1.3-9.3h-7.9L105.1,61.5z M107.4,46h5.8l-2.8-18h-0.1L107.4,46z"></path>
              <path d="M128,25.9h-7v-6.3h21.1v6.3h-7v35.6h-7.2L128,25.9L128,25.9z"></path>
              <path d="M145.3,61.5V19.7h7.2v41.9L145.3,61.5L145.3,61.5z"></path>
              <path d="M164.7,61.5h-7.2V19.7h10.1c8.1,0,12.2,3.4,12.2,12.4c0,6.7-2.6,9.5-5,10.6l6.1,19h-7.3l-5.1-17.3           c-0.9,0.1-2.4,0.2-3.7,0.2L164.7,61.5L164.7,61.5z M164.7,38.4h2.6c3.9,0,5.3-1.4,5.3-6.4s-1.5-6.4-5.3-6.4h-2.6V38.4z"></path>
              <path d="M184.3,29.8c0-5.9,3.5-10.7,11-10.7s11,4.8,11,10.7v21.6c0,5.9-3.5,10.7-11,10.7s-11-4.8-11-10.7V29.8z M191.4,51.2c0,3.1,0.9,4.6,3.8,4.6c2.9,0,3.8-1.5,3.8-4.6V30c0-3.1-0.9-4.6-3.8-4.6s-3.8,1.5-3.8,4.6V51.2z"></path>
              <path d="M211.1,61.5V19.7h6.7l8.8,24h0.1v-24h6.5v41.9h-6.3l-9.2-26.2h-0.1v26.2L211.1,61.5L211.1,61.5z"></path>
            </g>
          </svg>
          <span id="financial_logo">Financal</span>
        </div>
        <ModalContainer />
        <DashboardContainer handleClickAddFunds={this.handleClickAddFunds} />
        {this.state.AddFundsModalShow ? <AddFundsModal handleClickExitFundsModel={this.handleClickExitFundsModel} /> : <div><span></span></div> }
      </div>
    );
  }
}

export default App;
