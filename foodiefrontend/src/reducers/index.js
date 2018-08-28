import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import todo from './todo'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  mainReducer
})
