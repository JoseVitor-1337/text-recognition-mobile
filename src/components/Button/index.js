import React from "react";

import { Button, ButtonText } from "./style.js";

export default function MainButton({ text, onPress, color, backgroundColor, width }) {
  return (
    <Button
      width={width}
      onPress={onPress}
      backgroundColor={backgroundColor || "#ffffff"}
      activeOpacity={0.8}
    >
      <ButtonText color={color || "#536dfe"}>{text}</ButtonText>
    </Button>
  );
}
