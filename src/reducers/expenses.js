// Expenses Reducer
const expensesReducerDefaultState = []

export default ( (
  state = expensesReducerDefaultState,
  action
) => {
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
})


