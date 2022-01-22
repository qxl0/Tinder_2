import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const TinderCard = (props) => {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TinderCard;

const styles = StyleSheet.create({
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
    lineHeight: 25,
  },
  cardInner: {
    padding: 10,
  },
});
