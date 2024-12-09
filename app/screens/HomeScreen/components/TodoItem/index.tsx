import React, {memo} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {TodoProps} from '../../../../duck/reducers/app.type';
import {styles} from './styles';
import {Display, Edit} from './views';

type TodoItemProps = {
  data: TodoProps;
  toggleDone: (item: TodoProps) => void;
  onEdit: (id: string) => void;
  editingId: string;
};

const DISPLAY_HEIGHT = 115;
const EDIT_HEIGHT = 286;

const TodoItem = ({data, toggleDone, onEdit, editingId}: TodoItemProps) => {
  const isEditing = data.id === editingId;
  const height = useSharedValue(DISPLAY_HEIGHT);

  const handleOnEdit = (id: string) => {
    onEdit(id);
    height.value = EDIT_HEIGHT;
  };

  const setAnimatedViewHeight = () => (height.value = DISPLAY_HEIGHT);

  const animatedStyle = useAnimatedStyle(() => ({
    height: withSpring(height.value, {
      damping: 20,
      stiffness: 180,
    }),
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {isEditing ? (
        <Edit data={data} doneEditCallback={setAnimatedViewHeight} />
      ) : (
        <Display data={data} toggleDone={toggleDone} onEdit={handleOnEdit} />
      )}
    </Animated.View>
  );
};

export default memo(TodoItem);
