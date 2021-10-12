import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import { getAllData } from "./../../services/APIs";
import { useDispatch, useSelector } from "react-redux";
import { setFavourite } from "../../redux/actions/FavouritesActions";

const Catalogue = ({ navigation }) => {
  const [OriginalProducts, setOriginalProducts] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const Favourites = useSelector((state) => state.FavouritesReducer.Favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(Favourites);
  }, [Favourites]);

  const getData = () => {
    getAllData((response) => {
      if (response.data) {
        setOriginalProducts(response.data.Products);
        setProducts(response.data.Products);
        setCategories([...["All"], ...response.data.Categories]);
      }
    });
  };

  const isFavourite = (id) => {
    let arr = [...Favourites];
    const index = arr.findIndex((item) => item == id);
    if (index >= 0) {
      return true;
    }
    return false;
  };

  const itemPressed = (item) => {
    dispatch(setFavourite(item.id));
  };

  const categoryPressed = (cat) => {
    setCategory(cat);
    if (cat == "All") {
      setProducts(OriginalProducts);
    } else {
      let productsArr = [...OriginalProducts];
      let arr = productsArr.filter((item) => {
        console.log(item.category, " ---- ", cat);
        return item.category == cat;
      });
      setProducts(arr);
    }
  };

  const renderSquareItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", { Details: item });
        }}
        key={index.toString()}
        style={styles.itemSquare}
      >
        <Image source={{ uri: item.image }} style={styles.itemImageSquare} />
        <TouchableOpacity
          onPress={() => {
            itemPressed(item);
          }}
          style={styles.FavBtn}
        >
          <AntDesign
            name={isFavourite(item.id) ? "heart" : "hearto"}
            color={"#40304D"}
            size={20}
          />
        </TouchableOpacity>
        <View style={styles.itemColSquare}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={styles.itemTxt}
          >
            {item.title}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={styles.itemTxtDesc}
          >
            {item.description}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={styles.itemTxtPrice}
          >
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <LinearGradient colors={["#845FA1", "#34283E"]}>
        <View style={styles.header}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={styles.headerTxt}
          >
            Clothing
          </Text>
        </View>
      </LinearGradient>
    );
  };

  const _renderItem = ({ item }) => (
    <View style={{ marginTop: 15 }}>
      <TouchableOpacity onPress={() => categoryPressed(item)}>
        <Text style={ category == item ? styles.AllCategoryPressed : styles.AllCategory}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient colors={["#845FA1", "#34283E"]}>
        <StatusBar barStyle={"light-content"} />
      </LinearGradient>
      <View style={styles.container}>
        {renderHeader()}
        <View style={styles.ListContent}>
          {Categories.length > 0 ? (
            <FlatList
              data={Categories}
              keyExtractor={(item) => item}
              renderItem={_renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 15 }}
            />
          ) : (
            <ActivityIndicator size="large" color="#40304D" />
          )}
          <Text style={styles.itemCount}>{Products.length} items</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          {Products.length > 0 ? (
            <View style={styles.gridContainer}>
              {Products.map((item, index) => {
                return renderSquareItem(item, index);
              })}
            </View>
          ) : (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size="large" color="#40304D" />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Catalogue;
