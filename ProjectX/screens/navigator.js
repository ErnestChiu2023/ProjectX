import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React, { useEffect, useState } from 'react';
import { setUserId } from '../redux/actions';

import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux';

import Home from './home';
import Login from './login';
import SignUp from './signUp';
import Projects from './projects';
import Profile from './profile';
import addProject from './addProject';


// initializing navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Navigator = ({ setUserId }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user) {
      setUserId(user.uid);
    }
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
          <Tab.Screen name="addProject" component={addProject} />
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
  )
}

const mapDispatchToProps = {
  setUserId
};

export default connect(null, mapDispatchToProps)(Navigator);