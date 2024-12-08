import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow1,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  list: {
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primaryPink1,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 16.8,
    color: colors.primaryWhite1,
  },
  separator: {
    height: 24,
  },
});
