import React from "react"
import { connect } from "react-redux"

// Unconnected Expense List
const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
    {props.filters.text}
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

// Connected Expense List
export default connect(mapStateToProps)(ExpenseList)
