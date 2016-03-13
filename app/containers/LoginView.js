import React, {Component, ScrollView, View, TouchableHighlight, Text} from 'react-native';
import { login, secretRequested, logout, facebookLogin, LoginErrors } from '../actions/loginActions'
import { connect } from 'react-redux';
import BaseView from './BaseView'


 class LoginView extends Component {
  render(){
    var self = this;
    return (
      <BaseView>
        <View>
          <Text>Login</Text>
        </View>
      </BaseView>
    );
  }
}

export default connect()(LoginView)