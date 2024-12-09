import React, {memo} from 'react';
import {TodoProps} from '../../../../duck/reducers/app.type';
import {Display, Edit} from './views';

type TodoItemProps = {
  data: TodoProps;
  toggleDone: (item: TodoProps) => void;
  onEdit: (id: string) => void;
  editingId: string;
};

const TodoItem = ({data, toggleDone, onEdit, editingId}: TodoItemProps) => {
  if (data.id === editingId) {
    return <Edit data={data} />;
  } else {
    return <Display data={data} toggleDone={toggleDone} onEdit={onEdit} />;
  }
};

export default memo(TodoItem);
