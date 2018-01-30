const content = (state = {}, action) => {
  switch (action.type) {
  	case 'LOAD_INITIAL_CONTENT': 
  		return action.pages;

    case 'SAVE_CONTENT':
			console.log('SAVE_CONTENT - action: ', action);
			return state;

    case 'ADD_NEW_PAGE':
			const newState = Object.assign({}, state);
			const newPageId = Object.keys(action.pageObject)[0];
			newState[newPageId] = action.pageObject[newPageId];
			return newState;

    default:
      return state
  }
}

export default content
