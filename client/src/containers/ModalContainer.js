import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import Form from '../components/Form'

import Survey from '../components/Survey'
import PortfolioSelector from '../components/PortfolioSelector'

class ModalContainer extends Component {
  state = {
    buttonText: 'Continue',
    isLastQuestion: false,
    currentQuestionIndex: 0,
    questionsArray: [
      'What is your age?',
      'What are your investment goals?',
      'If you lost 10% of your portfolio in a month...',
    ],
    riskType: null,
    modalOpen: true
  }

  nextQuestion = () => {
    if (this.state.currentQuestionIndex >= this.state.questionsArray.length - 1) {
      this.setState({
        isLastQuestion: true,
        buttonText: 'Choose Portfolio'
      })
    } else {
      this.setState({ currentQuestionIndex: this.state.currentQuestionIndex + 1 })
    }

    return this.state.questionsArray[this.state.currentQuestionIndex]
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  formComponent

  render() {
    let componentToRender
    if (!this.state.isLastQuestion) {
      componentToRender =
      <Survey
        buttonText={this.state.buttonText}
        nextQuestion={this.nextQuestion}
        currentQuestion={this.state.questionsArray[this.state.currentQuestionIndex]}

      />


    } else {
      componentToRender =
      <PortfolioSelector handleClose={this.handleClose} />
    }

    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
      {componentToRender}
      <Form />


      </Modal>
    )
  }
}

export default ModalContainer
