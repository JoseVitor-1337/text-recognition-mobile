import React, { useRef, useEffect } from "react";

import { Animated } from 'react-native'
import { Paragraph, Spinner } from './style'

export default function Loading({ text, loading }) {
  const rotateAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(rotateAnimation , {
      toValue: 5040,
      useNativeDriver: true,
      duration: 10000
    }).start()
  }, [loading])



  const rotationInterpolate = rotateAnimation.interpolate({
    inputRange:  [0, 720],
    outputRange: ["0deg", "720deg"]
  })

  const animationStyle = {
   
    transform: [{ rotate: rotationInterpolate}]
  }


  return (
    <>
      <Animated.View style={animationStyle} >
        <Spinner  name="spinner-refresh" size={40} color="rgba(0, 0, 0, 0.85)" />
      </Animated.View>
      <Paragraph>{text || 'Carregando...'}</Paragraph>
    </>
  );
}
