import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View
} from 'react-native';

import homeBackground from '../assets/homeBackground.png';

import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Input,
  Button
 } from 'react-native-elements';

import { Formik } from 'formik';

const SignUp = () => {
  return (
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
            errors.confirmPassword = 'This field needs to match with password';
          }

          console.log(errors);
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values, 'submitted');
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
                  name='envelope'
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
    marginLeft: 40
  }
});

export default SignUp;
