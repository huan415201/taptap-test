import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '../constants';

export const SCREEN_KEYS = {
  Home: 'Home',
};

export const SCREEN_OPTIONS: Partial<{
  [key in keyof typeof SCREEN_KEYS]: NativeStackNavigationOptions;
}> = {
  Home: {
    headerTitle: 'To-do list',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: colors.white,
    },
    headerStyle: {
      backgroundColor: colors.yellow,
    },
    headerShadowVisible: false,
  },
};
