const quotes = (state = ["To be or not to be..."], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        action.quote,
      ]
    default:
      return state
  }
}

export default quotes
