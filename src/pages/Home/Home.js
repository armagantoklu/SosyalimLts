import React from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from './../../components/modal/ContentInputModal';
import contentParser from '../../components/ContentParser/contentParser';
import alert from '../../components/Alert/alert';
import {showMessage} from 'react-native-flash-message';
import styles from './Home.Styles';
import database from '@react-native-firebase/database';
import Card from '../../components/Card';
import IsLikedUser from '../../components/isLikedUser';
const Home = () => {
  const [contentInputModelVisible, setContentInputModelVisible] =
    React.useState(false);
  const [contentList, setContentList] = React.useState([]);
  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', data => {
        const dataObj = data.val();
        const parsedData = contentParser(dataObj || {});
        setContentList(parsedData);
      });
  }, []);
  const contentInputModelToogle = () => {
    setContentInputModelVisible(!contentInputModelVisible);
  };
  const contentInputModelSend = content => {
    contentInputModelToogle();
    sendContent(content);
  };

  const sendContent = content => {
    const contentObj = {
      content: content,
      username: auth().currentUser.email.split('@')[0],
      Date: new Date().toISOString(),
      like: 0,
      likedId: '',
    };
    database().ref('messages/').push(contentObj);
  };
  const likeCount = async item => {
    {
      (await IsLikedUser(item.id, auth().currentUser.uid))
        ? showMessage({
            message: alert('likeagain'),
            type: 'info',
          })
        : database()
            .ref(`messages/${item.id}/`)
            .update({
              like: item.like + 1,
              likedId: item.likedId + auth().currentUser.uid + ',',
            });
    }
  };

  const renderItems = ({item}) => (
    <Card message={item} onLike={() => likeCount(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderItems} />
      <FloatingButton iconName={'plus'} onPress={contentInputModelToogle} />
      <ContentInputModal
        visible={contentInputModelVisible}
        onClose={contentInputModelToogle}
        onSend={contentInputModelSend}
      />
    </View>
  );
};
export default Home;

const a = {
  displayName: null,
  email: 'arm@gm.cm',
  emailVerified: false,
  isAnonymous: false,
  metadata: {creationTime: 1655398692156, lastSignInTime: 1655398692156},
  phoneNumber: null,
  photoURL: null,
  providerData: [[Object]],
  providerId: 'firebase',
  tenantId: null,
  uid: 'uLWC0ZECBgUyPFGy8NxkixohAQU2',
};
