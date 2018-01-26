import { convertToRaw } from 'draft-js';
import { Cookies } from 'react-cookie';
var cookies = new Cookies();

export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote,
  };
}

export const addContent = content => {
	const currentContent = content.content;
  const rawContent = convertToRaw(currentContent);

	const cookieOptions = {
		path: '/',
		maxAge: 5256000, // 2 months
	};
	cookies.set('content', rawContent, cookieOptions);

  return {
    type: 'ADD_CONTENT',
    content,
  };
}
