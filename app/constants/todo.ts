import {colors} from '.';
import {TodoPriority, TodoPriorityKey} from '../duck/reducers/app.type';

export const PRIORITY: Record<TodoPriorityKey, TodoPriority> = {
  high: {
    id: 'high',
    name: 'Ưu tiên cao',
    shortName: 'Cao',
    color: colors.green3,
  },
  medium: {
    id: 'medium',
    name: 'Ưu tiên trung bình',
    shortName: 'Trung bình',
    color: colors.orange1,
  },
  low: {
    id: 'low',
    name: 'Ưu tiên thấp',
    shortName: 'Thấp',
    color: colors.blue1,
  },
};
