import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Accordion } from 'semantic-ui-react'

const DetailsAccordion = props => {
  const panels = _.times(4, () => ({
    title: faker.lorem.sentence(), // VOO     <current holding>
    content: "current price, < time >, other stuff",
  }))

  return (
    <Accordion panels={panels} styled />
  )
}

export default DetailsAccordion
