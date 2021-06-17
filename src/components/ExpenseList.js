import React from "react";
import { connect } from "react-redux";
import Expense from "./Expense";
import FilterForm from "./FilterForm";
import getVisibleExpenses from "../selectors/expensesSelector";
import ExpensesSummary from "./ExpensesSummary";


function ExpenseList(props) {
  return (
    <div>
      <h1>ExpenseList</h1>
      { props.expenses.length !== 0 && <ExpensesSummary /> }
      {props.expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
      <FilterForm />
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
