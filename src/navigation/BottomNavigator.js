import React from "react";
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
import { useDispatch, useSelector } from "react-redux";

const TabNavigator = () => {
  const Favourites = useSelector((state) => state.FavouritesReducer.Favourites);

  return (
    <Tab.Navigator
      initialRouteName={"CatalogueStack"}
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        style: styles.tabBarStyle,
        activeTintColor: "#845FA1",
        inactiveTintColor: "#9B9B9B",
      }}
    >
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
                style={[styles.tabItemTitle, { color }]}
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
                color={color}
              />
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
                style={[styles.tabItemTitle, { color }]}
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
                  color={color}
                  style={{ marginTop: 3 }}
                />
              </View>
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
                style={[styles.tabItemTitle, { color }]}
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
                  color={color}
                  style={{ marginTop: Platform.OS == "android" ? 3 : 5 }}
                />
              </View>
            );
          },

          tabBarBadge: Favourites.length,
          tabBarBadgeStyle: Favourites.length
            ? styles.badge
            : { color: "#0000", backgroundColor: "#0000" },
        }}
      />

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
                style={[styles.tabItemTitle, { color }]}
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
                color={color}
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
    top: -12,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
