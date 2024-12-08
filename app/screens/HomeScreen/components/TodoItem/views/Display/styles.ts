import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../constants';

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
  doneItem: {
    backgroundColor: colors.greenBg,
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
    color: colors.trueBlack,
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
