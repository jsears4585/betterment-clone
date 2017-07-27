import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import ProfileSection from '../components/ProfileSection'
import AddFundsModal from '../components/AddFundsModal'
import PrimaryChart from '../components/PrimaryChart'
import DetailsAccordion from '../components/DetailsAccordion'

import BND from '../data/BND.js'

import '../App.css'

class DashboardContainer extends Component {
  state = {
    newLabels: [],
    newData: []
  }

  componentDidMount() {
    let labels = Object.keys(BND)
    let datapoints = Object.values(BND)
    this.setState({
      newLabels: labels,
      newData: datapoints
    })
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
              <PrimaryChart newData={this.state.newData} newLabels={this.state.newLabels} />
            </Grid.Column>
            <Grid.Column width={3}>
              <DetailsAccordion />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default DashboardContainer
