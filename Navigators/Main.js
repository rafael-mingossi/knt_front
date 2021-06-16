import React, { useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

//Stacks
import HomeNavigator from "./HomeNavigator";
import FavouriteNavigator from "./FavouriteNavigator";

import FavouriteIcon from "../Shared/FavouriteIcon";

import { logoutUser } from "../Context/actions/Auth.actions";
import AuthGlobal from "../Context/store/AuthGlobal";

const Tab = createBottomTabNavigator();

const Main = () => {
  const context = useContext(AuthGlobal);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      logoutUser(context.dispatch);
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
