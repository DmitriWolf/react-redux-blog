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

export const saveCurrentContent = (id, content) => {
  const currentContent = convertToRaw(content);
  const page = {
  	currentContent,
  	published: true,
  };
  storePage(id, page);
	console.log('saveCurrentContent: ', id, currentContent);
}

export const createAndSaveNewPage = () => {
	const id = Math.random().toString(36).substring(7);
	const currentContent = convertToRaw(getEmptyPageContents());
	const page = {
		currentContent,
		published: true,
	};
  storePage(id, page);
  const pageObject = {};
  pageObject[id] = {
  	currentContent,
  	published: true,
  };
  return pageObject;
}

export const loadCurrentContent = (id = '3c3n5q') => {// existing: 

	var cookieData = cookies.getAll();
	console.log('cookieData: ', cookieData);
	console.log('');

	/* new desired state: 

	pages: {
		id: {
			currentContent / editorState,
			published: true,
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
	// console.log('loadAllContent - cookieData: ', cookieData);
	console.log('');


	let initialEditorState;

	if(cookieData) {
		// console.log('What is in cookieData by object: ');
		return Object.keys(cookieData).reduce((acc, pageId) => {
			// console.log('pageId: ', pageId);
			// console.log('cookieData[pageId]: ', cookieData[pageId]);
			acc[pageId] = convertFromRaw(cookieData[pageId].currentContent);
			return acc;
		}, {});

	} else {
		initialEditorState = getEmptyPageContents();
	}
	return initialEditorState;
}

export const contentIsPresent = (content) => {
    if(content && Object.keys(content).length > 0) {
      return true;
    }
    return false;
  }
