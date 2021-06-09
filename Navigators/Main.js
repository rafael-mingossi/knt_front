import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

//import AuthGlobal from "../Context/store/AuthGlobal";

//Stacks
import HomeNavigator from "./HomeNavigator";
import FavouriteNavigator from "./FavouriteNavigator";

import FavouriteIcon from "../Shared/FavouriteIcon";

const Tab = createBottomTabNavigator();

const Main = () => {
  //const context = useContext(AuthGlobal);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="star" color={color} size={26} />
              <FavouriteIcon />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
