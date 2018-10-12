import { createStore } from "redux"

// createStore (( FUNCTION WITH PROPS state = {default values}))
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1
      return { count: state.count + incrementBy }

    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1
      return { count: state.count - decrementBy }

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

// Incrementing count.. Dispatching an action
// Type is mandatory but can add any other key value pairs
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
})

store.dispatch({
  type: "INCREMENT"
})

// Reset Count
store.dispatch({
  type: "RESET"
})

// Decreasing count.. Dispatching an action
store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
})

// Decreasing count.. Dispatching an action
store.dispatch({
  type: "DECREMENT"
})

// Decreasing count.. Dispatching an action
store.dispatch({
  type: "DECREMENT"
})

// Sets count.. Dispatching an action
store.dispatch({
  type: "SET",
  count: 101
})

// Unsubscribe from the store
unsubscribe()

// Reset Count
store.dispatch({
  type: "RESET"
})
