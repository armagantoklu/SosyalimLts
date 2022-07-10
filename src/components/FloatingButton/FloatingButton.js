import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FloatingButton.Styles';
const FloatingButton = ({onPress, iconName}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={30} />
    </TouchableOpacity>
  );
};
export default FloatingButton;
