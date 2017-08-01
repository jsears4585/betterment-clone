import React from 'react'
import ReactHighcharts from 'react-highcharts'
import { Button, Modal, Container, Grid } from 'semantic-ui-react'

import '../App.css'

const PortfolioSelector = ({handleClose}) => {
  const conservativeConfig = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: '200px',
        type: 'pie'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title: {
        text: 'Conservative 40/60'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
        {
            name: 'US Bond',
            y: 40,
            sliced: true,
            selected: true
        }, {
            name: 'US Equity',
            y: 30
        }, {
            name: 'Intl Bond',
            y: 20
        }, {
            name: 'Intl Equity',
            y: 10
        }]
    }]
  }

  const moderateConfig = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: '200px',
        type: 'pie'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title: {
        text: 'Moderate 60/40'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
        {
            name: 'US Bond',
            y: 30,
            sliced: true,
            selected: true
        }, {
            name: 'US Equity',
            y: 40
        }, {
            name: 'Intl Bond',
            y: 10
        }, {
            name: 'Intl Equity',
            y: 20
        }]
    }]
  }

  const aggressiveConfig = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: '200px',
        type: 'pie'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title: {
        text: 'Aggressive 90/10'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
        {
            name: 'US Bond',
            y: 5,
            sliced: true,
            selected: true
        }, {
            name: 'US Equity',
            y: 60
        }, {
            name: 'Intl Bond',
            y: 5
        }, {
            name: 'Intl Equity',
            y: 30
        }]
    }]
  }

  return (
    <Modal.Content>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <ReactHighcharts config={conservativeConfig}></ReactHighcharts><br />
            <ReactHighcharts config={moderateConfig}></ReactHighcharts><br />
            <ReactHighcharts config={aggressiveConfig}></ReactHighcharts><br />
          </Grid.Column>
          <Grid.Column width={10}>

            <div className="conservativeDesc">
              <Container>
                <p>This portfolio is built to last the long haul. It has 40% allocated to US fixed income and 20% in higher yielding international bonds.</p>
                <p>The remaining 40% of the portfolio is in the equity markets offering some upside to this stable approach.</p>
              </Container>
              <Modal.Description>
              <Button
                onClick={()=>{handleClose()}}
                basic={false}
                color="blue"
                className="portfolioButton"
                >
                  Select this portfolio
                </Button>
              </Modal.Description>
            </div>

            <div className="moderateDesc">
              <Container>
                <p>This diversified portfolio employs a 60% Equity, 40% Fixed Income blend.</p>
                <p>It has a healthy exposure to international equities and bonds and is designed to offer a better risk-adjusted rate of return than the S&P 500.</p>
              </Container>
              <Modal.Description>
              <Button
                onClick={()=>{handleClose()}}
                basic={false}
                color="blue"
                className="portfolioButton"
                >
                  Select this portfolio
                </Button>
              </Modal.Description>
            </div>

            <div className="aggressiveDesc">
              <Container>
               <p>This portfolio offers high octane exposure (90%) to equities and uses it's fixed income exposure (10%) to strategically limit the downside. </p>
               <p>This is a diversified approach to chasing high returns.</p>
              </Container>
              <Modal.Description>
                <Button
                  onClick={()=>{handleClose()}}
                  basic={false}
                  color="blue"
                  className="portfolioButton"
                  >
                    Select this portfolio
                  </Button>
                </Modal.Description>
              </div>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  )
}

export default PortfolioSelector
