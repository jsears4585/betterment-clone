import React from 'react'
import { Modal, Button, Header, Icon, Form, Input, Dropdown } from 'semantic-ui-react'


export default class AddFundsModal extends React.Component{
  constructor(){
    super()
    this.state = {
      bankOptions: [
    {
        text: 'Bank Of America',
        value: 'Bank Of America'
    },
    {
      text: "TD Bank",
      value: 'TD Bank'
    }
    ]
    }
  }

  render(){
    return(
      <div>
      <Modal open="true" size="huge" className="add-funds-modal">
          <Modal.Header className="funds-headers">Add Funds</Modal.Header>
          <Modal.Content >
          <Modal.Header className="funds-headers">Select your bank account</Modal.Header>
            <div className="banks">
              <Dropdown placeholder='State' search selection options={this.state.bankOptions} />
            </div>
        <Modal.Description>
          <Header className="funds-headers">Amount</Header>
          <Form className="add-funds-form">
            <Form.Group>
              <Form.Field id="form-amount-input"  control={Input} placeholder='Amount(USD)' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field id="form-cancel-button" control={Button} size="big" primary="true" content='Cancel' onClick={this.props.handleClickExitFundsModel} />
              <Form.Field id="form-money-button" control={Button} size="big" color='green' content='Please take my money' onClick={this.props.handleClickExitFundsModel} />
            </Form.Group>
          </Form>
        </Modal.Description>
  </Modal.Content>
</Modal>
      </div>
    )
  }
}
