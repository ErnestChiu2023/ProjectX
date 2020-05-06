import React, { useState, useEffect }  from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { 
    Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { getUserProjects } from '../redux/actions';

const logout = () => {
  const user = auth().currentUser;

  console.log('this one ', user);
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

const Profile = ({ userId, userProjects, getUserProjects }) => {
  firestore().doc(`users/${userId}`).get().then(data => {
    getUserProjects(data._data.projects);
  });
  return (
    <View>
      <Button
        title='Log Out'
        type='outline'
        onPress={logout}
      />
      <View style={styles.aboutSection}>
        <View style={styles.avatarSide}>
            <Text>{}</Text>
        </View>
        <View style={styles.infoSide}>
          <Text>ZainNoor99</Text>
        </View>
      </View>

      

      <View style={styles.projectsSection}>
        {userProjects && userProjects.length == 0 && 
          <View style={styles.noProjects}>
            <View>
              <Text style={styles.noProjectsText}>You don't have any projects yet!</Text>
            </View>
          </View>
        }
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  aboutSection: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    height: '30%',
    width: '100%'
  },
  infoSide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
  avatarSide: {
    width: '50%',
    height: '100%',
  },
  projectsSection: {
    height: '70%',
    width: '100%',
    borderColor: '#428df3',
    borderWidth: 2,
    // borderTopColor: '#428df3',
    // borderTopWidth: 2,
  },
  noProjects: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  noProjectsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  }
});

const mapDispatchToProps = { getUserProjects }

const mapStateToProps = (state, props) => {
  const { userReducer } = state;
  return { 
    userId: userReducer.userId, 
    userProjects: userReducer.userProjects,
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);