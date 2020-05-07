import React from 'react';
import { connect } from 'react-redux';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Formik } from 'formik';

import { Input, Button } from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';

const addProject = ({ userId }) => {
  return (
    <Formik
      initialValues={{ 
        title: '', 
        description: '' 
      }}
      onSubmit={values => {
        console.log(userId);
        firestore()
          .doc(`users/${userId}`)
          .update({
            projects: firestore.FieldValue.arrayUnion({ 
              title: values.title, 
              description: values.description,
              projectId: (new Date()).getTime().toString(),
            })
          })
          .then(() => {
            console.log('project added');
          })
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validate={values => {
        const errors = {};
        if(!values.title) {
          errors.title = 'This field is required';
        }
        if(!values.description) {
          errors.description = 'This field is required';
        }
        return errors;
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Input 
            placeholder='Project Title'
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            errorMessage={errors.title}
            renderErrorMessage={touched.title}
          />
          <Input 
            placeholder='Project Description'
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
            errorMessage={errors.description}
            renderErrorMessage={touched.description}
          />
          <Button
            title='create Project'
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  }
});

const mapStateToProps = (state, props) => {
  const { userReducer } = state;
  return { userId: userReducer.userId };
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(addProject);