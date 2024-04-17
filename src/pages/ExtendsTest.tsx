import React from 'react';
import {View, Text} from 'react-native';

export default class ExtendsTest extends React.Component {
  componentDidMount(): void {
    console.log('componentDidMount');
  }

  render() {
    return (
      <View>
        <Text>ExtendsTest</Text>
      </View>
    );
  }
}
