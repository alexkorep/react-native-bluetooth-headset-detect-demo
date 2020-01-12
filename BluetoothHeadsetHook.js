import {NativeEventEmitter, NativeModules} from 'react-native';
import {useEffect, useState} from 'react';

const BluetoothHeadsetDetectModule = NativeModules.RNBluetoothHeadsetDetect;
const bluetoothHeadsetDetectEmitter = new NativeEventEmitter(
  BluetoothHeadsetDetectModule,
);

const useBluetoothHeadsetDetection = () => {
  const [headset, setHeadset] = useState(null);
  const listener = ({devices}) => {
    console.log('call listener with', devices);
    if (devices.length) {
      setHeadset(devices[0]);
    } else {
      setHeadset(null);
    }
  };

  useEffect(() => {
    console.log('add listener');
    bluetoothHeadsetDetectEmitter.addListener('onChange', listener);
    return () => {
      console.log('remove listener');
      bluetoothHeadsetDetectEmitter.removeListener('onChange', listener);
    };
  }, []);

  return headset;
};

export default useBluetoothHeadsetDetection;
