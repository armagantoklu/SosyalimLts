import React from 'react';
import {View, Image, Text} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import alert from '../../components/Alert/alert';
import Button from './../../components/Button';
import styles from './Login.Styles';
import Input from './../../components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const Login = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const initialValues = {
    email: '',
    password: '',
  };
  const yupSchema = yup.object().shape({
    email: yup.string().email('Geçerlli bir e mail adresi giriniz').required('E mail adresi boş bıraklamaz'),
    password: yup.string().required('Şifre boş bırakılamaz'),
  });

  const login = async values => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      showMessage({
        message: alert(error.code),
        type: 'info',
      });
    } finally {
      setLoading(false);
    }
  };
  const signUp = () => {
    navigation.navigate('signScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require('./../../../images/login.png')}
        />
      </View>
      <View>
        <Formik
          initialValues={initialValues}
          onSubmit={login}
          validationSchema={yupSchema}>
          {({values, handleSubmit, handleChange, errors}) => (
            <View style={styles.formikContainer}>
              <Input
                placeholder={'E posta '}
                value={values.email}
                onChangeText={handleChange('email')}
                iconName="at"
              />
              {errors.email && <Text>{errors.email}</Text>}
              <Input
                placeholder={'Şifre '}
                value={values.password}
                onChangeText={handleChange('password')}
                iconName="key"
                
              />
              {errors.password && <Text>{errors.password}</Text>}
              <View style={styles.buttonContainer}>
                <Button
                  name={'Giriş Yap'}
                  onPress={handleSubmit}
                  loading={loading}
                />
                <Button
                  name={'Kayıt Ol'}
                  onPress={signUp}
                  theme={'secondary'}
                  loading={false}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default Login;
