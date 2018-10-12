import { createStore } from "redux"

// createStore (( FUNCTION WITH PROPS state = {default values}))
const store = createStore((state = { count: 0 }) => {
  return state
})

console.log(store.getState())
