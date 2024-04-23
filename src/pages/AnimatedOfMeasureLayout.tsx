import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  Dimensions,
} from 'react-native';

const Index: React.FC = () => {
  const targetViewRef = useRef<View>(null);
  const scrollViewRef = useRef(null);

  const scrollToView = () => {
    if (scrollViewRef.current && targetViewRef.current) {
      targetViewRef.current?.measureLayout(
        scrollViewRef.current,
        (left, top, width, height) => {
          scrollViewRef.current?.scrollTo({y: top, animated: true});
        },
        () => {
          console.error('measurement failed');
        },
      );
    }
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollViewRef} style={styles.scrollView}>
        {/* 添加一些占位内容 */}
        <View style={{height: 800, backgroundColor: 'red'}}>
          <Text>scrollview头部</Text>
        </View>
        {/* 这是我们想要滚动到的视图 */}
        <View ref={targetViewRef} style={styles.targetView}>
          <Text>这是目标位置</Text>
        </View>
        <View style={{height: 800, backgroundColor: 'orange'}}>
          <Text>scrollview尾部</Text>
        </View>
      </Animated.ScrollView>
      <View style={{marginBottom: 20}}>
        <Button title="滚动到目标位置" onPress={scrollToView} />
      </View>
    </View>
  );
};

Index.options = {
  topBar: {
    title: {
      text: 'Animated',
      color: 'white',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  targetView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginVertical: 20,
  },
});

export default Index;
