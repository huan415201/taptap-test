import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryWhite1,
    padding: 16,
    borderRadius: 12,
    gap: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.green3,
  },
  confirmButton: {
    backgroundColor: colors.green3,
  },
  actionButtonText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  confirmButtonText: {
    color: colors.primaryWhite1,
  },
});
