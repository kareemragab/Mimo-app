import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, I18nManager, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./src/redux/reducers";
import { Restart } from "fiction-expo-restart";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (I18nManager.isRTL) {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      Restart();
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <NavigationContainer>{loaded && <Routes />}</NavigationContainer>
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
