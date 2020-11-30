import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Alarm from '../components/Alarm';
import Medicine from '../models/Medicine.model';
import * as Animatable from 'react-native-animatable';

export default function DrugScreen() {
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
      <ScrollView>
        <Animatable.View
          animation="slideInDown"
          iterationCount={1}
          direction="alternate">
          <Text style={styles.helloTitle}>Olá, {user.name}!</Text>
          <Text style={styles.textTitle}>Aqui estão seus remédios</Text>
        </Animatable.View>
        {medsMock.map((med, key) => {
          return <Alarm {...med}></Alarm>;
        })}
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
