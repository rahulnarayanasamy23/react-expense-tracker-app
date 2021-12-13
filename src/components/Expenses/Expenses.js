import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("From Expenses");
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


    return(
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpenseList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;