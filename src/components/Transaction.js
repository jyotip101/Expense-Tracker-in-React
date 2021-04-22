import React from 'react'

export const Transaction = ({ transaction }) =>{

    return(
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text } 
            <span> {transaction.amount} Rs </span>
            <button className="delete-btn">X</button>
        </li>
    )
} 