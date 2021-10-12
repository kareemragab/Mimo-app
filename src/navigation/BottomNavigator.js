import React, { useEffect, useState } from "react";
import { Image, Text, StyleSheet, Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeStack from "./BottomNavigations/HomeStack";
import FavouriteStack from "./BottomNavigations/FavouriteStack";
import ProfileStack from "./BottomNavigations/ProfileStack";
import CatalogueStack from "./BottomNavigations/CatalogueStack";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

// import { getUserNotificationsCount } from './../services/APIs';
import { useDispatch, useSelector } from "react-redux";

const TabNavigator = () => {
  const Favourites = useSelector((state) => state.FavouritesReducer.Favourites);
  // const [notif, setNotif] = useState(0);
  // const [chatcount, setchatcount] = useState(0);

  // useEffect(() => {
  //   if (User) {
  //     setInterval(() => {
  //       getUserNotificationsCount(User._id, response => {
  //         if (response.data) {
  //           setNotif(response.data.message);
  //         }
  //       });
  //       getUserNotificationsCount(User._id, response => {
  //         if (response.data) {
  //             setchatcount(response.data.message2);
  //         }
  //       });

  //     }, 3000);
  //   }
  // }, []);

  return (
    <Tab.Navigator
      initialRouteName={"CatalogueStack"}
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        style: styles.tabBarStyle,
        // activeTintColor: "#845FA1",
        // inactiveTintColor: "#9B9B9B",
      }}
    >
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          unmountOnBlur: true,
          title: () => {},
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                style={[
                  styles.tabItemTitle,
                  { color: focused ? "#845FA1" : "#9B9B9B" },
                ]}
              >
                Profile
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="person-outline"
                style={{ marginTop: 4 }}
                size={Platform.OS == "android" ? 26 : 27}
                color={focused ? "#845FA1" : "#9B9B9B"}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="FavouriteStack"
        component={FavouriteStack}
        options={{
          unmountOnBlur: true,
          title: () => {},
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                style={[
                  styles.tabItemTitle,
                  { color: focused ? "#845FA1" : "#9B9B9B" },
                ]}
              >
                Favourite
              </Text>
            );
          },

          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <MaterialIcons
                  name="favorite-outline"
                  size={Platform.OS == "android" ? 26 : 26}
                  color={focused ? "#845FA1" : "#9B9B9B"}
                  style={{ marginTop: Platform.OS == "android" ? 3 : 5 }}
                />
                {Favourites.length > 0 && (
                  <View style={styles.badge}>
                    <Text
                      allowFontScaling={false}
                      numberOfLines={1}
                      adjustsFontSizeToFit={true}
                      style={[styles.notifNu]}
                    >
                      {Favourites.length}
                    </Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="CatalogueStack"
        component={CatalogueStack}
        options={{
          unmountOnBlur: true,

          title: () => {},
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                style={[
                  styles.tabItemTitle,
                  { color: focused ? "#845FA1" : "#9B9B9B" },
                ]}
              >
                Catalogue
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <Entypo
                  name="grid"
                  size={Platform.OS == "android" ? 28 : 28}
                  color={focused ? "#845FA1" : "#9B9B9B"}
                  style={{ marginTop: 3 }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          title: () => {},
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text
                allowFontScaling={false}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
                style={[
                  styles.tabItemTitle,
                  { color: focused ? "#845FA1" : "#9B9B9B" },
                ]}
              >
                Home
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <AntDesign
                name="home"
                style={{ marginTop: 4 }}
                size={Platform.OS == "android" ? 26 : 28}
                color={focused ? "#845FA1" : "#9B9B9B"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    height: Platform.OS == "android" ? 65 : 75,
    paddingBottom: Platform.OS == "android" ? 10 : 18,
  },
  tabStyle: {
    borderTopColor: "#EFEFEF",
    borderTopWidth: 1,
    paddingHorizontal: 4,
    borderTopWidth: 0,
  },
  tabItemTitle: {
    width: "100%",
    // fontFamily: "Cairo-Regular",
    textAlign: "center",
    fontSize: Platform.OS == "android" ? 12 : 14,
    color: "#FFFFFF",
    lineHeight: 16,
    fontWeight: Platform.OS == "android" ? "700" : "normal",
    marginTop: 1,
  },

  badge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#D6A230",
    position: "absolute",
    top: -17,
    left: -14,
    justifyContent: "center",
    alignItems: "center",
  },
  notifNu: { color: "#FFF", fontWeight: "bold" },
});
