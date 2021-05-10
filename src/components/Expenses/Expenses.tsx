import React, { useState } from "react";

import ExpensItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props: IExpensesProps) => {
  const [expenses, setExpenses] = useState(props.expenses);
  const [year, setYear] = useState('');
  const yearChangeHandler = (year: string) => {
    if (!year) {
      setExpenses(props.expenses);
    } else {
      setExpenses(props.expenses.filter(x=>x.date.getFullYear().toString() === year));
    }
    setYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={yearChangeHandler} />
        {expenses.map((expense) => {
          return (
            <ExpensItem
              key={expense.id}
              id={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
