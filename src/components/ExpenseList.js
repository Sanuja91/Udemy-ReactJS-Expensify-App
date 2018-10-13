import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"

// Unconnected Expense List
const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
)

// Maps the State to Props
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

// Connected Expense List
export default connect(mapStateToProps)(ExpenseList)
