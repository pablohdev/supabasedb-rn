import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';

import styles from './styles';

const Input: React.FC<TextInputProps> = ({value, onChangeText, ...rest}) => {
  return (
    <View style={styles.InputContainer}>
      <TextInput value={value} onChangeText={onChangeText} {...rest} />
    </View>
  );
};

export default Input;
