import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 4,
    paddingTop: 25,
  },
  footer: {
    flex: 1,
    backgroundColor: "#536DFE",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBox: {
    padding: 15,
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    marginTop: -70,
    marginBottom: 10,
    borderRadius: 100,

    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "#536DFE",
  },
  button: {
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    color: "#536DFE",
  },
});

export default styles;