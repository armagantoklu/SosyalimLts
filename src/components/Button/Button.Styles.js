import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 15,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default {
  primary: StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: '#CC704B',
    },
    text: {
      ...styles.text,
      color: '#B4CFB0',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...styles.container,
      borderWidth:2,
      borderColor:'#B4CFB0'
    },
    text: {
      ...styles.text,
      color: '#CC704B',
    },
  }),
};
