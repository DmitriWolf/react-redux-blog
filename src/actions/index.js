import { saveCurrentContent } from '../utils';

export const addContent = content => {
	saveCurrentContent(content);

  return {
    type: 'ADD_CONTENT',
    content,
  };
}
