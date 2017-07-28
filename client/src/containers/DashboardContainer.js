import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import ProfileSection from '../components/ProfileSection'
import AddFundsModal from '../components/AddFundsModal'
import PrimaryChart from '../components/PrimaryChart'
import DetailsAccordion from '../components/DetailsAccordion'

import IGOV from '../data/IGOV.js'

import '../App.css'

class DashboardContainer extends Component {
  state = {
    formattedData: []
  }

  componentDidMount() {
    let labels = Object.keys(IGOV)
    let datapoints = Object.values(IGOV)
    let formattedData = []
    labels.forEach(function(el, index) {
      let subArr = el.split('-')
      let date = new Date(`${subArr[1]}-${subArr[2]}-${subArr[0]}`).getTime()
      formattedData.push([ date, parseFloat(datapoints[index]) ])
    })
    formattedData.reverse()
    this.setState({ formattedData: formattedData })
  }

  render() {
    return (
      <div className="ui raised padded container segment dashboardContainer">
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <ProfileSection />
              <AddFundsModal />
            </Grid.Column>
            <Grid.Column width={10}>
              <PrimaryChart formattedData={this.state.formattedData} />
            </Grid.Column>
            <Grid.Column width={3}>
              <i className="big settings icon settings-icon"></i>
              <DetailsAccordion />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default DashboardContainer
