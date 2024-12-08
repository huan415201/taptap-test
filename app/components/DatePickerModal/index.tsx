import React from 'react';
import {Text, View} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import DateTimePicker from 'react-native-ui-datepicker';
import {
  DatePickeMultipleProps,
  DatePickerRangeProps,
  DatePickerSingleProps,
} from 'react-native-ui-datepicker/lib/typescript/src/DateTimePicker';
import {styles} from './styles';

type DatePickerModalProps = {
  modalProps?: Partial<ModalProps>;
  pickerProps:
    | DatePickerSingleProps
    | DatePickerRangeProps
    | DatePickeMultipleProps;
};

const DatePickerModal = ({modalProps, pickerProps}: DatePickerModalProps) => {
  return (
    <Modal {...modalProps}>
      <View style={styles.datePickerWrapper}>
        <Text style={styles.title}>Chọn thời hạn</Text>
        <DateTimePicker {...pickerProps} />
      </View>
    </Modal>
  );
};

export default DatePickerModal;
