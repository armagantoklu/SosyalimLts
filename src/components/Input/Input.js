import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const Input = ({placeholder, onChangeText, value, iconName = 'none'}) => {
  const [showPass, setShowPass] = React.useState(false);
  React.useEffect(() => {
    isKey(iconName);
  }, []);
  const passToggle = () => {
    setShowPass(!showPass);
  };
  const isKey = name => {
    if (name === 'key') {
      return passToggle();
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={showPass}
      />
      <Icon
        style={styles.icon}
        name={iconName}
        size={30}
        onPress={() => {
          isKey(iconName);
        }}
      />
    </View>
  );
};

export default Input;
