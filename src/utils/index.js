import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Cookies } from 'react-cookie';
var cookies = new Cookies();

const getEmptyPageContents = () => {
	const emptyEditorState = EditorState.createEmpty();
	return emptyEditorState.getCurrentContent();
}

const storePage = (id, rawContent) => {
	// this is called internally here only
	const cookieOptions = {
		path: id,
		maxAge: 5256000, // 2 months
	};
	cookies.set(id, rawContent, cookieOptions);
}

export const saveCurrentContent = (id, content) => {
  const rawContent = convertToRaw(content);
  const page = {
  	rawContent,
  	published: true,
  };
  storePage(id, page);
}

export const createAndSaveNewPage = () => {
	const id = Math.random().toString(36).substring(7);
	const emptyPageContents = getEmptyPageContents();
	const rawContent = convertToRaw(emptyPageContents);
	const page = {
		rawContent,
		published: true,
	};
  storePage(id, page);
  const pageObject = {};
  pageObject[id] = {
  	currentContents: emptyPageContents,
  	published: true,
  };
  return pageObject;
}

export const loadCurrentContent = (id = '3c3n5q') => {
	var cookieData = cookies.getAll();
	let initialEditorState;

	if(cookieData[id]) {
		return convertFromRaw(cookieData[id].currentContent);
	} else {
		initialEditorState = getEmptyPageContents();
	}
	return initialEditorState;
}


export const loadAllContent = () => {
	var cookieData = cookies.getAll();

	return Object.keys(cookieData).reduce((acc, pageId) => {
	  acc[pageId] = {
	  	currentContents: convertFromRaw(cookieData[pageId].rawContent),
	  	published: true,
	  };
		return acc;
	}, {});
}

export const contentIsPresent = (content) => {
    if(content && Object.keys(content).length > 0) {
      return true;
    }
    return false;
  }
