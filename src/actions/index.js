import { 
	contentIsPresent,
	createAndSaveNewPage,
	loadAllContent, 
	saveCurrentContent,   
} from '../utils';

export const loadInitialContent = () => {
	const pages = contentIsPresent(loadAllContent()) ? loadAllContent() : createAndSaveNewPage();

  return {
    type: 'LOAD_INITIAL_CONTENT',
    pages,
  };
}

export const saveContent = (content) => {
	saveCurrentContent(content.id, content.content);
	const page = {};

  page[content.id] = {
  	currentContents: content.content,
  	published: true,
  };

  return {
    type: 'SAVE_CONTENT',
    page,
  };
}

export const addNewPage = () => {
	const pageObject = createAndSaveNewPage();

  return {
    type: 'ADD_NEW_PAGE',
    pageObject,
  };
}
