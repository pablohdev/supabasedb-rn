import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({text, ...rest}) => {
  return (
    <TouchableOpacity style={styles.ButtonContainer} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
