import {useState} from 'react';
import {PRIORITY} from '../constants/todo';
import {TodoPriorityKey, TodoProps} from '../duck/reducers/app.type';

const useTodoDetail = (defaultData?: TodoProps) => {
  const [name, setName] = useState<string>(defaultData?.name || '');
  const [deadline, setDeadline] = useState<string>(defaultData?.deadline || '');
  const [priority, setPriority] = useState<TodoPriorityKey>(
    defaultData?.priority.id || PRIORITY.low.id,
  );
  const [error, setError] = useState<string>('');

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

  return {
    name,
    setName,
    deadline,
    setDeadline,
    priority,
    setPriority,
    error,
    validate,
    clearError,
  };
};

export default useTodoDetail;
