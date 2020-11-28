import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TopBar from './components/TopBar';
import HomeScreen from './screens/HomeScreen';
import {
  setStorageData,
  getStorageData,
  deleteStorageData,
} from './services/AsyncStorageController';
// import OnboardingScreen from './OnboardingScreen';

const App = () => {
  getStorageData('firstTimeUsingApp').then((isNewUser) => {
    console.log('Test:', isNewUser);
    if(isNewUser == null)
      setStorageData('firstTimeUsingApp', true);
  });
  deleteStorageData('firstTimeUsingApp')
  return (
    <>
      <StatusBar backgroundColor="#FAEFED" barStyle="dark-content" />
      <TopBar title="Alarmes"></TopBar>
      <SafeAreaView style={styles.scrollView}>
        {/* <OnboardingScreen></OnboardingScreen> */}
        <HomeScreen></HomeScreen>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default App;
