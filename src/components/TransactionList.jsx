import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';


function TransactionList() {

  const {transactions} = useContext(GlobalContext);

  const noHistoryMessage = () =>{
    if(transactions.length === 0) 
      return <p className="text-center">There is no history</p>
  }

  return (
    <Fragment>
      <h3>History</h3>
      {noHistoryMessage()}
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  )
}

export default TransactionList;
