/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * npx react-native start --port 8084 --reset-cache
 * npx react-native run-android --port 8084
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import TopBar from './src/components/TopBar';
import DrugsScreen from './src/screens/DrugsScreen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <TopBar title="Alarmes"></TopBar>
        <SafeAreaView style={styles.scrollView}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <DrugsScreen></DrugsScreen>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
