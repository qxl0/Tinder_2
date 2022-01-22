import React from 'react';
import {Text, Image, View, StyleSheet, Button, ImageBackground} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/474x/26/26/2f/26262f64a7379d8b76824949916c57f5.jpg',
          }}
          style={styles.image}
        >
          <View style={styles.cardInner}>
            <Text style={styles.name}>Elon Musk</Text>
            <Text style={styles.bio}>CEO</Text>
          </View>
        </ImageBackground>
      </View>
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
  card: {
    width: '95%',
    height: '75%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.34,
    shadowRadius: 6.27,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 25 
  },
  cardInner: {
    padding: 10,
  }
});

export default App;
