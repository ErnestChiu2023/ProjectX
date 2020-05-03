import React from 'react';
import {
  StyleSheet,
  ImageBackground,
} from 'react-native';

import homeBackground from '../assets/homeBackground.png';

import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Input,
  Button
 } from 'react-native-elements';

const Login = () => {
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
      />
      <Button
        title='Log In'
        type='outline'
        buttonStyle={styles.buttonContainer}
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
    marginHorizontal: 40
  }
});

export default Login;
