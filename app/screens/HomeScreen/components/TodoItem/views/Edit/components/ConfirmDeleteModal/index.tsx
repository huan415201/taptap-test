import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './styles';

type ConfirmDeleteModalProps = {
  isVisible: boolean;
  todoName: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDeleteModal = ({
  isVisible,
  todoName,
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <Text
          style={
            styles.title
          }>{`Bạn có chắc muốn xóa việc "${todoName}"?`}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={onCancel} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onConfirm}
            style={[styles.actionButton, styles.confirmButton]}>
            <Text style={[styles.actionButtonText, styles.confirmButtonText]}>
              Đồng ý
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteModal;
