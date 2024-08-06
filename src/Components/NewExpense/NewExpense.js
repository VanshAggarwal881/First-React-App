import React from "react";

import './NewExpense.css'
import FormComponent from "./FormComponent";

export default function NewExpense(props){

    // function to receive data from child that is FormComponent , using props 
    const dataFromChild = (receivedData) =>{
        // console.log(receivedData);
        const expensedata = {
            ...receivedData ,
            id : Math.random().toString()
        }
        props.dataToAppjs(expensedata)
        console.log(expensedata);

    }

    return (
        <div className="new-expense">
            <FormComponent formcomponentdata = {dataFromChild}></FormComponent>
        </div>
    );
}