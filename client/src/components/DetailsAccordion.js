import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const DetailsAccordion = props => {

  return (
    <Accordion fluid={true} styled>
      <Accordion.Title onClick={()=>(props.selectFund('VOO'))}>
        <Icon name='dropdown' />
        VOO
      </Accordion.Title>
      <Accordion.Content>
        Price: <br />
        Mkt Cap: <br />
        Expenses: <br />
        Category:
      </Accordion.Content>
      <Accordion.Title onClick={()=>(props.selectFund('BND'))}>
        <Icon name='dropdown' />
        BND
      </Accordion.Title>
      <Accordion.Content>
        Price: <br />
        Mkt Cap: <br />
        Expenses: <br />
        Category:
      </Accordion.Content>
      <Accordion.Title onClick={()=>(props.selectFund('IGOV'))}>
        <Icon name='dropdown' />
        IGOV
      </Accordion.Title>
      <Accordion.Content>
        Price: <br />
        Mkt Cap: <br />
        Expenses: <br />
        Category:
      </Accordion.Content>
      <Accordion.Title onClick={()=>(props.selectFund('VXUS'))}>
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
