import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Favourite from "../../screens/Favourite/Favourite";

export default Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={Favourite}
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
