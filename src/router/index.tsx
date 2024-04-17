import React from 'react';
import {View, Text, Button, Modal, StatusBar} from 'react-native';

type RouterTypes = {
  visible: boolean;
  children: React.ReactNode;
  handleClose: () => void;
};

const Index: React.FC<RouterTypes> = ({visible, children, handleClose}) => {
  return (
    <Modal visible={visible}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'pink',
          marginTop: StatusBar.currentHeight,
        }}>
        <Button title="Close" onPress={handleClose} />
        {children}
      </View>
    </Modal>
  );
};

export default Index;
