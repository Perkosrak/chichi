import React from 'react';
import './balance.css';


const Balance = (props) => {
    return(
      <div className="balance-container">
        <h3>Balance</h3>
    <div className="amount">$ {props.value}</div> 
      </div>
    )
}





export default Balance;