import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primaryWhite1,
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 16,
    paddingRight: 8,
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: colors.grey3,
  },
  itemName: {
    flex: 1,
  },
  check: {
    width: 16,
    height: 16,
  },
});
