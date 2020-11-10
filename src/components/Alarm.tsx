import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Medicine from '../models/Medicine.model';

export default function Alarm(med: Medicine) {
  return (
    <>
      <View style={styles.alarmView}>
        <View style={styles.rowItens}>
          <Image
            source={require('../assets/img/pill.png')}
            style={styles.tinyLogo}
          />
          <View style={styles.columnItens}>
            <View style={styles.titles}>
              <Text style={styles.alarmTitle}>{med.name}</Text>
              <Text style={styles.alarmSubTitle}>{med.specs}</Text>
            </View>
            <View style={styles.clock}>
              <Text style={styles.clockText}>{med.hours}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  rowItens: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  columnItens: {
    flexDirection: 'column',
  },
  alarmView: {
    backgroundColor: '#F9CFD4',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    borderWidth: 0.5,
    shadowOffset: {width: 10, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 7,
    padding: 10,
    margin: 20,
    height: 130,
  },
  titles: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 2,
  },
  alarmTitle: {
    fontFamily: 'SawtonCircular-Thin',
    fontWeight: '600',
    alignItems: 'center',
    fontSize: 22,
  },
  alarmSubTitle: {
    fontFamily: 'SawtonCircular-Thin',
    fontSize: 18,
    alignItems: 'center',
    margin: 4,
  },
  clock: {
    // paddingLeft: 10,
  },
  clockText: {
    fontFamily: 'OdinRounded-Thin',
    fontSize: 40,
  },
});
