import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import Alarm from '../components/Alarm';
import {Medicine, User} from '../models/User.model';
import * as Animatable from 'react-native-animatable';

export default function DrugScreen() {
  const urlBackend = 'https://backend-react-health.thiagorbernardo.vercel.app';

  const [isLoading, setLoading] = useState(true);
  const [medicine, setMedicine] = useState<Medicine[]>([]);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    fetch(`${urlBackend}/api/user?email=thiago@t.com`)
      .then((response) => response.json())
      .then((json) => setMedicine(json.content.medicines))
      .catch((error) => console.error(error))
      .finally(() => {
        // setMedicine(userData.medicines);
        setLoading(false);
      });
  }, []);

  const medsMock: Medicine[] = [
    {
      key: 1,
      name: 'Omeprazol',
      specs: '1x',
      hours: '08:00',
      description: 'Protetor Gástrico (Previne azia)',
    },
    {
      key: 2,
      name: 'Prednisona',
      specs: '1x',
      hours: '09:00',
      description: 'Prevenção de rejeição',
    },
    {
      key: 3,
      name: 'Bactrim',
      specs: '1x',
      hours: '08:00',
      description: 'Antibiótico, usado na prevenção de infecção',
    },
    {
      key: 4,
      name: 'Tacrolimos',
      specs: '1x',
      hours: '08:00',
      description: 'Imunossupressor, usado para prevenção de rejeição',
    },
    {
      key: 5,
      name: 'Omeprazol',
      specs: '1x',
      hours: '20:00',
      description: 'Protetor Gástrico (Previne azia)',
    },
    {
      key: 6,
      name: 'Bactrim',
      specs: '1x',
      hours: '20:00',
      description: 'Antibiótico, usado na prevenção de infecção',
    },
    {
      key: 7,
      name: 'Tacrolimos',
      specs: '1x',
      hours: '20:00',
      description: 'Imunossupressor, usado para prevenção de rejeição',
    },
  ];

  const user = {
    name: 'Thiago',
  };
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
