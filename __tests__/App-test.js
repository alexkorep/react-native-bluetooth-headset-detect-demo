/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-bluetooth-headset-detect', () =>
  require('../__mock__/react-native-bluetooth-headset-detect'),
);

it('renders correctly', () => {
  renderer.create(<App />);
});
