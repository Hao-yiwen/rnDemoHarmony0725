import React from 'react';
import {View, Text, Button, Modal, StatusBar, Dimensions} from 'react-native';

type RouterTypes = {
  visible: boolean;
  children: React.ReactNode;
  handleClose: () => void;
};

const Index: React.FC<RouterTypes> = ({visible, children, handleClose}) => {
  return (
    <Modal visible={visible}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
      <View style={{width: Dimensions.get('screen').width}}>
        <Button title="Close" onPress={handleClose} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          marginTop: StatusBar.currentHeight + 30,
        }}>
        <View style={{flex: 1}}>{children}</View>
      </View>
    </Modal>
  );
};

export default Index;
