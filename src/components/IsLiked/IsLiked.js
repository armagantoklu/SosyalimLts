import React from 'react';
import database from '@react-native-firebase/database';

const IsLiked = messageId => {
    const [likees,setLikees] = React.useState([]);
  database()
    .ref(`messages/${messageId}`)
    .once('value')
    .then(snapshot => {
      setLikees(snapshot.val().likedUsers);
    });
    likees.map(item=>console.log(item.data))
    
};
export default IsLiked;
