import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateFeedback from "./pages/CreateFeedback";
import Corrections from "./pages/Corrections";
import FeedbackPreview from "./pages/FeedbackPreview";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Dashboard" component={Dashboard} />
        <Screen name="CreateFeedback" component={CreateFeedback} />
        <Screen name="Corrections" component={Corrections} />
        <Screen name="FeedbackPreview" component={FeedbackPreview} />
      </Navigator>
    </NavigationContainer>
  );
}
