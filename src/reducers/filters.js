// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
}

export default (state = filtersReducerDefaultState, action) => {
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
