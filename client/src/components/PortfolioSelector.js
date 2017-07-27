import React from 'react'
import { Button, Header, Modal, Container, Grid } from 'semantic-ui-react'

import '../App.css'

const PortfolioSelector = ({handleClose}) => {
  return (
    <Modal.Content>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column width={2}>
            <img alt="" src="/images/pie-chart.png" onClick={()=>console.log('port 1 clicked')} /><br />
            <img alt="" src="/images/pie-chart.png" onClick={()=>console.log('port 2 clicked')} /><br />
            <img alt="" src="/images/pie-chart.png" onClick={()=>console.log('port 3 clicked')} />
          </Grid.Column>
          <Grid.Column width={14}>
            <Container text>
              <Header as='h2'>Header</Header>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            </Container>
            <Modal.Description>
              <Button
                onClick={()=>{handleClose()}}
                basic={false}
                color="blue"
                >
                  Select this portfolio
                </Button>
              </Modal.Description>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  )
}

export default PortfolioSelector