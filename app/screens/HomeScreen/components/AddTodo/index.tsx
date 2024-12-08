import dayjs from 'dayjs';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../assets';
import {TodoDetailForm} from '../../../../components';
import {PRIORITY} from '../../../../constants/todo';
import {useAppDispatch} from '../../../../duck/hooks';
import {addTodo} from '../../../../duck/reducers/app';
import {TodoPriorityKey} from '../../../../duck/reducers/app.type';
import {useTodoDetail} from '../../../../hooks';
import {uuid} from '../../../../utils';
import {styles} from './styles';

type AddTodoProps = {
  onClose: () => void;
};

const closeButtonHitSlop = {top: 24, right: 24, left: 24};

const AddTodo = ({onClose}: AddTodoProps) => {
  const {
    name,
    setName,
    deadline,
    setDeadline,
    priority,
    setPriority,
    error,
    validate,
    clearError,
  } = useTodoDetail();
  const dispatch = useAppDispatch();

  const handleSetName = (value: string) => {
    setName(value);
    clearError();
  };

  const handleCreate = () => {
    if (!validate()) {
      console.log('deadline:::', deadline);
      console.log('typeof deadline:::', typeof deadline);

      dispatch(
        addTodo({
          id: uuid(),
          deadline: deadline ? dayjs(deadline).endOf('day').format() : '',
          isDone: false,
          name,
          priority: PRIORITY[priority as TodoPriorityKey],
        }),
      );
      onClose();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <TouchableOpacity
          onPress={onClose}
          hitSlop={closeButtonHitSlop}
          style={styles.closeButton}>
          <Image source={images.addIcon} style={styles.closeIcon} />
        </TouchableOpacity>
        <TodoDetailForm
          {...{
            name,
            setName: handleSetName,
            deadline,
            setDeadline,
            priority,
            setPriority,
          }}
        />
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.submitButton} onPress={handleCreate}>
        <Text style={styles.buttonText}>Tạo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
