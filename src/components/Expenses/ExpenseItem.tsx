import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpensItem = (props: IExpenseItemProps) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = ()=>{
    setTitle('new Title');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Title update</button>
    </Card>
  );
};

export default ExpensItem;
