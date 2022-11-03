import React from 'react';
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Platform, TouchableOpacity as TouchableComponent } from 'react-native';
import type { FullTheme } from 'react-native-elements';
import { ThemeProvider } from 'react-native-elements';

import { Colors } from '../colors';
import { AndroidFontFamily, FontSize, FontWeight, FontFamily } from '../fonts';

export const LayoutPadding = {
  horizontal: 24,
  scrollViewRemainRight: 15,
  androidBottom: 16,
};

const GlobalStyles = {
  content: (opts?: ViewStyle): ViewStyle => ({
    paddingHorizontal: LayoutPadding.horizontal,
    ...opts,
  }),
  coopHomeContent: (opts?: ViewStyle): ViewStyle => ({
    paddingHorizontal: 16,
    ...opts,
  }),
  padding: (opts?: ViewStyle): ViewStyle => ({
    padding: 16,
    ...opts,
  }),
  headerBar: (opts?: ViewStyle): ViewStyle => ({
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...opts,
  }),
  scrollViewContent: (opts?: ViewStyle): ViewStyle => ({
    flex: 1,
    paddingLeft: LayoutPadding.horizontal,
    paddingRight:
      LayoutPadding.horizontal - LayoutPadding.scrollViewRemainRight,
    ...opts,
  }),
  touchableIcon: (opts?: ViewStyle): ViewStyle => ({
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    ...opts,
  }),
  align: (opts?: ViewStyle): ViewStyle => ({
    justifyContent: 'center',
    ...opts,
  }),
  container: (opts?: ViewStyle): ViewStyle => ({
    flex: 1,
    backgroundColor: Colors.White,
    ...opts,
  }),
  image: (opts?: ImageStyle): ImageStyle => ({
    resizeMode: 'contain',
    ...opts,
  }),
  font: (opts?: TextStyle): TextStyle =>
    Platform.select({
      ios: {
        fontFamily: FontFamily.normal,
        fontSize: FontSize.Regular,
        color: Colors.Black,
        ...opts,
      },
      android: {
        fontSize: FontSize.Regular,
        color: Colors.Black,
        ...opts,
        ...AndroidFontFamily[
        (opts?.fontWeight || FontWeight.Regular) as FontWeight
        ],
      },
    }) as TextStyle,
  icon: (style?: ImageStyle) => ({
    width: 24,
    height: 24,
    paddingHorizontal: 8,
    ...style,
  }),
  shadow: {
    shadowColor: Colors.Secondary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,

    elevation: 1,
  },
  upperShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.05,
    shadowRadius: 32,

    elevation: 3,
  },
  flexOne: {
    flex: 1,
  },

};

type Theme = Partial<FullTheme>;

const theme: Theme = {
  Text: {
    style: GlobalStyles.font(),
    allowFontScaling: true,
  },
  Icon: {
    type: 'feather',
  },
  Input: {
    inputStyle: GlobalStyles.font({
      fontWeight: FontWeight.Medium,
      color: Colors.Black,
    }),
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
    placeholderTextColor: Colors.Secondary,
  },
  ListItem: {
    containerStyle: {
      marginHorizontal: 0,
      paddingHorizontal: 0,
      borderRadius: 6,
      borderColor: Colors.SeparatorColor,
    },
  },
  Image: {
    placeholderStyle: { backgroundColor: Colors.White },
    style: { resizeMode: 'cover' },
  },
  Button: {
    TouchableComponent,
    buttonStyle: {
      height: 48,
      borderRadius: 6,
      paddingHorizontal: 18,
      shadowOpacity: 0,
    },
    titleStyle: GlobalStyles.font({
      color: Colors.White,
      fontSize: FontSize.Button,
      fontWeight: FontWeight.SemiBold,
    }),
    disabledStyle: {
      backgroundColor: Colors.Secondary + '80',
    },
    disabledTitleStyle: {
      color: Colors.White,
    },
  }
};

const AppTheme: React.FC = ({ children }) => (
  <ThemeProvider {...{ theme, children }} />
);

export { GlobalStyles, AppTheme };
