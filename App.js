import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import InstagramScreen from "./screens/in";
import FacebookScreen from "./screens/fb";

const BottomTabNavigator = createBottomNavigator({
  Facebook: FacebookScreen,
  Instagram: InstagramScreen,
})

const AppNavigator = createAppContainer(BottomTabNavigator)

export default function App() {
  return (
    <AppNavigator />
  )
}
