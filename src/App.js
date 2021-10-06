import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 28.3,
    date: new Date(2021, 10, 3)
  },
  { id: "e2", title: "New Desk", amount: 290, date: new Date(2021, 10, 3) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 87.3,
    date: new Date(2021, 10, 3)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
