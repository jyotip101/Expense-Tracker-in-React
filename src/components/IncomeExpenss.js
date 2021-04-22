import React from 'react'

export const IncomeExpenses = () =>{
    return(
        <div className="ie-container">
            <div className="">
                <h4>Income</h4>
                <p className="money plus">+0.00 Rs</p>
            </div>
            <div className="">
                <h4>Expense</h4>
                <p className="money minus">-0.00 Rs</p>
            </div>
        </div>
    )
}