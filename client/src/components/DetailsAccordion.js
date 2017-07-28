import React from 'react'
import { Accordion } from 'semantic-ui-react'

const DetailsAccordion = props => {

  const panels = [
    {title: 'VOO', content: 'Current price: $226.55'},
    {title: 'BND', content: 'Current price: $81.925'},
    {title: 'IGOV', content: 'Current price: $98.11'},
    {title: 'VXUS', content: 'Current price: $53.52'}
  ]

  return (
    <Accordion panels={panels} styled />
  )
}

export default DetailsAccordion
