import React from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {colors} from '../../constants';
import {useAppSelector} from '../../duck/hooks';
import {TodoItem} from './components';
import {styles} from './styles';

const HomeScreen = () => {
  const todos = useAppSelector(state => state.app.todos);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.yellow} barStyle="light-content" />
      <FlatList
        data={todos}
        renderItem={({item}) => <TodoItem data={item} />}
      />
    </View>
  );
};

export default HomeScreen;
