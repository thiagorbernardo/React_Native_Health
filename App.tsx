/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * npx react-native start --port 8084 --reset-cache
 * npx react-native run-android --port 8084
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageRequireSource,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import TopBar from './src/components/TopBar';
import DrugsScreen from './src/screens/DrugsScreen';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TopBar title="Tela de Remédios"></TopBar>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        </ScrollView>
        <DrugsScreen></DrugsScreen>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0ffff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
