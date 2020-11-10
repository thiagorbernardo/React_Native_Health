import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopBar = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#deb887',
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontWeight: '900',
    fontSize: 20
  },
});

export default TopBar;
