import React from 'react'
import Animated, { FadeIn } from 'react-native-reanimated'

export const FadeInView = ({ children }) => {
  return (
    <>
      <Animated.View style={{ flex: 1 }} layout={FadeIn.duration(1200)}>
        {children}
      </Animated.View>
    </>
  )
}
