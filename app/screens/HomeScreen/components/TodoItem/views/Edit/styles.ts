import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryWhite1,
    borderRadius: 15,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 32,
    alignItems: 'center',
  },
  errorText: {
    color: colors.redError,
    width: '100%',
  },
  submitButton: {
    paddingTop: 6,
    paddingHorizontal: 27,
    paddingBottom: 8,
    backgroundColor: colors.green3,
    borderRadius: 22,
    borderColor: colors.green3,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.4,
  },
  submitButtonText: {
    color: colors.primaryWhite1,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  backButton: {
    paddingTop: 6,
    paddingHorizontal: 27,
    paddingBottom: 8,
    borderRadius: 22,
    borderColor: colors.green3,
    borderWidth: 1,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-end',
  },
});
