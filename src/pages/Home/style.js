import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#536DFE",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  imageBox: {
    width: 150,
    height: 150,
    marginBottom: -135,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "#536DFE",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    textAlign: "justify",
    color: "#536DFE",
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
    backgroundColor: "#536DFE",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default styles;
