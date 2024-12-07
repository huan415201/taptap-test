import React, {memo, useState} from 'react';
import {Text, View} from 'react-native';
import {TodoProps} from '../../../../duck/reducers/app.type';
import {styles} from './styles';

type TodoItemProps = {
  data: TodoProps;
};

const TodoItem = ({data}: TodoItemProps) => {
  const [isEdit] = useState<boolean>(false);

  if (!isEdit) {
    return (
      <View style={styles.container}>
        <Text>a</Text>
      </View>
    );
  }
  return null;
};

export default memo(TodoItem);
