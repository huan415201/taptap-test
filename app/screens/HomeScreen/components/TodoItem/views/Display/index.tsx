import dayjs from 'dayjs';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../../../assets';
import {Checkbox} from '../../../../../../components';
import {TodoProps} from '../../../../../../duck/reducers/app.type';
import {getRelativeTime} from '../../../../../../utils';
import {getPriorityColor, styles} from './styles';

type TodoItemDisplayProps = {
  data: TodoProps;
  toggleDone: (item: TodoProps) => void;
  onEdit: (id: string) => void;
};

const TodoItemDisplay = ({data, toggleDone, onEdit}: TodoItemDisplayProps) => {
  return (
    <View style={styles.container}>
      <Checkbox
        isChecked={data.isDone}
        onPress={() => toggleDone(data)}
        style={styles.checkbox}
      />
      <View style={styles.infoWrapper}>
        <View style={[styles.line, styles.topInfoWrapper]}>
          <Text numberOfLines={2} style={styles.name}>
            {data.name}
          </Text>
          <TouchableOpacity onPress={() => onEdit(data.id)}>
            <Image source={images.pen} style={styles.editButton} />
          </TouchableOpacity>
        </View>
        <View style={[styles.line, styles.bottomInfoWrapper]}>
          <Text
            style={[
              styles.infoText,
              styles.priorityText,
              getPriorityColor(data.priority),
            ]}>
            {data.priority}
          </Text>
          <Text style={[styles.infoText, styles.remainingTimeText]}>
            {getRelativeTime(dayjs(data.deadline))}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TodoItemDisplay;
