import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import TinderCard from './src/components/TinderCard';
import users from './assets/data/users';

const App = () => {
  return (
    <View style={styles.container}>
      <TinderCard user={users[3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
