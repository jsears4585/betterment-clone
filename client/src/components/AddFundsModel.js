import React from 'react'
import { Modal, Button, Header, Icon, Form, Input } from 'semantic-ui-react'


export default class AddFundsModal extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>
      <Modal open="true" >
          <Modal.Header>Add Funds</Modal.Header>
          <Modal.Content >
          <Modal.Header>Select your bank account</Modal.Header>
          <p>Bank of America</p>
          <p>TD Bank</p>
        <Modal.Description>
          <Header>Amount</Header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field  control={Input} label='Amount' placeholder='Amount(USD)' />
              <Form.Field  control={Button} color='green' content='Please take my money' onClick={this.props.handleClickExitFundsModel} />
              <Form.Field  control={Button} primary="true" content='Cancel' onClick={this.props.handleClickExitFundsModel} />
            </Form.Group>
          </Form>
        </Modal.Description>
  </Modal.Content>
</Modal>
      </div>
    )
  }
}
