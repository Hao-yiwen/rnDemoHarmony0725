import LottieView from 'lottie-react-native';
import React from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

const Index: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        <ScrollView style={{height: 500}}>
          <View style={{flexDirection: 'column', flexShrink: 0}}>
            <View style={{flexShrink: 0}}>
              {Array.from({length: 100}).map((_, i) => (
                <View style={{height: 100, backgroundColor: 'orange'}}>
                  <Text>item:{i}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <LottieView
        loop={true}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../assets/PinJump.json')}
      />
    </View>
  );
};

export default Index;
