import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props: IUserExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setUserInput({ ...userInput, enteredDate: event.target.value });
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newExpense: IExpenseItemProps = {
      id: Math.ceil(Math.random() * 1000000000000).toString(),
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(newExpense);
    // console.log(newExpense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setShowForm(false);
  };

  const cancelHandler = () => setShowForm(false);
  const addExpensesHandler = () => setShowForm(true);

  if (!showForm) {
    return <button onClick={addExpensesHandler}>Add Expenses</button>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
