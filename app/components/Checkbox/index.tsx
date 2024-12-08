import React from 'react';
import {Image, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {images} from '../../assets';
import {styles} from './styles';

type CheckboxProps = TouchableOpacityProps & {
  isChecked: boolean;
};

const Checkbox = ({isChecked, ...rest}: CheckboxProps) => {
  return (
    <TouchableOpacity {...rest}>
      <Image
        source={isChecked ? images.checkboxChecked : images.checkboxUnchecked}
        style={styles.checkboxImg}
      />
    </TouchableOpacity>
  );
};

export default Checkbox;
