import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Header,
  Link,
} from "./style.js";

export default function NavigationHeader({ navigation, goTo, pageTitle }) {

  function goBack() {
    navigation.navigate(goTo);
  }
  return (
    <Header>
      <Feather
        onPress={goBack}
        name="arrow-left-circle"
        size={32}
        color="rgba(0, 0, 0, 0.85)"
      />
      <Link>{pageTitle}</Link>
    </Header>
  );
}
