import React, { Component } from 'react';
import './App.css';

import ModalContainer from './containers/ModalContainer'
import DashboardContainer from './containers/DashboardContainer'

class App extends Component {
  render() {
    return (
      <div>
        <ModalContainer />
        <DashboardContainer />
      </div>
    );
  }
}

export default App;
