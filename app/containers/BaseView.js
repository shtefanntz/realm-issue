import React, {Component, View, Text, Dimensions, StyleSheet} from 'react-native';

export default class BaseView extends Component {
  render(){
    return (
      <View>
        <Text>Base?</Text>
        {this.props.children}
      </View>
    );
  }
}