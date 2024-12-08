import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey3,
  },
  focusField: {
    borderBottomColor: colors.primaryBlack1,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 22,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey3,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  contentText: {
    lineHeight: 22,
  },
});
