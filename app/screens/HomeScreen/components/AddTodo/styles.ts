import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants';

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
  topWrapper: {
    width: '100%',
  },
  errorText: {
    color: colors.redError,
    width: '100%',
  },
  closeButton: {},
  closeIcon: {
    tintColor: colors.trueBlack,
    width: 16,
    height: 16,
    alignSelf: 'flex-end',
    transform: [
      {
        rotate: '45deg',
      },
    ],
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
    color: colors.primaryWhite1,
  },
});
