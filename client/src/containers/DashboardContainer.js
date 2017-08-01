import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import ProfileSection from '../components/ProfileSection'
import AddFunds from '../components/AddFunds'
import PrimaryChart from '../components/PrimaryChart'
import DetailsAccordion from '../components/DetailsAccordion'
import SettingsDropdown from '../components/SettingsDropdown'
import AddFundsModal from '../components/AddFundsModal'

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
    selectedFund: 'VOO',
    VOO: [],
    BND: [],
    IGOV: [],
    VXUS: [],
    username: '',
    userImage: '',
    userShares_VOO: 0,
    userShares_BND: 0,
    userShares_IGOV: 0,
    userShares_VXUS: 0,
    VOO_Holding: '—',
    BND_Holding: '—',
    IGOV_Holding: '—',
    VXUS_Holding: '—',
    isProfilePulled: false,
    isRealTimePulled: false,
    userTotal: 0
  }

  componentDidMount() {
    let labels = Object.keys(VOO)
    let datapoints = Object.values(VOO)
    let formattedData = this.formatData(labels, datapoints)
    this.setState({ formattedData: formattedData })

    // Initial Ticker Fetch
    fetch('http://localhost:3000/ticker')
      .then(res => res.json())
      .then(response => {
        this.setState({
          VOO: response[0],
          BND: response[1],
          IGOV: response[2],
          VXUS: response[3]
        })
      })
      .then(this.setState({
        isRealTimePulled: true
      }))

    setTimeout(() => {
      if (this.state.isProfilePulled && this.state.isRealTimePulled) {
        this.resetTotal()
      } else {
        console.log('error time')
      }
    }, 4000)

    // 60 Second Refresh Interval
    setInterval(() => {
      fetch('http://localhost:3000/ticker')
        .then(res => res.json())
        .then(response => {
          this.setState({
            VOO: response[0],
            BND: response[1],
            IGOV: response[2],
            VXUS: response[3]
          })
        })
        .then(this.resetTotal())
    }, 60000)

    // Initial User Pull
    fetch('http://localhost:3000/user/2')
      .then(res => res.json())
      .then(response => {
        this.setState({
          username: response.user.name,
          userImage: response.user.picture_link,
          userShares_VOO: response.holdings[0].shares,
          userShares_BND: response.holdings[1].shares,
          userShares_IGOV: response.holdings[2].shares,
          userShares_VXUS: response.holdings[3].shares
        })
      })
      .then(this.setState({
        isProfilePulled: true
      }))
  }

  resetTotal = () => {
    let currentTotal =
      "$" + (
      parseFloat(this.state.VOO[1].slice(1), 10) * this.state.userShares_VOO +
      parseFloat(this.state.BND[1].slice(1), 10) * this.state.userShares_BND +
      parseFloat(this.state.IGOV[1].slice(1), 10) * this.state.userShares_IGOV +
      parseFloat(this.state.VXUS[1].slice(1), 10) * this.state.userShares_VXUS
    ).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    this.setState({
      userTotal: currentTotal,
      VOO_Holding: "$" + (parseFloat(this.state.VOO[1].slice(1), 10) * this.state.userShares_VOO).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      BND_Holding: "$" + (parseFloat(this.state.BND[1].slice(1), 10) * this.state.userShares_BND).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      IGOV_Holding: "$" + (parseFloat(this.state.IGOV[1].slice(1), 10) * this.state.userShares_IGOV).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      VXUS_Holding: "$" + (parseFloat(this.state.VXUS[1].slice(1), 10) * this.state.userShares_VXUS).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })
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
        <div id='dollarContainer'></div>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <ProfileSection
                imageLink={this.state.userImage}
                userTotal={this.state.userTotal}
              />
              <AddFunds handleClickAddFunds={this.props.handleClickAddFunds} />
            </Grid.Column>
            <Grid.Column width={9}>
              <PrimaryChart
                formattedData={this.state.formattedData}
                selectedFund={this.state.selectedFund}
              />
            </Grid.Column>
            <Grid.Column width={4} id="accordionDiv">
              <SettingsDropdown />
              <DetailsAccordion
                selectFund={this.handleFundSelect}
                VOO={this.state.VOO}
                BND={this.state.BND}
                IGOV={this.state.IGOV}
                VXUS={this.state.VXUS}
                VOO_Holding={this.state.VOO_Holding}
                BND_Holding={this.state.BND_Holding}
                IGOV_Holding={this.state.IGOV_Holding}
                VXUS_Holding={this.state.VXUS_Holding}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default DashboardContainer
