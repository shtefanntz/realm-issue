/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  BackAndroid
} from 'react-native';
import App from './app/app';
import {Actions} from 'react-native-router-flux'

BackAndroid.addEventListener('hardwareBackPress', () => {
  return Actions.pop();
});

AppRegistry.registerComponent('NetWash', () => App);
