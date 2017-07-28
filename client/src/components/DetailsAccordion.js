import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const DetailsAccordion = props => {

  return (
    <Accordion styled>
      <Accordion.Title onClick={()=>(console.log('clicked VOO'))}>
        <Icon name='dropdown' />
        VOO
      </Accordion.Title>
      <Accordion.Content>
        Price: <br />
        Mkt Cap: <br />
        Expenses: <br />
        Category: 
      </Accordion.Content>
      <Accordion.Title onClick={()=>(console.log('clicked BND'))}>
        <Icon name='dropdown' />
        BND
      </Accordion.Title>
      <Accordion.Content>
        Price: <br />
        Mkt Cap: <br />
        Expenses: <br />
        Category:
      </Accordion.Content>
      <Accordion.Title onClick={()=>(console.log('clicked IGOV'))}>
        <Icon name='dropdown' />
        IGOV
      </Accordion.Title>
      <Accordion.Content>
        Price: <br />
        Mkt Cap: <br />
        Expenses: <br />
        Category:
      </Accordion.Content>
      <Accordion.Title onClick={()=>(console.log('clicked VXUS'))}>
        <Icon name='dropdown' />
        VXUS
      </Accordion.Title>
      <Accordion.Content>
        Price: <br />
        Mkt Cap: <br />
        Expenses: <br />
        Category:
      </Accordion.Content>
    </Accordion>
  )
}

export default DetailsAccordion
