import { Cookies } from 'react-cookie';
import {EditorState, convertFromRaw} from 'draft-js';
var cookies = new Cookies();
var cookieData = cookies.get('content');

console.log('cookieData: ', cookieData);
let initialEditorState;
if(cookieData && cookieData.blocks) {
	initialEditorState = convertFromRaw(cookieData);
} else {
	const emptyEditorState = EditorState.createEmpty();
	initialEditorState = emptyEditorState.getCurrentContent();
}


const content = (state = initialEditorState, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
     return action.content.content;

    default:
      return state
  }
}

export default content
