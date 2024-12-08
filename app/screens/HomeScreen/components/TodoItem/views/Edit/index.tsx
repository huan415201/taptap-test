import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../../../assets';
import {TodoDetailForm} from '../../../../../../components';
import {PRIORITY} from '../../../../../../constants/todo';
import {useAppDispatch} from '../../../../../../duck/hooks';
import {
  editTodo,
  removeTodo,
  setEditId,
} from '../../../../../../duck/reducers/app';
import {
  TodoPriorityKey,
  TodoProps,
} from '../../../../../../duck/reducers/app.type';
import {ConfirmDeleteModal} from './components';
import {styles} from './styles';

type TodoItemEditProps = {
  data: TodoProps;
};

const deleteButtonHitSlop = {top: 24, right: 24, left: 24};

const TodoItemEdit = ({data}: TodoItemEditProps) => {
  const [name, setName] = useState<string>(data.name);
  const [deadline, setDeadline] = useState<string>(data.deadline);
  const [priority, setPriority] = useState<TodoPriorityKey>(data.priority.id);
  const [error, setError] = useState<string>('');
  const [isShowConfirmDelete, setIsShowConfirmDelete] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();

  const validate = () => {
    let err = '';
    if (!name) {
      err = 'Vui lòng nhập tên công việc';
    }
    setError(err);
    return !!err;
  };

  const clearError = () => {
    if (error) {
      setError('');
    }
  };

  const handleSetName = (value: string) => {
    setName(value);
    clearError();
  };

  const handleEdit = () => {
    if (!validate()) {
      dispatch(
        editTodo({...data, name, deadline, priority: PRIORITY[priority]}),
      );
      dispatch(setEditId(''));
    }
  };

  const discardEdit = () => {
    setName(data.name);
    setDeadline(data.deadline);
    setPriority(data.priority.id);
    dispatch(setEditId(''));
  };

  const closeConfirmDelete = () => {
    setIsShowConfirmDelete(false);
  };

  const showConfirmDelete = () => {
    setIsShowConfirmDelete(true);
  };

  const handleDelete = () => {
    dispatch(removeTodo(data.id));
    closeConfirmDelete();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={showConfirmDelete}
          hitSlop={deleteButtonHitSlop}
          style={styles.deleteButton}>
          <Image source={images.bin} />
          <Text>Xóa</Text>
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
      <View style={styles.line}>
        <TouchableOpacity style={styles.backButton} onPress={discardEdit}>
          <Text style={styles.buttonText}>Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleEdit}>
          <Text style={[styles.buttonText, styles.submitButtonText]}>Xong</Text>
        </TouchableOpacity>
      </View>
      <ConfirmDeleteModal
        isVisible={isShowConfirmDelete}
        onCancel={closeConfirmDelete}
        onConfirm={handleDelete}
        todoName={data.name}
      />
    </View>
  );
};

export default TodoItemEdit;
