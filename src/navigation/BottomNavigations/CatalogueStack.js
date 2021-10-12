import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Catalogue from "../../screens/Catalogue/Catalogue";
import Details from "../../screens/Details/Details";

export default Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Catalogue">
      <Stack.Screen
        name="Catalogue"
        component={Catalogue}
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
