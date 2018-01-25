const content = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
     return action.content.content;

    default:
      return state
  }
}

export default content
