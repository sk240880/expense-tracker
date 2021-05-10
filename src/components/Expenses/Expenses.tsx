import React from "react";

import ExpensItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props: IExpensesProps) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((expense) => {
        return (
          <ExpensItem
            key = {expense.id}
            id={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
