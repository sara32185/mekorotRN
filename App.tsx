import React from 'react';
import { Provider } from 'react-redux'
import store from './app/redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from '@navigation/navigator/AppNavigator';
import '@translations/initi18next';
import AppTheme, { Colors } from '@styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => (
  <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppTheme>
          <AppNavigator />
        </AppTheme>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  </Provider>
);

export default App;
