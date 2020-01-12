import React from 'react';
import {View, Text} from 'react-native';
import useBluetoothHeadsetDetection from './BluetoothHeadsetHook';

const TestComponent = () => {
  const device = useBluetoothHeadsetDetection();
  return (
    <View>
      <Text>Device: {device}</Text>
    </View>
  );
};

export default TestComponent;
