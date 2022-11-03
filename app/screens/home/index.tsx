import React from 'react';
import { View } from 'react-native';
import type { ScreenComponent } from '@navigation/utils';

import { registerScreen } from '@navigation/utils';
import Tabs from '@components/Tabs';
import { GlobalStyles } from '@styles';

const Name = 'HomeScreen';

export type HomeScreenParam = {
  [Name]: Record<string, unknown>;
};

const HomeScreen: ScreenComponent<HomeScreenParam, 'HomeScreen'> = () =>
  <View style={GlobalStyles.container()} >
    <Tabs />
  </View>

export default registerScreen<HomeScreenParam, 'HomeScreen'>(
  'HomeScreen',
  HomeScreen,
);
