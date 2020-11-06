import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#536DFE",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: -135,
    borderStyle: "solid",
    borderColor: "#536DFE",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    textAlign: "justify",
    color: "#FFF",
  },
  textContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    paddingTop: 50,
  },
  button: {
    height: 50,
    padding: 10,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    color: "#536DFE",
  },
});

export default styles;
