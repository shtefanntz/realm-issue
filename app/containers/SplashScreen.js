'use strict';
import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  NetInfo
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import {checkAuth, checkNetworkConnectivity, loadProfile } from '../actions/initialConfigActions'
import dbContext from '../persistence/dbContext'

class SplashScreen extends Component {
  constructor(props){
    super(props)
    debugger;
    Promise.all([
      props.checkNetworkConnectivity(),
      props.loadProfile() 
    ]).then(() => {
      var props = this.props;
      if(props.connectivity === null){
        alert('n-ai net...');
      }
      alert(dbContext.getProfile().id)
      // setTimeout(()=> {
        if (props.profile.profileVersion !== -1) {
          Actions.home();
        } else {
          Actions.login();
        }
      // }, 6000);
    })
  }

  render(){
    var { height, width } = Dimensions.get('window');
    return (
      <View style={{height, width, backgroundColor: 'green'}}>
        <Text>
          Splash!
        </Text>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  const { initialConfig } = state;

  // possible perf impact
  return {
    ... initialConfig.toJS()
  };
}

const mapDispatchToProps = dispatch => {
  return {
    checkNetworkConnectivity: () => dispatch(checkNetworkConnectivity()),
    loadProfile: () => dispatch(loadProfile()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);