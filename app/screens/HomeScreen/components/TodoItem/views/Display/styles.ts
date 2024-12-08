import {StyleSheet, TextStyle} from 'react-native';
import {colors} from '../../../../../../constants';
import {TodoPriority} from '../../../../../../duck/reducers/app.type';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryWhite1,
    borderRadius: 15,
    paddingVertical: 24,
    paddingLeft: 18,
    paddingRight: 24,
    flexDirection: 'row',
    gap: 20,
  },
  checkbox: {
    marginTop: 8,
  },
  infoWrapper: {
    flex: 1,
  },
  topInfoWrapper: {
    gap: 8,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomInfoWrapper: {
    marginTop: 10,
    gap: 8,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: colors.black,
  },
  editButton: {
    width: 37,
    height: 37,
  },
  infoText: {
    flex: 1,
  },
  priorityText: {
    fontSize: 12,
    lineHeight: 20,
  },
  remainingTimeText: {
    fontSize: 10,
    lineHeight: 20,
    textAlign: 'right',
  },
});

export const getPriorityColor = (priority: TodoPriority): TextStyle => {
  switch (priority) {
    case TodoPriority.high:
      return {
        color: colors.green3,
      };
    case TodoPriority.medium:
      return {
        color: colors.orange1,
      };
    case TodoPriority.low:
      return {
        color: colors.blue1,
      };
    default:
      return {
        color: colors.blue1,
      };
  }
};
