import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Pressable,
} from 'react-native';
import TinderCard from './src/components/TinderCard';
import users from './assets/data/users';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const App = () => {
  const sharedValue = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    opacity: sharedValue.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedCard, cardStyle]}>
        <TinderCard user={users[3]} />
      </Animated.View>
      <Pressable
        onPress={() => (sharedValue.value = withSpring(Math.random()))}>
        <Text>Change Value</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedCard: {
    width: '95%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
