import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./src/redux/reducers";

const App = () => {
  return (
    <>
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
