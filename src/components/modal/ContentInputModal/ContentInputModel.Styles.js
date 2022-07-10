import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    padding: 5,
    height: Dimensions.get('window').height / 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  inputContainer: {
      
  },
});
