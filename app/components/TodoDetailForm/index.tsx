import dayjs from 'dayjs';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {DatePickerModal, PriorityPickerModal} from '..';
import {PRIORITY} from '../../constants/todo';
import {TodoPriorityKey} from '../../duck/reducers/app.type';
import {styles} from './styles';

type TodoFormProps = {
  name: string;
  setName: (value: string) => void;
  deadline: string;
  setDeadline: Dispatch<SetStateAction<string>>;
  priority: TodoPriorityKey;
  setPriority: Dispatch<SetStateAction<TodoPriorityKey>>;
};

const TodoDetailForm = ({
  name,
  setName,
  deadline,
  setDeadline,
  priority,
  setPriority,
}: TodoFormProps) => {
  const [focusField, setFocusField] = useState<string>('');
  const [openDeadlineModal, setOpenDeadlineModal] = useState<boolean>(false);
  const [openPriorityModal, setOpenPriorityModal] = useState<boolean>(false);

  const focusName = () => setFocusField('name');

  const onPressDeadline = () => {
    setFocusField('deadline');
    setOpenDeadlineModal(true);
  };

  const onPressPriority = () => {
    setFocusField('priority');
    setOpenPriorityModal(true);
  };

  const closeDeadlineModal = () => {
    setOpenDeadlineModal(false);
  };

  const closePriorityModal = () => {
    setOpenPriorityModal(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={[styles.input, focusField === 'name' && styles.focusField]}
        onFocus={focusName}
        placeholder="Nhập tên công việc"
      />
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.line, focusField === 'deadline' && styles.focusField]}
        onPress={onPressDeadline}>
        <Text style={styles.titleText}>Thời hạn</Text>
        <Text style={styles.contentText}>
          {deadline ? dayjs(deadline).format('DD/MM/YYYY') : '--'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.line, focusField === 'priority' && styles.focusField]}
        onPress={onPressPriority}>
        <Text style={styles.titleText}>Mức độ ưu tiên</Text>
        <Text style={styles.contentText}>
          {PRIORITY[priority]?.name || '--'}
        </Text>
      </TouchableOpacity>
      <DatePickerModal
        modalProps={{
          isVisible: openDeadlineModal,
          onBackdropPress: closeDeadlineModal,
        }}
        pickerProps={{
          mode: 'single',
          date: deadline || null,
          onChange: params => {
            setDeadline(dayjs(params?.date).endOf('day').format());
            closeDeadlineModal();
          },
        }}
      />
      <PriorityPickerModal
        isVisible={openPriorityModal}
        onBackdropPress={closePriorityModal}
        value={priority}
        setValue={(val: TodoPriorityKey) => {
          setPriority(val);
          closePriorityModal();
        }}
      />
    </View>
  );
};

export default TodoDetailForm;
