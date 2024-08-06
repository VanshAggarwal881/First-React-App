import React , {useState} from "react";

import './FormComponent.css'

export default function FormComponent(props){
    // this time props is used to send data from child to its parent that is NewExpense

    const [thetitle , setthetitle] = useState('')
    const [theamount , settheamount] = useState('')
    const [thedate , setthedate] = useState('')

    function titlechangehandler(e){
        // console.log(e.target.value);
        setthetitle(e.target.value)
    }
    function amountchangehandler(e){
        settheamount(e.target.value)

    }
    function datechangehandler(e){
        setthedate(e.target.value)

    }

    function submithandler(e){
        e.preventDefault();
        const expensedata = {
            title : thetitle ,
            amount : theamount ,
            date : new Date(thedate)
        }
        // console.log(expensedata);

        // calling the property present in the parent component using props and passing the child data
        props.formcomponentdata(expensedata)
        setthetitle('')
        settheamount('')
        setthedate('')


    }
    return(
        <form onSubmit={submithandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" value={thetitle} onChange={titlechangehandler} />

                </div>

                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={theamount} onChange={amountchangehandler} />

                </div>

                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" value={thedate} onChange={datechangehandler} />

                </div>

            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}