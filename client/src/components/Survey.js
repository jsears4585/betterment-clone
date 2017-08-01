import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const Survey = props => {
  return (
    <Modal.Content >
      <Modal.Description>
        <p>{props.currentQuestion}</p>
        <Button
          onClick={props.nextQuestion}
          basic={true}
          primary={true}
        >
          {props.buttonText}
        </Button>
      </Modal.Description>
      <form>
        <label>{props.currentOptions[0]}</label>
        <input type="radio" value="4" name="name" /><br />
        <label>{props.currentOptions[1]}</label>
        <input type="radio" value="3" name="name" /><br />
        <label>{props.currentOptions[2]}</label>
        <input type="radio" value="2" name="name" /><br />
        <label>{props.currentOptions[3]}</label>
        <input type="radio" value="1" name="name" />
      </form>
    </Modal.Content>
  )
}

export default Survey
