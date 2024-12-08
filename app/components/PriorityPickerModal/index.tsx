import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import {images} from '../../assets';
import {PRIORITY} from '../../constants/todo';
import {TodoPriority, TodoPriorityKey} from '../../duck/reducers/app.type';
import {styles} from './styles';

type DatePickerModalProps = Partial<ModalProps> & {
  value: string;
  setValue: (val: TodoPriorityKey) => void;
};

const renderItem = (
  item: TodoPriority,
  value: string,
  setValue: (val: TodoPriorityKey) => void,
  isFirst: boolean,
) => (
  <TouchableOpacity
    onPress={() => setValue(item.id)}
    style={[styles.item, !isFirst && styles.border]}
    key={item.id}>
    <Text style={styles.itemName} numberOfLines={1}>
      {item.name}
    </Text>
    {item.id === value && <Image style={styles.check} source={images.check} />}
  </TouchableOpacity>
);

const DatePickerModal = ({
  value,
  setValue,
  ...modalProps
}: DatePickerModalProps) => {
  return (
    <Modal {...modalProps}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Chọn mức độ ưu tiên</Text>
        <View>
          {Object.keys(PRIORITY).map((i, index) =>
            renderItem(
              PRIORITY[i as TodoPriorityKey],
              value,
              setValue,
              index === 0,
            ),
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerModal;
