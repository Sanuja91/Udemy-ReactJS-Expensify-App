import { createStore } from "redux"

// createStore (( FUNCTION WITH PROPS state = {default values}))
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 2 }
    case "RESET":
      return { count: 0 }

    default:
      return state
  }
})

// Incrementing count.. Dispatching an action
store.dispatch({
  type: "INCREMENT"
})

// Reset Count
store.dispatch({
    type: "RESET"
  })

// Decreasing count.. Dispatching an action
store.dispatch({
  type: "DECREMENT"
})



console.log(store.getState())
