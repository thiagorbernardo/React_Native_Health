import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import Alarm from '../components/Alarm';
import {DailyMedicine, Medicine} from '../models/User.model';
import * as Animatable from 'react-native-animatable';
import {ResponseModel} from '../models/Response.model';

export default function DrugScreen() {
  const urlBackend = 'https://backend-react-health.thiagorbernardo.vercel.app';

  const [isLoading, setLoading] = useState(true);
  const [user, setDailyMedicine] = useState<DailyMedicine>(null!);
  const [medicine, setMedicine] = useState<Medicine[]>([]);

  useEffect(() => {
    let today = moment().format('DD-MM-YYYY');
    console.log('Getting user medicines');
    fetch(
      `${urlBackend}/api/user/getMedication?email=thiago@t.com&date=${today}`,
    )
      .then((response) => response.json())
      .then((json: ResponseModel<DailyMedicine>) => {
        console.log(json)
        setDailyMedicine(json.content);
        setMedicine(json.content.medicines);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <LottieView
          source={require('../assets/lottie/loading-plane.json')}
          autoPlay
          resizeMode="contain"
          style={styles.lottieLoading}
        />
      ) : (
        <ScrollView>
          <Animatable.View
            animation="slideInDown"
            iterationCount={1}
            direction="alternate">
            <Text style={styles.helloTitle}>Olá, {user.name}!</Text>
            <Text style={styles.textTitle}>Aqui estão seus remédios</Text>
          </Animatable.View>
          {medicine.map((med, key) => {
            return <Alarm {...med}></Alarm>;
          })}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  helloTitle: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Bold',
    fontSize: 23,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textTitle: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  lottieLoading: {
    flex: 1,
  },
});
