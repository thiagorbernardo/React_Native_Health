import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';
import Medicine from '../models/Medicine.model';

const alarmCardColors = [
  '#f2e0dc',
  '#f2e0dc',
  '#f2e0dc',
  '#f2e0dc',
  '#f2e0dc',
  '#f0d5d1',
  '#f0d5d1',
  '#f0d5d1',
  '#f0d5d1',
  '#f0d5d1',
  '#e6c8c3',
  '#e6c8c3',
  '#e6c8c3',
  '#e6c8c3',
  '#e8c6c1',
  '#e8c6c1',
  '#ebc9c3',
  '#ebc9c3',
];

export default function Alarm(med: Medicine) {
  const [alarmPressed, setAlarmPressed] = useState(false);

  return (
    <>
      <LinearGradient
        start={{
          x: 0.3,
          y: 0.1,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        colors={alarmCardColors}
        style={styles.alarmView}>
        <TouchableWithoutFeedback
          onPress={() => {
            setAlarmPressed(!alarmPressed);
            //TODO:Add height extended in view
          }}>
          <View style={styles.rowItens}>
            <View style={styles.imgColumn}>
              <Image
                source={require('../assets/img/pill.png')}
                style={styles.tinyLogo}
              />
            </View>
            <View style={styles.columnItens}>
              <View style={styles.titles}>
                <Text style={styles.alarmTitle}>{med.name}</Text>
                <Text style={styles.alarmSubTitle}>{med.specs}</Text>
              </View>
              <View style={styles.clock}>
                <Text style={styles.clockText}>{med.hours}</Text>
              </View>
            </View>
            <View style={styles.icon}>
              {alarmPressed ? (
                <IconButton
                  size={40}
                  color="#1A2D4E"
                  icon="chevron-down"></IconButton>
              ) : (
                <IconButton
                  size={40}
                  color="#1A2D4E"
                  icon="chevron-right"></IconButton>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 10,
  },
  icon: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  alarmView: {
    borderRadius: 30,
    padding: 10,
    margin: 20,
    height: 120,
    elevation: 12,
  },
  rowItens: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imgColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 8,
  },
  columnItens: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titles: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 2,
    marginLeft: 6,
  },
  alarmTitle: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Medium',
    fontWeight: '600',
    alignItems: 'center',
    fontSize: 22,
  },
  alarmSubTitle: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    alignItems: 'center',
    margin: 4,
  },
  clock: {
    marginLeft: 6,
  },
  clockText: {
    fontFamily: 'OdinRounded-Thin',
    color: '#1A2D4E',
    fontSize: 40,
  },
});
