import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PRIORITY} from '../../../../../../constants/todo';
import {useAppDispatch} from '../../../../../../duck/hooks';
import {editTodo, setEditId} from '../../../../../../duck/reducers/app';
import {
  TodoPriorityKey,
  TodoProps,
} from '../../../../../../duck/reducers/app.type';
import TodoForm from './components/Form';
import {styles} from './styles';

type TodoItemEditProps = {
  data: TodoProps;
};

const TodoItemEdit = ({data}: TodoItemEditProps) => {
  const [name, setName] = useState<string>(data.name);
  const [deadline, setDeadline] = useState<string>(data.deadline);
  const [priority, setPriority] = useState<TodoPriorityKey>(data.priority.id);
  const [error, setError] = useState<string>('');
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

  return (
    <View style={styles.container}>
      <TodoForm
        {...{
          name,
          setName: handleSetName,
          deadline,
          setDeadline,
          priority,
          setPriority,
        }}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.line}>
        <TouchableOpacity style={styles.backButton} onPress={discardEdit}>
          <Text style={styles.buttonText}>Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleEdit}>
          <Text style={[styles.buttonText, styles.submitButtonText]}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItemEdit;
