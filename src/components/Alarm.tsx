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
import {Medicine} from '../models/User.model';
import {AppTheme} from '../theme/App.theme';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import { LocalNotification } from '../services/LocalPushController';

export default function Alarm(med: Medicine) {
  const [alarmPressed, setAlarmPressed] = useState(false);
  const [sentAlarmPressed, setSentAlarmPressed] = useState(false);
  const [shouldBePlaying, setShouldBePlaying] = useState(false);

  useEffect(() => {
    if (shouldBePlaying === true) {
      setTimeout(() => {
        setShouldBePlaying(false);
      }, 500);
    }
  }, [shouldBePlaying]);
  return (
    <>
      <Animatable.View
        animation="slideInDown"
        iterationCount={1}
        direction="alternate">
        <View style={alarmPressed ? styles.alarmViewPressed : styles.alarmView}>
          <TouchableWithoutFeedback
            onPress={() => setAlarmPressed(!alarmPressed)}>
            <View>
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
                    {/* <Badge visible></Badge> //TODO: To see witch pills remains */}
                  </View>
                  <View style={{marginLeft: 6}}>
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
                <>
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.alarmSubTitle}>{med.description}</Text>
                  </View>
                  {sentAlarmPressed && shouldBePlaying ? (
                    <LottieView
                      source={require('../assets/lottie/star.json')}
                      autoPlay
                      resizeMode="cover"
                      style={styles.lottieView}
                    />
                  ) : (
                    <></>
                  )}
                  <View
                    style={{alignItems: 'flex-end', flexDirection: 'column'}}>
                    <AwesomeButton
                      backgroundColor={
                        sentAlarmPressed
                          ? AppTheme.buttonBackgroundDisabledSetAlarm
                          : AppTheme.buttonBackgroundSetAlarm
                      }
                      backgroundActive={
                        AppTheme.buttonBackgroundPressedSetAlarm
                      }
                      textColor={AppTheme.buttonTextSetAlarm}
                      borderRadius={30}
                      disabled={sentAlarmPressed}
                      onPress={() => {
                        setSentAlarmPressed(!sentAlarmPressed);
                        setShouldBePlaying(true);
                        // LocalNotification(); //TODO:Use this to send notify...
                      }}>
                      Tomei o Remédio
                    </AwesomeButton>
                  </View>
                </>
              ) : (
                <></>
              )}
            </View>
          </TouchableWithoutFeedback>
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
    backgroundColor: AppTheme.alarmCardColors,
    borderRadius: 30,
    padding: 10,
    margin: 18,
    height: 120,
    elevation: 12,
  },
  alarmViewPressed: {
    backgroundColor: AppTheme.alarmCardColors,
    borderRadius: 30,
    padding: 10,
    margin: 20,
    height: 230,
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
  clockText: {
    fontFamily: 'OdinRounded-Thin',
    color: AppTheme.colorPrimary,
    fontSize: 40,
  },
  lottieView: {
    width: 300,
    height: 200,
    position: 'absolute',
    alignSelf: 'center',
    top: 1,
  },
});
