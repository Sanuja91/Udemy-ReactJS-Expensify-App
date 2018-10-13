import { createStore, combineReducers } from "redux"
import uuid from "uuid"

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  expense: { id }
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
})
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // Spread Operators, adds all existing items, then adds ne item
      return [...state, action.expense]

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.expense.id
      })

    // Uses SPREAD OBJECT OPERATORS to clone object then edit it
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates }
        } else return expense
      })
    default:
      return state
  }
}

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    // Uses SPREAD OBJECT OPERATORS to clone object then edit it
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text }
    default:
      return state
  }
}

// Store creation
// Each route is managed by a specific reducer
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

const unsubscribe = store.subscribe(() => {
  console.log("STATE UPDATE", store.getState())
})

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
)
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 50 })
)

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
store.dispatch(setTextFilter("rent"))

const demoState = {
  expenses: [
    {
      id: "asdib2ou3rbwqd",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

// EXAMPLE - OBJECT SPREAD OPERATOR
const user = {
  name: "Jen",
  age: 24
}

// Spread Operator for Objects
console.log({
  ...user,
  location: "Philadelphia",
  age: 27
})
