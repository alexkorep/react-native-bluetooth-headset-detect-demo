/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import useBluetoothHeadsetDetection from 'react-native-bluetooth-headset-detect';
// import useBluetoothHeadsetDetection from './BluetoothHeadsetHook';

import TestComponent from './TestComponent';

const App: () => React$Node = () => {
  const [visible, setVisible] = useState(false);
  const device = useBluetoothHeadsetDetection();
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Step One</Text>
      <Text>Device1: {device}</Text>
      {visible ? <TestComponent /> : null}

      <Button
        title="Toggle component"
        onPress={() => setVisible(vis => !vis)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default App;
