import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Alarm from '../components/Alarm';
import Medicine from '../models/Medicine.model';
import * as Animatable from 'react-native-animatable';

export default function DrugScreen() {
  const medsMock: Medicine[] = [
    {
      name: 'Ibuprofeno',
      specs: '200mg',
      hours: '11:00',
    },
    {
      name: 'Dipirona',
      specs: '100mg',
      hours: '14:00',
    },
    {
      name: 'Dipirona',
      specs: '100mg',
      hours: '14:00',
    },
  ];

  // const [medComponents, setMedComponents] = useState([]);

  // useEffect(() => {
  //   setMedComponents(medsMock.map((med) => <Alarm {...med}></Alarm>))
  // }, []);

  const user = {
    name: 'Thiago',
  };
  return (
    <>
      <ScrollView>
        <Animatable.View
          animation="slideInDown"
          iterationCount={1}
          direction="alternate">
          <Text style={styles.helloTitle}>Olá {user.name}!</Text>
          <Text style={styles.textTitle}>Aqui estão seus remédios</Text>
        </Animatable.View>
        <Alarm {...medsMock[0]}></Alarm>
        <Alarm {...medsMock[1]}></Alarm>
        <Alarm {...medsMock[2]}></Alarm>
      </ScrollView>
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
});
