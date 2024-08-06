import React , {useState} from 'react';

import "./ExpenseItem.css";

export default function ExpenseItem(props){
    // ----------------------------------------------------------------------------------------
    // useState is a function imported from React , also called ReactHooks
    // use state returns an array containing two items 1. variable , 2. function
    // array destructuring : setTitle to change the value of variable 
    // const [newtitle , setnewTitle] = useState('')
    // const [title , setTitle] = useState(props.title)
    // function clickHandler(){
    //     setTitle(newtitle);
    //     // just pass the value you want to change from the original value in the function
    // }
    // function changeHandler(e){
    //     // input value in the input box is coming to the e.targer.value and giving this to setnewtitle will overwrite the suddent updation of the input box newtitle variable condition
    //     setnewTitle(e.target.value)
    // }
    // ----------------------------------------------------------------------------------------
    
    return (
        <div className="expense-item">
           <div> {props.date.toLocaleDateString()}</div>
           <div className="expense-item_description">
              <h2>{props.title}</h2>
              <div className="expense-item_price">${props.amount}</div>
           </div>

           {/* newTitle is the variable made from useState hook so it updates it evderytime so when we try to write something in the input box it never displays a key or alphabet as it is updating itself to blank space everytime 
           solution : see changehandler function*/}

           
        </div>
    );
};