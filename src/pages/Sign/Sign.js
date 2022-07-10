import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from './../../components/Button';
import {Formik} from 'formik';
import styles from './Sign.Styles';
import auth from '@react-native-firebase/auth';
import alert from '../../components/Alert/alert';
import {showMessage} from 'react-native-flash-message';
import database from '@react-native-firebase/database';
import * as yup from 'yup';
const Sign = ({navigation}) => {
  const initialValues = {
    email: '',
    password: '',
    rePassword: '',
  };
  onSubmit = async values => {
    if (values.password != values.rePassword) {
      showMessage({
        message: 'Şifreler Aynı Değil',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'info',
      });
      const value = database()
        .ref(`users/`)
        .push({username: values.email.split('@')[0], likes: ''}).key;
      navigation.goBack({value:value});
    } catch (error) {
      showMessage({
        message: alert(error.code),
        type: 'danger',
      });
    }
  };
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Lütfen geçerli bir e mail adresi giriniz')
      .required('Email boş olamaz'),
    password: yup.string().required('Şifre boş olamaz'),
    rePassword: yup.string().required('Şifre boş olamaz'),
  });
  return (
    <View style={styles.bigContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('./../../../images/signup.png')}
        />
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({values, handleChange, handleSubmit, errors}) => (
          <View style={styles.innerContainer}>
            <Input
              placeholder={'E-Postanızı Giriniz'}
              value={values.email}
              onChangeText={handleChange('email')}
              iconName="at"
            />
            {errors.email && <Text>{errors.email}</Text>}

            <Input
              placeholder={'Şifrenizi  Giriniz'}
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key"
            />
            {errors.password && <Text>{errors.password}</Text>}
            <Input
              placeholder={'Şifrenizi Tekrar Giriniz'}
              value={values.rePassword}
              onChangeText={handleChange('rePassword')}
              iconName="key"
            />
            {errors.rePassword && <Text>{errors.rePassword}</Text>}
            <View style={styles.buttonContainer}>
              <Button name={'Kaydı Tamamla'} onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default Sign;
