const content = (state = {}, action) => {
  switch (action.type) {
  	case 'LOAD_INITIAL_CONTENT': 
  		return action.pages;

    case 'SAVE_CONTENT':
    	console.log('SAVE_CONTENT - action: ', action);
     return state;

    case 'ADD_NEW_PAGE':
    	// const newState = Object.assign({}, state);
    	// newState[action.id] = 
     // return action.content.content;
     console.log('action: ', action);
     return state;

    default:
      return state
  }
}

export default content
