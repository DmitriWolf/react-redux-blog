const content = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
    	console.log('reducer - action: ', action);
    	const newState = state;
    	newState[action.content.id] = action.content.content;
      return newState;

    default:
      return state
  }
}

export default content
