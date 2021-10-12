import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Text } from "react-native";

const Favourite = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"#34283E"} barStyle={"light-content"} />
      <View style={styles.head}>
        <Text style={styles.soonSty}>Soooooon :)</Text>
      </View>
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  head: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "90%",
  },
  soonSty: { color: "#845FA1", marginTop: 50, fontSize: 25 },
});
