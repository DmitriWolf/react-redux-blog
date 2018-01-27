import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Cookies } from 'react-cookie';
var cookies = new Cookies();

export const saveCurrentContent = (currentContent) => {
  const rawContent = convertToRaw(currentContent);

	const cookieOptions = {
		path: '/',
		maxAge: 5256000, // 2 months
	};
	cookies.set('content', rawContent, cookieOptions);
}

export const loadCurrentContent = () => {
	var cookieData = cookies.get('content');
	let initialEditorState;

	if(cookieData && cookieData.blocks) {
		initialEditorState = convertFromRaw(cookieData);
	} else {
		const emptyEditorState = EditorState.createEmpty();
		initialEditorState = emptyEditorState.getCurrentContent();
	}
	return initialEditorState;
}
