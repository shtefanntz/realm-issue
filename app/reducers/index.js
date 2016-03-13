import { combineReducers } from 'redux';
import counter from './counter';
import initialConfig from '../actions/initialConfigActions'

export default combineReducers({
  counter,
  auth,
  initialConfig,
  floatingMenus
});