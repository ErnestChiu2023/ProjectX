import React from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { 
    Button
   } from 'react-native-elements';

import auth from '@react-native-firebase/auth';

const logout = () => {
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

const Profile = () => {
  return (
    <View>
      <Text>Profile Page</Text>
      <Button
        title='Log Out'
        type='outline'
        onPress={logout}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});
  
export default Profile;