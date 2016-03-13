'use strict';
import React, {  Component,  PropTypes,  StyleSheet,  Text,  View,  Image,  Dimensions,  TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import BaseView from './BaseView'
import { logOut } from '../actions/loginActions'
import {actions} from '../actions/counterActions'
import {profileMenuClosed} from '../actions/floatingMenuActions'

class MainView extends Component {

  render() {
    return (
      <BaseView>
        <View>
          <Text>Main View</Text>
        </View>
      </BaseView>
    )
  }
}
export default connect()(MainView)