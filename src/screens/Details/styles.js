import { StyleSheet } from "react-native";

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
      header: {
        flexDirection: "row",
        height: 90,
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 25,
        paddingTop: 28,
      },
      itemTxtPrice: {
        width: "100%",
        textAlign: "right",
        fontSize: 28,
        color: "#40304D",
        marginTop: 30,
        fontWeight: "bold",
      },
      itemTxtDesc: {
        width: "100%",
        textAlign: "right",
        fontSize: 20,
        color: "#40304D",
      },
});

export default styles;
