import { combineReducers } from 'redux';
import content from './content';

const todoApp = combineReducers({
  content,
});

export default todoApp;
