import { loadCurrentContent } from '../utils';

const initialEditorState = loadCurrentContent();

const content = (state = initialEditorState, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
     return action.content.content;

    default:
      return state
  }
}

export default content
