import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import ProfileSection from '../components/ProfileSection'
import AddFunds from '../components/AddFunds'
import PrimaryChart from '../components/PrimaryChart'
import DetailsAccordion from '../components/DetailsAccordion'
import SettingsDropdown from '../components/SettingsDropdown'

import VOO from '../data/VOO.js'
import BND from '../data/BND.js'
import VXUS from '../data/VXUS.js'
import IGOV from '../data/IGOV.js'

import '../App.css'

const fundTable = {
  'VOO': VOO,
  'BND': BND,
  'VXUS': VXUS,
  'IGOV': IGOV
}

class DashboardContainer extends Component {
  state = {
    formattedData: [],
    selectedFund: 'VOO'
  }

  componentDidMount() {
    let labels = Object.keys(VOO)
    let datapoints = Object.values(VOO)
    let formattedData = this.formatData(labels, datapoints)
    this.setState({ formattedData: formattedData })
  }

  grabNewFund = fund => {
    let labels = Object.keys(fund)
    let datapoints = Object.values(fund)
    let formattedData = this.formatData(labels, datapoints)
    this.setState({ formattedData: formattedData })
  }

  formatData = (labels, datapoints) => {
    let formattedData = []
    labels.forEach(function(el, index) {
      let subArr = el.split('-')
      let date = new Date(`${subArr[1]}-${subArr[2]}-${subArr[0]}`).getTime()
      formattedData.push([ date, parseFloat(datapoints[index]) ])
    })
    formattedData.reverse()
    return formattedData
  }

  handleFundSelect = fund => {
    this.grabNewFund(fundTable[fund])
    this.setState({
      selectedFund: fund
    })
  }

  render() {
    return (
      <div className="ui raised padded container segment dashboardContainer">
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <ProfileSection />
              <AddFunds handleClickAddFunds={this.props.handleClickAddFunds}/>
            </Grid.Column>
            <Grid.Column width={9}>
              <PrimaryChart
                formattedData={this.state.formattedData}
                selectedFund={this.state.selectedFund}
              />
            </Grid.Column>
            <Grid.Column width={4} id="accordionDiv">
              <SettingsDropdown  />
              <DetailsAccordion
                selectFund={this.handleFundSelect}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default DashboardContainer
