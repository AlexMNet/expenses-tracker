import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const yearSelectedHandler = (year) => {
    console.log("THIS IS FROM EXPENSES.JS");
    console.log(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelected={yearSelectedHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
