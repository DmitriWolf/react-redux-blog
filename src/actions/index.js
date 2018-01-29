import { 
	contentIsPresent,
	createAndSaveNewPage,
	loadAllContent, 
	saveCurrentContent,   
} from '../utils';

export const loadInitialContent = () => {
	console.log('');
	console.log('loadInitialContent');
	let allContent = loadAllContent();
	console.log('allContent: ', allContent);
	if(!contentIsPresent(allContent)) {
		allContent = createAndSaveNewPage();
	}
  
  return {
    type: 'LOAD_INITIAL_CONTENT',
    content: allContent,
  };
}

export const saveContent = (pageId, content) => {
	saveCurrentContent(pageId, content);
	const page = {};
	page[pageId] = content;

  return {
    type: 'SAVE_CONTENT',
    page,
  };
}

export const addNewPage = () => {
	console.log('addNewPage');
	const pageObject = createAndSaveNewPage();
	console.log('addNewPage - pageObject: ', pageObject);

  return {
    type: 'ADD_NEW_PAGE',
    pageObject,
  };
}
