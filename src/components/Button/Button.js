import React from 'react';
import {TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import styles from './Button.Styles';
const Button = ({name, onPress, theme = 'primary', loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].container}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text style={styles[theme].text}>{name}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
