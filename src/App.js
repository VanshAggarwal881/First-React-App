import React , {useState , useEffect} from 'react';
import Expenses from "./Components/Expenses";
import NewExpense from './Components/NewExpense/NewExpense';
import "./App.css"

let dummyexpenses = [
    {
        id : 'e1' ,
        title : 'DummyExpense' ,
        amount : 900 ,
        date : new Date(2024 , 8 , 2)
    },
    {
        id : 'e2' ,
        title : 'DummyExpense' ,
        amount : 100 ,
        date : new Date(2024 , 8 , 2)
    },
    {
        id : 'e3' ,
        title : 'DummyExpense' ,
        amount : 2000 ,
        date : new Date(2024 , 8 , 2)
    }
];

const parseExpenses = (expenses) => {
    return expenses.map(expense => ({
        ...expense,
        date: new Date(expense.date)
    }));
};


export default function App(){
    
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? parseExpenses(JSON.parse(savedExpenses)) : dummyexpenses;
    });

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    // function to receive data from child component
    const dataFromNewExpense = (receivedData)=>{
        const totalexpense = [ receivedData , ...expenses ]
        setExpenses(totalexpense);
        // the total expense is populating the expenses with the existing data and the new data 
    }
   
    return (
        <div className="app-container">
            <h2 className='mainheading'>Expense Tracker</h2>
            <NewExpense dataToAppjs = {dataFromNewExpense}></NewExpense>
            <Expenses item={expenses}></Expenses>
           
        </div>
    );
}