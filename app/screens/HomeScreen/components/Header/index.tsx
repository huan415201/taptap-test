import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do list</Text>
    </View>
  );
};

export default Header;
