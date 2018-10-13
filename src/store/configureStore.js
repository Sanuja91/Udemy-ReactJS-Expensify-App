import { createStore, combineReducers } from "redux"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters"

export default () => {
  // Store creation
  // Each route is managed by a specific reducer
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )
  return store
}
