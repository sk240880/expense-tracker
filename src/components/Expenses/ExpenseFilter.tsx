import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props:IExpenseFilterProps) => {
  const [filterYear, setFilterYer] = useState("");
//   const currentYear = new Date().getFullYear();
//   const inputYears: number[] = [];
//   for (let i = 1; i > -3; i--) {
//     inputYears.push(currentYear + i);
//   }
const yearChangedHandler = (event:React.ChangeEvent<HTMLSelectElement>) =>{
    //console.log(event.target.value);
    event.preventDefault();
    setFilterYer(event.target.value);
    props.onYearChange(event.target.value);
}
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangedHandler}>
          Í<option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
