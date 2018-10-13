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
const sortByDate = (sortBy = "date") => ({
  type: "SORT_BY_DATE",
  sortBy
})

// SORT_BY_AMOUNT
const sortByAmount = (sortBy = "amount") => ({
  type: "SORT_BY_AMOUNT",
  sortBy
})

// SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
})
// SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
})
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
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy }
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy }
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate }
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate }

    default:
      return state
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate
    const textMatch =
      typeof text !== "string" ||
      expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  })
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
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log("STATE UPDATE", visibleExpenses)
})

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

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
)
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 50, createdAt: -1000 })
)

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
store.dispatch(setTextFilter("rent"))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(1250))
