import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';

const TopBar = (props: any) => {
  return (
    <View style={styles.container}>
      <IconButton icon="menu"></IconButton>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      <Image style={styles.avatar} source={require('../assets/img/avatar.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#FBF0EA',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    marginRight: 10,
    marginTop: 5,
  },
  title: {
    color: '#1A2D4E',
    fontFamily: "Roboto-Medium",
    fontSize: 20,
  },
});

export default TopBar;
