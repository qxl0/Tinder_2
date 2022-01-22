import React from 'react';
import {Text, Image, View, StyleSheet, Button, ImageBackground} from 'react-native';
import TinderCard from './src/components/TinderCard';

const Kathy = {
  name: 'Kathy Smith',
  bio: 'designer',
  image: 'https://geeksoncoffee.com/wp-content/uploads/2020/07/Sylvie-Meis-sexy-look.jpeg',
}
const App = () => {
  return (
    <View style={styles.container}>
      <TinderCard user={{...Kathy}} />
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
