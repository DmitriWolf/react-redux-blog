import { combineReducers } from 'redux';
import quotes from './quotes';
import content from './content';

const todoApp = combineReducers({
  quotes,
  content,
});

export default todoApp;
