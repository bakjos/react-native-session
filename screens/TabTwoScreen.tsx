import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Animated, { Easing } from "react-native-reanimated";
import {
  useValue,
  tween2d,
  loop,
  useClock,
  useTimingTransition,
} from "react-native-redash";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useSelector } from "react-redux";
import { CounterState } from "../types/state";
import styled from "styled-components/native";
import Button from "../components/Button";

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// const AnimatedButton = Animated.createAnimatedComponent(Button);

enum State {
  PLAYING = 0,
  PAUSED,
}

export default function TabTwoScreen() {
  const count = useSelector<CounterState, number>((state) => state?.count || 0);
  //const state = useValue(State.PAUSED);
  const [animating, setAnimating] = React.useState(true);
  const progress = useTimingTransition(animating, {
    duration: 3000,
  });

  //const progress = useValue<number>(0);
  //const progress = useLoop(3000, false);

  // const clock = useClock();

  // const progress = React.useMemo(
  //   () =>
  //     Animated.block([
  //       Animated.cond(
  //         Animated.eq(state, State.PAUSED),
  //         Animated.stopClock(clock),
  //         Animated.startClock(clock)
  //       ),
  //       loop({
  //         clock: clock,
  //         boomerang: true,
  //         duration: 3000,
  //         autoStart: false,
  //       }),
  //     ]),
  //   []
  // );

  // Animated.useCode(() => {
  //   if (animating) {
  //     return Animated.set(state, State.PLAYING);
  //   } else {
  //     return Animated.set(state, State.PAUSED);
  //   }
  // }, [animating]);

  // const src = [{ rotateZ: Math.PI / 2 }, { scale: 0.5 }];
  // const dst = [{ skewX: Math.PI / 6 }];

  // const transform = tween2d(progress, src, dst);

  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0.1, 1],
  });

  ///Animated.useCode(() => Animated.debug("Progress: ", progress), []);

  //const progress = React.useRef(new Animated.Value(0)).current;

  // const progress = React.useMemo(() => new Animated.Value(0), []);

  // const tiggerAnimation = React.useCallback(() => {
  //   progress.setValue(0);
  //   Animated.timing(progress, {
  //     duration: 3000,
  //     toValue: 1,
  //     easing: Easing.linear,
  //   }).start();
  // }, []);

  // React.useEffect(() => {
  //   let interruped = false;
  //   async function doSomething() {
  //     console.log("doing smoething");
  //     let sum = 0;

  //     while (!interruped) {
  //       const iterations = Math.round(Math.random() * 4000000 + 1000000);
  //       for (let i = 0; i < iterations; i++) {
  //         sum += i;
  //       }
  //       const randomSleep = Math.random();
  //       if (randomSleep < 0.1) {
  //         //console.log("Sleeping");
  //         await sleep(10);
  //       }
  //     }
  //   }
  //   //doSomething();

  //   tiggerAnimation();

  //   return () => {
  //     interruped = true;
  //     console.log("Interruped");
  //   };
  // }, []);

  // const rotationZ = progress.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, Math.PI * 2],
  // });

  // const scale = progress.interpolate({
  //   inputRange: [0.5, 0.8, 1],
  //   outputRange: [0.8, 1.5, 1],
  // });

  // const width = progress.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [100, 200],
  // });

  const rotationZ = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI * 2],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          setAnimating((a) => !a);
        }}
      >
        <Animated.View
          style={[
            styles.box,
            {
              opacity: opacity,
              transform: [
                {
                  rotateZ: rotationZ,
                },
              ],
            },
          ]}
        />
      </TouchableOpacity>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  box: {
    backgroundColor: "purple",
    width: 100,
    height: 100,
  },
});
