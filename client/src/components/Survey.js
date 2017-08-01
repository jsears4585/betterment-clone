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
    </Modal.Content>
  )
}

export default Survey
