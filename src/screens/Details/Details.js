import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Details = ({ navigation, route }) => {
  const category = route.params.Details;

  const renderHeader = () => {
    return (
      <LinearGradient colors={["#845FA1", "#34283E"]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons
              name={"keyboard-backspace"}
              size={30}
              color={"#fff"}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient colors={["#845FA1", "#34283E"]}>
        <StatusBar barStyle={"light-content"} />
      </LinearGradient>
      <View style={styles.container}>
        {renderHeader()}

        <View style={{ marginTop: 25, marginHorizontal: 28 }}>
          <Text style={styles.itemTxtDesc}>{category.description}</Text>
          <Text style={styles.itemTxtPrice}>${category.price}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
