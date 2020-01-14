/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  useBluetoothHeadsetDetection,
  getHeadset,
  addListener,
  removeListener,
} from 'react-native-bluetooth-headset-detect';

const HookComponent = () => {
  const device = useBluetoothHeadsetDetection();
  return (
    <View>
      <Text>Device detection with hook: {device}</Text>
    </View>
  );
};

const ListenerComponent = () => {
  const [headset, setHeadset] = useState(null);
  useEffect(() => {
    setHeadset(getHeadset());
    addListener(setHeadset);
    return () => {
      removeListener(setHeadset);
    };
  }, []);

  return (
    <View>
      <Text>Device detection with listener: {headset}</Text>
    </View>
  );
};

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <HookComponent />
      <ListenerComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
