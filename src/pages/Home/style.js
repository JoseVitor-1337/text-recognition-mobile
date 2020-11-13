import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",

  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    textAlign: "justify",
    color: "#FFFFFF",
  },
  textContainer: {
    flex:1,
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
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
    color: "#536DFE",
  },
});

export default styles;
