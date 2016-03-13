'use strict';
import {NetInfo} from 'react-native';
import { createAction, handleActions } from 'redux-actions';
import {Record} from 'immutable';
import DbContext from '../persistence/dbContext'
import * as types from './actionTypes';

const networkConfirmed = createAction(types.NETWORK_CONNECTIVITY_CONFIRMED)
const noNetworkConnectivity = createAction(types.NO_NETWORK_CONNECTIVITY)
export const profileReceived = createAction(types.PROFILE_RECEIVED)
const authDeclined = createAction(types.AUTH_DECLINED)

export const checkNetworkConnectivity = () =>{
  return dispatch => {
    return NetInfo.fetch()
      .then(reach => {
        if(['wifi', 'cell', 'mobile'].indexOf(reach.toLowerCase()) != -1){
          dispatch(networkConfirmed(reach.toLowerCase()))
        } else {
          dispatch(noNetworkConnectivity())
        }
      })
      .catch(() => {debugger});
  }
};

export const loadProfile = () => {
  return (dispatch, getState) => {
    const currentProfile = getState().initialConfig.get('profile');
    return DbContext.getProfile()
      .then((storedProfile) => {
        if(!!storedProfile && storedProfile.profileVersion > currentProfile.get('profileVersion')){
          return dispatch(profileReceived(storedProfile))
        }
      })
      .catch(() => {debugger});
  }
};

export default handleActions({
  [types.NETWORK_CONNECTIVITY_CONFIRMED]:(state, {payload}) => state.set('connectivity', payload),
  [types.NO_NETWORK_CONNECTIVITY] : (state) => state.set('connectivity', null),
  [types.PROFILE_RECEIVED]: (state, {payload}) => state.set('profile', new Record(payload)())
}, new Record({
  connectivity: null,
  profile: new Record({
    profileVersion: -1,
    firstName: '',
    lastName: '',
    profilePicBase64: ''
  })()
})())
