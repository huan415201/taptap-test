import React, {memo} from 'react';
import {TodoProps} from '../../../../duck/reducers/app.type';
import {Display, Edit} from './views';

type TodoItemProps = {
  data: TodoProps;
  toggleDone: (item: TodoProps) => void;
  onEdit: (id: string) => void;
  edittingId: string;
};

const TodoItem = ({data, toggleDone, onEdit, edittingId}: TodoItemProps) => {
  if (data.id === edittingId) {
    return <Edit data={data} />;
  } else {
    return <Display data={data} toggleDone={toggleDone} onEdit={onEdit} />;
  }
};

export default memo(TodoItem);
