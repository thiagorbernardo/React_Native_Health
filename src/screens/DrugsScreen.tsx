import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Alarm from '../components/Alarm'
import Medicine from '../models/Medicine.model';

export default function DrugScreen() {
  const med: Medicine = {
    name: "Ibuprofeno",
    specs: "200mg",
    hours: "11:00"
  }
  return (
    <>
      <ScrollView>
          <Alarm {...med}></Alarm>
      </ScrollView>
    </>
  );
}
