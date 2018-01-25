import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
var cookies = new Cookies();

export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote,
  };
}

export const addContent = content => {
	const cookieOptions = {
		path: '/',
		maxAge: 5256000, // 2 months
	};

	cookies.set('content', content.content, cookieOptions);

  return {
    type: 'ADD_CONTENT',
    content,
  };
}
