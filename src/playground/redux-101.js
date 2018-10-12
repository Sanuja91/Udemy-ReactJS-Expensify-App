import { createStore } from "redux"
// Action Generators - Returns Action Objects
// Desctrutured object
// If prop is missing then its defaulted to an empty object {}
// If incrementBy is missing then use 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
})

const resetCount = () => ({
  type: "RESET"
})

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
})

// createStore (( FUNCTION WITH PROPS state = {default values}))
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy }

    case "DECREMENT":
      return { count: state.count - action.decrementBy }

    case "SET":
      return { count: action.count }

    case "RESET":
      return { count: 0 }

    default:
      return state
  }
})

// Suscribe is called each time the state has changed
// Calling subscribe returns a function that can be
// called to unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Use of Action Generators - PREFERRED METHOD
store.dispatch(incrementCount())

store.dispatch(incrementCount({ incrementBy: 5 }))

// Reset Count
store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 5 }))

// Sets count.. Dispatching an action
store.dispatch(setCount({ count: 101 }))

// Unsubscribe from the store
unsubscribe()

// Reset Count
store.dispatch(resetCount())