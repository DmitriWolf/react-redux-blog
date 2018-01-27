import { saveCurrentContent } from '../utils';

export const addContent = content => {
	const currentContent = content.content;
	saveCurrentContent(currentContent);

  return {
    type: 'ADD_CONTENT',
    content,
  };
}
