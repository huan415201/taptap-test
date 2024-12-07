import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const SCREEN_KEYS = {
  Home: 'Home',
};

export const SCREEN_OPTIONS: Partial<{
  [key in keyof typeof SCREEN_KEYS]: NativeStackNavigationOptions;
}> = {
  Home: {
    headerTitle: 'To-do list',
    headerTitleAlign: 'center',
  },
};
