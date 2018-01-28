import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Cookies } from 'react-cookie';
var cookies = new Cookies();

const getEmptyPageContents = () => {
	const emptyEditorState = EditorState.createEmpty();
	return emptyEditorState.getCurrentContent();
}

const storePage = (id, currentContent) => {
	const cookieOptions = {
		path: id,
		maxAge: 5256000, // 2 months
	};
	cookies.set(id, currentContent, cookieOptions);
	console.log('storePage: ', id, currentContent);
}

export const saveCurrentContent = (content) => {
  const id = content.id;
  const currentContent = convertToRaw(content.content);
  const page = {
  	currentContent,
  	home: true,
  };
  storePage(id, page);
	console.log('saveCurrentContent: ', id, currentContent);
}

export const addNewPage = () => {
	const id = Math.random().toString(36).substring(7);
	const currentContent = getEmptyPageContents();
  storePage(id, currentContent);
  return id;
}

export const loadCurrentContent = (id = 'abc123') => {// existing: 

	var cookieData = cookies.getAll();
	console.log('cookieData: ', cookieData);
	console.log('');

	/* new desired state: 

	pages: {
		id: {
			editorState,
			status: draft / published,
			includeInMenu: true,
		},
		...
	},
	*/

	let initialEditorState;

	if(cookieData[id]) {
		return convertFromRaw(cookieData[id].currentContent);
	} else {
		initialEditorState = getEmptyPageContents();
	}
	return initialEditorState;
}


export const loadAllContent = () => {// existing: 

	var cookieData = cookies.getAll();
	console.log('cookieData: ', cookieData);
	console.log('');

	/* new desired state: 

	pages: {
		id: {
			editorState,
			status: draft / published,
			includeInMenu: true,
		},
		...
	},
	*/

	let initialEditorState;

	if(cookieData && cookieData.blocks) {
		console.log('What is in cookieData by object: ');
		Object.keys(cookieData).map(p => {
			console.log(p, ': ', cookieData[p]);
			return cookieData[p];
		});

		initialEditorState = convertFromRaw(cookieData);
	} else {
		initialEditorState = getEmptyPageContents();
	}
	return initialEditorState;
}
