import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';

import homeBackground from '../assets/homeBackground.png';

import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Input,
  Button
 } from 'react-native-elements';

import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = () => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password' || 'auth/invalid-email') {
        console.log(error);
        Alert.alert('Wrong Credentials...', 'Your credentials didn\'t match anything we have', [
          {text: 'Try Again', onPress: () => console.log('wrong creds alert closed')}
        ]);
      }
      console.log(error);
    });
  }

  return (
    <ImageBackground source={homeBackground} style={{width: '100%', height: '100%'}}>
      <Input
        placeholder='Email'
        inputContainerStyle={{...styles.inputContainer, marginTop: '60%'}}
        leftIcon={
          <Icon
            name='envelope'
            size={15}
          />
        }
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder='Password'
        inputContainerStyle={styles.inputContainer}
        secureTextEntry={true}
        leftIcon={
          <Icon
            name='unlock-alt'
            size={15}
          />
        }
        onChangeText={text => setPassword(text)}
      />
      <Button
        title='Log In'
        type='outline'
        disabled={!email || password.length < 8}
        buttonStyle={styles.buttonContainer}
        onPress={signin}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    marginHorizontal: 30
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 40,
    justifyContent: "center"
  },

});

export default Login;
