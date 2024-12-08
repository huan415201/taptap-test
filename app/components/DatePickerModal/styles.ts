import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  datePickerWrapper: {
    backgroundColor: colors.primaryWhite1,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
});
