/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * npx react-native start --port 8084 --reset-cache
 * npx react-native run-android --port 8084
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import TopBar from './components/TopBar';
import DrugsScreen from './screens/DrugsScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { AppTheme, ReactPaperTheme } from './theme/App.theme';

const App = () => {
  return (
    <>
      <PaperProvider theme={ReactPaperTheme}>
        <StatusBar backgroundColor="#FAEFED" barStyle="dark-content"/>
        <TopBar title="Alarmes"></TopBar>
        <SafeAreaView style={styles.scrollView}>
          <LinearGradient
            colors={AppTheme.backgroundGradientHome}
            style={styles.scrollView}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <DrugsScreen></DrugsScreen>
            </ScrollView>
          </LinearGradient>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#FFFFFF',
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
