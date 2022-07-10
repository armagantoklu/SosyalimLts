import React from 'react';
import {View, TextInput,PermissionsAndroid} from 'react-native';
import Button from './../../Button';
import Modal from 'react-native-modal';
import styles from './ContentInputModel.Styles';
const ContentInputModel = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);
  const handleText = () => {
    if (!text) {
      return;
    } else {
      onSend(text);
      setText(null);
    }
  };
  
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            placeholder="Ne Söyleyeceksin"
            onChangeText={setText}
          />
        </View>
        <Button
          name="Paylaş"
          onPress={handleText}
        />
      </View>
    </Modal>
  );
};
export default ContentInputModel;
