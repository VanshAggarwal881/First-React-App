import React from 'react';

import "./Expenses.css"

import ExpenseItem from "./ExpenseItem"

export default function Expenses(props){
    return(
        <div className = "expenses">

            {
                props.item.map(
                    (totalexpense) => {
                        return (
                        <ExpenseItem
            date={totalexpense.date}
            title={totalexpense.title}
            amount={totalexpense.amount}>

            </ExpenseItem>
            )}
                )
            }
        </div>
             /* <ExpenseItem
            date={props.item[0].date}
            title={props.item[0].title}
            amount={props.item[0].amount}>

            </ExpenseItem>

            <ExpenseItem
            date={props.item[1].date}
            title={props.item[1].title}
            amount={props.item[1].amount}>

            </ExpenseItem>

            <ExpenseItem
            date={props.item[2].date}
            title={props.item[2].title}
            amount={props.item[2].amount}>

            </ExpenseItem> */
        
    )
}