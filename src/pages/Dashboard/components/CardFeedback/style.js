import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#d9d9d9",
    borderWidth: 3,
    borderStyle: "solid",
    paddingHorizontal: 10,
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,

    justifyContent: "space-between"
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    textAlign: "justify",
    color: "#FFFFFF",
  },
  date: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    textAlign: "justify",
    color: "#FFFFFF",
  },
  table: {
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  tableText: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    textAlign: "justify",
    color: "#FFFFFF",
  },

});

export default styles;
