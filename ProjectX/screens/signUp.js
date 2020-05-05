import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import homeBackground from '../assets/homeBackground.png';
import { CommonActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Input,
  Button
 } from 'react-native-elements';

import { Formik } from 'formik';

const SignUp = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('keyboard dismissed');
      }}
    >
      <ImageBackground source={homeBackground} style={{width: '100%', height: '100%'}}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={values => {
            const errors = {};
            console.log(values);

            if (!values.username) {
              errors.username = 'This Field is Required';
            }

            if (!values.email) {
              errors.email = 'This Field is Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'This Field is Required';
            } else if (values.password.length < 8) {
              errors.password = 'Your password must be at 8 least characters';
            }

            if (!values.confirmPassword) {
              errors.confirmPassword = 'This Field is Required';
            } else if (values.confirmPassword.length < 8) {
              errors.confirmPassword = 'Your password must be at least 8 characters';
            } else if (values.confirmPassword !== values.password) {
              errors.confirmPassword = 'Passwords don\'t match';
            }

          console.log(errors);
          return errors;
        }}
        onSubmit={(values) => {
          auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((userCredentials) => {
              console.log('User account created & signed in!');
              userCredentials.user.updateProfile({
                displayName: values.username
              })
              .then(() => {
                console.log('user username udpated');
              })
              .catch((error) => {
                throw error;
              })
            })
            .catch(error => {
              //Alerts if email is already in use
              if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Email already in use...', 'This email is already associated with an account. Try logging in!', [
                  {text: 'OK', onPress: () => {console.log('email association alert acknowledged')}}
                ]);
                console.log('That email address is already in use!');
              }
            });
          }}
        >
          {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
            <View>
              <Input
                placeholder='Email'
                inputContainerStyle={{...styles.inputContainer, marginTop: '60%'}}
                leftIcon={
                  <Icon
                    name='envelope'
                    size={15}
                  />
                }
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                value={values.email}
                errorMessage={errors.email}
                renderErrorMessage={touched.email}
                errorStyle={styles.errorStyle}
              />
              <Input
                placeholder='Username'
                inputContainerStyle={styles.inputContainer}
                leftIcon={
                  <Icon
                    name='user'
                    size={15}
                  />
                }
                onBlur={handleBlur('username')}
                onChangeText={handleChange('username')}
                value={values.username}
                errorMessage={errors.username}
                renderErrorMessage={touched.username}
                errorStyle={styles.errorStyle}
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
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
                errorMessage={errors.password}
                renderErrorMessage={touched.password}
                errorStyle={styles.errorStyle}
              />
              <Input
                placeholder='Confirm Password'
                inputContainerStyle={styles.inputContainer}
                secureTextEntry={true}
                leftIcon={
                  <Icon
                    name='unlock-alt'
                    size={15}
                  />
                }
                onBlur={handleBlur('confirmPassword')}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                errorMessage={errors.confirmPassword}
                renderErrorMessage={touched.confirmPassword}
                errorStyle={styles.errorStyle}
              />
              <Button
              title='Sign Up'
              type='outline'
              buttonStyle={styles.buttonContainer}
              onPress={handleSubmit}
            />
            </View>
          )}
        </Formik>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
  },
  errorStyle: {
    fontSize:14,
    color:'red',
    fontWeight: 'bold',
    marginLeft: 40,
    textShadowColor:'#2b2d2f',
    textShadowOffset:{width: .1, height: .1},
    textShadowRadius: 2,
  }
});

export default SignUp;
