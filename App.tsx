import React, {useEffect, useState} from 'react';
import {View, Text, Button, Modal, Animated} from 'react-native';
import AnimetedOfMeasureLayout from './src/pages/AnimatedOfMeasureLayout';
import Router from './src/router';
import AnimatedTranslate from './src/pages/AnimatedTranslate';
import FlatlistInScrollview from './src/pages/FlatlistInScrollview';
import FlatListStuckAndStopped from './src/pages/FlatListStuckAndStopped';
import LayoutAnimation from './src/pages/LayoutAnimation';
import ModalOverModal from './src/pages/ModalOverModal';
import StickyHeaderIndices from './src/pages/StickyHeaderIndices';
import SectionListRefInvlid from './src/pages/SectionListRefInvlid';
import TabScrollview from './src/pages/TabScrollview';
import TextInView from './src/pages/TextInView';
import ModalTabView from './src/pages/ModalTabView';
import ExtendsTwo from './src/pages/EntendsTwo';

const Index = () => {
  const [animatedOfMeasureLayoutVisible, setAnimatedOfMeasureLayoutVisible] =
    useState(false);
  const [animatedTranslate, setAnimatedTranslate] = useState(false);
  const [flatListStuckAndStopped, setFlatListStuckAndStopped] = useState(false);
  const [layoutAnimationVisible, setLayoutAnimationVisible] = useState(false);
  const [modalOverModal, setModalOverModal] = useState(false);
  const [stickyHeaderIndices, setStickyHeaderIndices] = useState(false);
  const [FlatlistInScrollviewVisible, setFlatlistInScrollviewVisible] =
    useState(false);
  const [SectionListRefInvlidVisible, setSectionListRefInvlidVisible] =
    useState(false);
  const [TabScrollviewVisible, setTabScrollviewVisible] = useState(false);
  const [TextInViewVisible, setTextInViewVisible] = useState(false);
  const [modalTabView, setModalTabView] = useState(false);
  const [extendsModalVisible, setExtendsModalVisible] = useState(false);

  useEffect(() => {
    let data = new Date('2021/09/01');
    console.log(data);
    let data1 = new Date('2021-09-01');
    console.log(data1);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Button
          title="AnimetedOfMeasureLayout"
          onPress={() => setAnimatedOfMeasureLayoutVisible(true)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="AnimatedTranslate"
          onPress={() => setAnimatedTranslate(true)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="FlatListStuckAndStopped"
          onPress={() => setFlatListStuckAndStopped(true)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="LayoutAnimation"
          onPress={() => setLayoutAnimationVisible(true)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="ModalOverModal"
          onPress={() => setModalOverModal(true)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="StickyHeaderIndices"
          onPress={() => setStickyHeaderIndices(true)}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="SectionListRefInvlid"
          onPress={() => {
            setSectionListRefInvlidVisible(true);
          }}></Button>
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="TabScrollview"
          onPress={() => {
            setTabScrollviewVisible(true);
          }}></Button>
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="TextInView"
          onPress={() => {
            setTextInViewVisible(true);
          }}></Button>
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="ModalTabView"
          onPress={() => {
            setModalTabView(true);
          }}></Button>
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="ExtendsTwoTest"
          onPress={() => {
            setExtendsModalVisible(true);
          }}></Button>
      </View>

      {/* @description router component */}
      <Router
        visible={animatedOfMeasureLayoutVisible}
        handleClose={() => setAnimatedOfMeasureLayoutVisible(false)}>
        <AnimetedOfMeasureLayout />
      </Router>
      <Router
        visible={animatedTranslate}
        handleClose={() => {
          setAnimatedTranslate(false);
        }}>
        <AnimatedTranslate />
      </Router>
      <Router
        visible={flatListStuckAndStopped}
        handleClose={() => setFlatListStuckAndStopped(false)}>
        <FlatListStuckAndStopped />
      </Router>
      <Router
        visible={layoutAnimationVisible}
        handleClose={() => {
          setLayoutAnimationVisible(false);
        }}>
        <LayoutAnimation />
      </Router>

      <Router
        visible={modalOverModal}
        handleClose={() => {
          setModalOverModal(false);
        }}>
        <ModalOverModal />
      </Router>
      <Router
        visible={stickyHeaderIndices}
        handleClose={() => {
          setStickyHeaderIndices(false);
        }}>
        <StickyHeaderIndices />
      </Router>
      <Router
        visible={FlatlistInScrollviewVisible}
        handleClose={() => {
          setFlatlistInScrollviewVisible(false);
        }}>
        <FlatlistInScrollview />
      </Router>
      <Router
        visible={SectionListRefInvlidVisible}
        handleClose={() => {
          setSectionListRefInvlidVisible(false);
        }}>
        <SectionListRefInvlid />
      </Router>
      <Router
        visible={TabScrollviewVisible}
        handleClose={() => {
          setTabScrollviewVisible(false);
        }}>
        <TabScrollview />
      </Router>
      <Router
        visible={TextInViewVisible}
        handleClose={() => {
          setTextInViewVisible(false);
        }}>
        <TextInView />
      </Router>
      <Router visible={modalTabView} handleClose={() => setModalTabView(false)}>
        <ModalTabView />
      </Router>
      <Router
        visible={extendsModalVisible}
        handleClose={() => {
          setExtendsModalVisible(false);
        }}>
        <ExtendsTwo />
      </Router>
    </View>
  );
};

export default Index;
