import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import { addExpense, removeExpense, editExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisbileExpenses from "./selectors/expenses"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

const store = configureStore()

store.dispatch(addExpense({ description: "Water bill" }))
store.dispatch(addExpense({ description: "Gas bill" }))
store.dispatch(setTextFilter("water"))

setTimeout(()=>{
    store.dispatch(setTextFilter("rent"))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisbileExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

// Provider allows access to the store from any component
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))
