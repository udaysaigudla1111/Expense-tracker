import React, { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const expensesData = {
      title: enteredtitle,
      date: new Date(entereddate),
      amount: enteredamount,
    };

    props.onSaveExpenseData(expensesData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entereddate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
