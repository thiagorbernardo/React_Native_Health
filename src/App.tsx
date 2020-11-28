import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import TopBar from './components/TopBar';
import HomeScreen from './screens/HomeScreen';
// import OnboardingScreen from './OnboardingScreen';

const App = () => {
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
