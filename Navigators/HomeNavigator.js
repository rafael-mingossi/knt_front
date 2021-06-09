import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CharacterContainer from "../Screens/Characters/CharacterContainer";
//import SingleProduct from "../Screens/Products/SingleProduct";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={CharacterContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
