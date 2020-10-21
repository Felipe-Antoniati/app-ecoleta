import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/p_landing";
import Details from "../pages/p_details";
import Points from "../pages/p_points";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#F0F0F5",
          },
        }}
      >
        <AppStack.Screen name="Landing" component={Landing} />
        <AppStack.Screen name="Details" component={Details} />
        <AppStack.Screen name="Points" component={Points} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
