import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Favourite from "../Screens/Favourite/Favourite";
//import SingleProduct from "../Screens/Products/SingleProduct";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function FavouriteNavigator() {
  return <MyStack />;
}
