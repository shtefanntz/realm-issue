import React, { Component, Navigator, AsyncStorage } from 'react-native';
import { Provider, connect } from 'react-redux';

import configureStore from './store/configureStore';

import LoginView from './containers/LoginView';
import MainView from './containers/MainView';
import SplashScreen from './containers/SplashScreen';

import  {Route, Schema, Router} from 'react-native-router-flux'
const Router2 = connect()(Router)

const store = configureStore();



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router2 hideNavBar={true} name="root">
          <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>

          <Route name="login" component={LoginView} title="Login" type={'reset'}/>
          <Route name="home" component={MainView} title="Home" type={'reset'} />
          <Route name="splash" component={SplashScreen} title="Splash!" initial={true}/>
        </Router2>
      </Provider>
    )
  }
}