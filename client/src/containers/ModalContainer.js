import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

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
      'If you lost 10% of your portfolio in a month, what would you do...',
    ],
    optionsArray: [
      ['18-30', '30-49', '49-65', '65+'],
      ['Invest to make money', 'Save for a goal', 'Save for retirement', 'Make sure retirement money lasts'],
      ['Invest more', 'Wait and see',  'Sell a percentage of your holdings', 'Cash out!']
    ],
    descriptions: {
      conservative: "This portfolio is built to last the long haul. It has 40% allocated to US fixed income and 20% in higher yielding international bonds. The remaining 40% of the portfolio is in the equity markets offering some upside to this stable approach."
      , moderate: "This diversified portfolio employs a 60% Equity, 40% Fixed Income blend. It has a healthy exposure to international equities and bonds and is designed to offer a better risk-adjusted rate of return than the S&P 500."
      , aggresive: "This portfolio offers high octane exposure (90%) to equities and uses it's fixed income exposure (10%) to strategically limit the downside. This is a diversified approach to chasing high returns."
    },
    riskType: null,
    modalOpen: true,
    userTotal: 0,
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

  handleUserTotal = (number) => {
    this.setState({
      userTotal: number
    })
  }

  handleUserTotal = (number) => {
    console.log(number, "usertotal")
  }

  render() {

    let componentToRender
    if (!this.state.isLastQuestion) {
      componentToRender =
      <Survey className="survey"
        buttonText={this.state.buttonText}
        nextQuestion={this.nextQuestion}
        currentQuestion={this.state.questionsArray[this.state.currentQuestionIndex]}
        currentOptions={this.state.optionsArray[this.state.currentQuestionIndex]}
        descriptions={this.state.descriptions}
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
      </Modal>
    )
  }
}

export default ModalContainer
