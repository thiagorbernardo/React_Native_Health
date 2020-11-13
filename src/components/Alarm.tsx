import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, IconButton} from 'react-native-paper';
import Medicine from '../models/Medicine.model';
import {AppTheme} from '../theme/App.theme';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

export default function Alarm(med: Medicine) {
  const [alarmPressed, setAlarmPressed] = useState(false);
  const [sentAlarmPressed, setSentAlarmPressed] = useState(false);

  return (
    <>
      <Animatable.View
        animation="slideInDown"
        iterationCount={1}
        direction="alternate">
        <View>
          <LinearGradient
            start={{x: 0.3, y: 0.1}}
            end={{x: 1, y: 1}}
            colors={AppTheme.alarmCardColors}
            style={alarmPressed ? styles.alarmViewPressed : styles.alarmView}>
            <TouchableWithoutFeedback
              onPress={() => setAlarmPressed(!alarmPressed)}>
              <View style={{alignItems: 'flex-end'}}>
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
                        color={AppTheme.colorPrimary}
                        icon="chevron-down"></IconButton>
                    ) : (
                      <IconButton
                        size={40}
                        color={AppTheme.colorPrimary}
                        icon="chevron-right"></IconButton>
                    )}
                  </View>
                </View>
                {alarmPressed ? (
                  <Button
                    icon="send"
                    mode="text"
                    color={AppTheme.colorPrimary}
                    style={styles.sentButton}
                    disabled={sentAlarmPressed}
                    onPress={() => setSentAlarmPressed(!sentAlarmPressed)}>
                    Tomei o Remédio
                  </Button>
                ) : (
                  <></>
                )}
              </View>
            </TouchableWithoutFeedback>
          </LinearGradient>
        </View>
      </Animatable.View>
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
    margin: 18,
    height: 120,
    elevation: 12,
  },
  alarmViewPressed: {
    borderRadius: 30,
    padding: 10,
    margin: 20,
    height: 300,
    elevation: 12,
    shadowRadius: 30,
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
    color: AppTheme.colorPrimary,
    fontFamily: 'Roboto-Medium',
    fontWeight: '600',
    alignItems: 'center',
    fontSize: 22,
  },
  alarmSubTitle: {
    color: AppTheme.colorPrimary,
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
    color: AppTheme.colorPrimary,
    fontSize: 40,
  },
  sentButton: {
    justifyContent: 'space-between',
    position: 'relative',
    // top: 140,
  },
});
