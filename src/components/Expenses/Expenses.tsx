import React, { useEffect, useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props: IExpensesProps) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<string>(currentYear.toString());
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );
  const yearFilterChangeHandler = (year: string) => {
    setYear(year);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={year} onYearChange={yearFilterChangeHandler} />
        <ExpensesChart expenses = {filteredExpenses} />ß≈ß≈ß
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
