import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Alarm from '../components/Alarm';
import Medicine from '../models/Medicine.model';

export default function DrugScreen() {
  const med: Medicine = {
    name: 'Ibuprofeno',
    specs: '200mg',
    hours: '11:00',
  };
  const med2: Medicine = {
    name: 'Dipirona',
    specs: '100mg',
    hours: '14:00',
  };
  const user = {
    name: 'Thiago',
  };
  return (
    <>
      <ScrollView>
        <View>
          <Text style={styles.helloTitle}>Olá {user.name}!</Text>
          <Text style={styles.textTitle}>Aqui estão seus remédios</Text>
        </View>
        <Alarm {...med}></Alarm>
        <Alarm {...med2}></Alarm>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  helloTitle: {
    color: '#1A2D4E',
    fontFamily: "Roboto-Bold",
    fontSize: 23,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textTitle: {
    color: '#1A2D4E',
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
