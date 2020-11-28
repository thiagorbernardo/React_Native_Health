/* This file will handle screen navigations */
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {AppTheme} from '../theme/App.theme';
import DrugsScreen from './DrugsScreen';

export default function HomeScreen() {
  return (
    <>
      <LinearGradient
        colors={AppTheme.backgroundGradientHome}
        style={styles.scrollView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
        <DrugsScreen></DrugsScreen>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
