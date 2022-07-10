import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {borderRadius: 20, margin: 10, backgroundColor: '#EFD345'},
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textUsername: {fontWeight: 'bold'},
  textContent: {margin: 10},
  footerContainer: {
    padding: 2,
    alignItems: 'center',
  },
  dislikeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderRadius: 50,
  },
  countContainer: {margin: 3, borderRadius: 100},
  countText: {padding: 2, color: 'black'},
  likeIcon: {color: 'darkorange'},
});
