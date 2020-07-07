import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { createNativeStackNavigator } from "react-native-screens/native-stack";
import * as React from "react";
import { ColorSchemeName, Animated } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import Scrollable from "../screens/Scrollable";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
//const Stack = createStackNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Scrollable"
        component={Scrollable}
        options={{
          headerShown: true,
          headerBackTitle: "Back",
          title: "Scrollable Screen",
          cardStyleInterpolator: ({ current }) => {
            return {
              cardStyle: {
                opacity: current.progress,
              },
            };
          },

          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 800,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 800,
              },
            },
          },
        }}
      />
    </Stack.Navigator>
  );
}
