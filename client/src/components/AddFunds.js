import React from 'react'

const AddFunds = props => {
  console.log(props)
  return (
    <div className="addMoney">
      <h3 className="inlineBlockHeader" onClick={props.handleClickAddFunds}>Add Funds +</h3>
    </div>
  )
}

export default AddFunds
