import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { navigateRef } from '../utils';

import MainScreen from './Main';

const App = () => {
  const hideSplash = useCallback(() => {
    RNBootSplash.hide({ fade: false });
  }, []);

  return (
    <NavigationContainer ref={navigateRef} onReady={hideSplash}>
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
