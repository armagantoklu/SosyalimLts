import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Card.Styles';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import Icon from 'react-native-vector-icons/AntDesign';
const Card = ({message, onLike}) => {
  const formattedDate = formatDistance(parseISO(message.Date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.textUsername}>{message.username}</Text>
        <Text style={styles.textDate}>{formattedDate}</Text>
      </View>
      <Text style={styles.textContent}>{message.content}</Text>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.dislikeContainer} onPress={onLike}>
          {!!message.like && (
            <View style={styles.countContainer}>
              <Text style={styles.countText}>{message.like}</Text>
            </View>
          )}
          <Text style={styles.likeIcon}>
            <Icon
              name="like1"
              size={20}
              color={'orange'}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Card;
