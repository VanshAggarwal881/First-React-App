# Getting Started with Create React App

# Expense Tracker Project

## Overview

This project marks my first step into the world of React by building an expense tracker application. This README documents the journey, the fundamental React concepts applied, and the improvements made to ensure data persistence and proper date handling.

## Key Features and React Fundamentals

### 1. Component-Based Architecture

- **Components Created**: 
  - `ExpenseItem`
  - `Expenses`
  - `NewExpense`
  - `FormComponent`
- **Benefit**: Enhanced code modularity and reusability by breaking down the UI into reusable components.

### 2. State Management with Hooks

- **Hook Used**: `useState`
- **Benefit**: Managed the state of expenses, allowing the application to respond to user inputs and data updates dynamically.

### 3. Effect Hook for Side Effects

- **Hook Used**: `useEffect`
- **Purpose**: Synchronize the expense data with local storage to ensure data persistence.
- **Benefit**: The expense data remains consistent even after page reloads.

### 4. Props for Data Flow

- **Purpose**: Pass data between components and implement callback functions to send data from child to parent components.
- **Benefit**: Enhanced inter-component communication and data handling.

### 5. Event Handling

- **Purpose**: Manage form submissions and input changes with event handlers.
- **Benefit**: Smooth data entry and updates in the application.

## Improvements and Code Changes

### 1. `parseExpenses` Function

#### Code
```javascript
const parseExpenses = (expenses) => {
    return expenses.map(expense => ({
        ...expense,
        date: new Date(expense.date)
    }));
};
```

### 2. `useState` Initialization

#### Code
```javascript
const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : dummyexpenses;
});
```

### 3. `useEffect` for Saving Expenses to Local Storage

#### Code
```javascript
useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}, [expenses]);
```