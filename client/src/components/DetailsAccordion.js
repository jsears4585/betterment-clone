import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const DetailsAccordion = props => {

  return (
    <Accordion fluid={true} styled>
      <Accordion.Title onClick={()=>(props.selectFund('VOO'))}>
        <Icon name='dropdown' />
        VOO <span className="tickerPrice">{props.VOO_Holding}</span>
      </Accordion.Title>
      <Accordion.Content>
        Real-time Price: {props.VOO[1]} <span className={props.VOO[2] + " tickerPrice"}>{props.VOO[3]}</span><br />
        Mkt Cap: 46.00 B<br />
        Expenses: 0.04%<br />
        Category: Large Blend
      </Accordion.Content>
      <Accordion.Title onClick={()=>(props.selectFund('BND'))}>
        <Icon name='dropdown' />
        BND <span className="tickerPrice">{props.BND_Holding}</span>
      </Accordion.Title>
      <Accordion.Content>
        Real-time Price: {props.BND[1]} <span className={props.BND[2] + " tickerPrice"}>{props.BND[3]}</span><br />
        Mkt Cap: 34.84 B<br />
        Expenses: 0.05%<br />
        Category: Intermediate-Term Bond
      </Accordion.Content>
      <Accordion.Title onClick={()=>(props.selectFund('IGOV'))}>
        <Icon name='dropdown' />
        IGOV <span className="tickerPrice">{props.IGOV_Holding}</span>
      </Accordion.Title>
      <Accordion.Content>
        Real-time Price: {props.IGOV[1]} <span className={props.IGOV[2] + " tickerPrice"}>{props.IGOV[3]}</span><br />
        Mkt Cap: 661.42 Mil<br />
        Expenses: 0.35%<br />
        Category: World Bond
      </Accordion.Content>
      <Accordion.Title onClick={()=>(props.selectFund('VXUS'))}>
        <Icon name='dropdown' />
        VXUS <span className="tickerPrice">{props.VXUS_Holding}</span>
      </Accordion.Title>
      <Accordion.Content>
        Real-time Price: {props.VXUS[1]} <span className={props.VXUS[2] + " tickerPrice"}>{props.VXUS[3]}</span><br />
        Mkt Cap: 8.9 B<br />
        Expenses: 0.11%<br />
        Category: Foreign Large Blend
      </Accordion.Content>
    </Accordion>
  )
}

export default DetailsAccordion
