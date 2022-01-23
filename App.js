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
  useWindowDimensions,
} from 'react-native';
import TinderCard from './src/components/TinderCard';
import users from './assets/data/users';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const ROTATION = 60;
const App = () => {
  const {width: screenWidth} = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(1);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      'deg',
  );
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event, ctx) => {
      console.log('Touch ended');
    },
  });
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <TinderCard user={users[3]} />
        </Animated.View>
      </PanGestureHandler>
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
