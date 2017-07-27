import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import ProfileSection from '../components/ProfileSection'
import PrimaryChart from '../components/PrimaryChart'
import DetailsAccordion from '../components/DetailsAccordion'

import '../App.css'

class DashboardContainer extends Component {
  render() {
    return (
      <div className="ui raised padded container segment dashboardContainer">
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <ProfileSection />
            </Grid.Column>
            <Grid.Column width={10}>
              <PrimaryChart />
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
