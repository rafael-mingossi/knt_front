import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//Components
import Header from "./Shared/Header";
import UserNavigator from "./Navigators/UserNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <UserNavigator />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}
