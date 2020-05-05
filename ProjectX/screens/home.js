import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';

import homeBackground from '../assets/homeBackground.png';

import {
  Button,
} from 'react-native-elements';


const Home = ({ navigation }) => {
  return (
    <ImageBackground source={homeBackground} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Project X</Text>
        <Button 
          title='Login'
          onPress={() => navigation.push('login')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
        <Button 
          title='Sign Up'
          onPress={() => navigation.push('signup')}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
    margin: 70,
    marginTop: 200,
  },
  buttonText: {
    color: '#428df3',
  },
  button: {
    width: 200,
    margin: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default Home;
