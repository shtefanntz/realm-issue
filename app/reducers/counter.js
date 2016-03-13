import * as types from '../actions/actionTypes';
import { handleActions } from 'redux-actions'

export default handleActions({
  [types.INCREMENT]: (state, { payload }) => state + payload,
  [types.DECREMENT]: (state, { payload }) => state - payload
}, 1)