const content = (state = {}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
  	case 'LOAD_INITIAL_CONTENT': 
  		return action.pages;

    case 'SAVE_CONTENT':
      const pageId = Object.keys(action.page)[0];
      newState[pageId] = action.page[pageId];
      return newState;

    case 'ADD_NEW_PAGE':
			const newPageId = Object.keys(action.pageObject)[0];
			newState[newPageId] = action.pageObject[newPageId];
			return newState;

    default:
      return state
  }
}

export default content
