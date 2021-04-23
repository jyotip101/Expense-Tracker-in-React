import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

import '../css/App.css'

export const IncomeExpenses = () =>{
    const { transaction } = useContext(GlobalContext)

    const amounts = transaction.map(transaction => transaction.amount)
    
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item) , 0) * -1  
    ).toFixed(2)

    return(
        <div className="ie-container">
            <div className="ie-container-item">
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div className="ie-container-item">
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}