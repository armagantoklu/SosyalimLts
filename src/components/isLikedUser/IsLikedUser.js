import database from '@react-native-firebase/database';

const IsLikedUser = async (item, uid) => {
  let dataObj = 1;
  await database()
    .ref(`messages/${item}/likedId/`)
    .once('value')
    .then(async data => {
      dataObj = await data.val().includes(uid);
    });
  return dataObj;
};
export default IsLikedUser;
