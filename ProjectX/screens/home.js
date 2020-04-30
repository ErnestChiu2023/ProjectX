import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Button 
} from 'react-native-elements';


const Home = ({ navigation }) => {
  return (
    <View>
        <Button 
          title='Login'
          onPress={() => navigation.push('login')}
        />
        <Button 
          title='Sign Up'
          onPress={() => navigation.push('signup')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Home;
