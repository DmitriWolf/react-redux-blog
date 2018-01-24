import { combineReducers } from 'redux'
import quotes from './quotes'

const todoApp = combineReducers({
  quotes,
})

export default todoApp
