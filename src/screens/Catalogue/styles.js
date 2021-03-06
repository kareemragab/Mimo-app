import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#E5E5E5",
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 22,
    paddingTop: 12,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 0,
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemSquare: {
    width: width * 0.43,
    alignItems: "center",
    marginTop: 15,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: width * 0.026,
  },
  itemColSquare: {
    paddingHorizontal: 6,
    width: width * 0.44,
    borderRadius: 5,
    marginTop: -20,
  },
  itemImageSquare: {
    width: width * 0.44,
    height: width * 0.44,
    borderRadius: 12,
    backgroundColor: "#fff",
    resizeMode: "cover",
  },
  itemTxt: {
    width: "100%",
    textAlign: "left",
    fontSize: 14,
    color: "#40304D",
    marginTop: 10,
  },
  itemTxtDesc: {
    width: "100%",
    textAlign: "left",
    fontSize: 14,
    color: "#40304D",
  },
  itemTxtPrice: {
    width: "100%",
    textAlign: "left",
    fontSize: 20,
    color: "#40304D",
    marginTop: 5,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTxt: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFF",
    justifyContent: "center",
    marginTop: 26,
  },

  FavBtn: {
    padding: 10,
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    borderRadius: 30,
    marginRight: 14,
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  AllCategory: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "#fff",
    color: "#34283E",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    marginHorizontal: 4,
    borderRadius: 40,
  },
  AllCategoryPressed: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "#D6A230",
    color: "#FFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    marginHorizontal: 4,
    borderRadius: 40,
  },
  ListContent: { marginTop: 5, marginHorizontal: 10, marginBottom: 5 },
  itemCount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#34283E",
    marginHorizontal: 6,
    marginTop: 10,
  },
});

export default styles;
