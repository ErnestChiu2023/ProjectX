/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setCustomText } from 'react-native-global-props';
import auth from '@react-native-firebase/auth';

import Home from './screens/home';
import Login from './screens/login';
import SignUp from './screens/signUp';
import Projects from './screens/projects';
import Profile from './screens/profile';

// initializing navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const customTextProps = {
  style: {
    fontFamily: 'monospace'
  }
};

setCustomText(customTextProps);

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="projects" component={Projects} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  )
}

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen name="projects" component={Projects} />
          <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};


export default App;
