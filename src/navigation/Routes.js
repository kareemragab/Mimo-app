import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import BottomNavigator from "./BottomNavigator";
import Details from "../screens/Details/Details";

export default Routes = () => {
  return (
    <Stack.Navigator initialRouteName="BottomNavigator">
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{
          header: () => {},
          headerStyle: {
            height: 0,
          },
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          header: () => {},
          headerStyle: {
            height: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};
