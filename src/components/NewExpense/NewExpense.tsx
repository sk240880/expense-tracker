import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props:IExpenseProps) => {
    const saveExpenseDataHandler  = (enteredExpenseData:IExpenseItemProps) => {
        const expenseData = {
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
    }; 
  return (
    <div className="new-expense">
      <ExpenseForm  onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
