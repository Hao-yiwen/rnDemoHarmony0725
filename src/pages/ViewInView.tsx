import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  Dimensions,
} from 'react-native';

const Index: React.FC = () => {
  const innerRef = React.useRef(null);
  const outerRef = React.useRef(null);
  const handlePress = () => {
    innerRef.current.measureLayout(outerRef.current, (x, y, width, height) => {
      console.log('x:', x, 'y:', y, 'width:', width, 'height:', height);
    });
  };

  return (
    <View ref={outerRef} style={{flex: 1}}>
      <View ref={innerRef} style={{marginTop: 200, backgroundColor: 'yellow'}}>
        <Text>ViewInView</Text>
      </View>
      <Button title="点击获取相对位置" onPress={() => handlePress()} />
    </View>
  );
};

export default Index;
