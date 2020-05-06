import React, { useState }  from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { 
    Button
   } from 'react-native-elements';

import auth from '@react-native-firebase/auth';
import { firestore } from 'firebase';
// import firestore from '@react-native-firebase/firestore';

const logout = () => {
  const user = auth().currentUser;

  console.log('this one ', user);
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

const userData = {
  username: 'ZainNoor99',
  projects: [project1, project2, project3],
}

const project1 = {
  name: 'Some random project',
  description: 'lorem ipsum something something asdsadsd',
  id: 1,
}

const project2 = {
  name: 'Some random project2',
  description: 'lorem ipsum something something asdsadsd',
  id: 2,
}

const project3 = {
  name: 'Some random project3',
  description: 'lorem ipsum something something asdsadsd',
  id: 3,
}

const Profile = () => {
  const [projects, setProjects] = useState([]);
  firestore.collections('users').doc('cZaXOl5KO3fg9wCMO4Jyw4tACly1').get
  return (
    <View>
      <View style={styles.aboutSection}>
        <View style={styles.avatarSide}>
            <Text>{userData.username}</Text>
        </View>
        <View style={styles.infoSide}>
          <Text>{userData.username}</Text>
        </View>
      </View>

      

      <View style={styles.projectsSection}>
        {userData.projects.length == 0 && 
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
  
export default Profile;