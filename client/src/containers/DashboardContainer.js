import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import ProfileSection from '../components/ProfileSection'
import PrimaryChart from '../components/PrimaryChart'
import DetailsAccordion from '../components/DetailsAccordion'

import '../App.css'

class DashboardContainer extends Component {
  state = {
    data: {
      datasets: [{
        data: [ 83.78224543814932,
                62.85469484674046,
                61.22533441431438,
                35.54151639096351,
                71.85723375950693,
                81.8678274057163,
                96.54191141394537
        ],
        fillColor: "rgba(220,220,220,0.2)",
        label: "Test Dataset",
        pointColor: "rgba(220,220,220,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        strokeColor: "rgba(220,220,220,1)"
      }],
      labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven"]
    }
  }

  render() {
    return (
      <div className="ui raised padded container segment dashboardContainer">
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <ProfileSection />
            </Grid.Column>
            <Grid.Column width={10}>
              <PrimaryChart data={this.state.data} />
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
