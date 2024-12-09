import dayjs from 'dayjs';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {images} from '../../../../../../assets';
import {Checkbox} from '../../../../../../components';
import {colors} from '../../../../../../constants';
import {TodoProps} from '../../../../../../duck/reducers/app.type';
import {getRelativeTime} from '../../../../../../utils';
import {styles} from './styles';

type TodoItemDisplayProps = {
  data: TodoProps;
  toggleDone: (item: TodoProps) => void;
  onEdit: (id: string) => void;
};

const TodoItemDisplay = ({data, toggleDone, onEdit}: TodoItemDisplayProps) => {
  const isDoneShareValue = useSharedValue(data.isDone ? 1 : 0);
  const animatedBackgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isDoneShareValue.value ? colors.greenBg : colors.primaryWhite1,
        {duration: 200},
      ),
    };
  });

  const handleToggleDone = (value: TodoProps) => {
    toggleDone(value);
    isDoneShareValue.value = value.isDone ? 0 : 1;
  };

  return (
    <Animated.View style={[styles.container, animatedBackgroundColor]}>
      <Checkbox
        isChecked={data.isDone}
        onPress={() => handleToggleDone(data)}
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
              {
                color: data.priority.color,
              },
            ]}>
            {data.priority.name}
          </Text>
          <Text style={[styles.infoText, styles.remainingTimeText]}>
            {data.deadline
              ? getRelativeTime(dayjs(data.deadline).locale('vi'))
              : '--'}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default TodoItemDisplay;
