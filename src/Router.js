import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Home from './pages/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlashMessage from 'react-native-flash-message';
const Stack = createNativeStackNavigator();
export default function () {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Login} name="loginScreen" />
        <Stack.Screen component={Sign} name="signScreen" />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            component={Home}
            name="homeScreen"
            options={{
              headerTitle: 'Ana Sayfa',
              headerTintColor: '#FFD24C',
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="sign-out"
                  size={30}
                  color="#FFD24C"
                  onPress={() => {
                    return auth().signOut();
                  }}
                />
              ),
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
