import React from "react";
import ExpensItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props: IExpensesProps) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpensItem
          key={expense.id}
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
