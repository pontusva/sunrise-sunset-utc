import React from 'react'
import styled from 'styled-components/native'
import { Appbar } from 'react-native-paper'
import * as SplashScreen from 'expo-splash-screen'
import { SunSet } from '../components/homeScreen/SunSet'
import { useState, useEffect, useCallback } from 'react'
import ThemeSwitch from '../components/ThemeSwitch'

SplashScreen.preventAutoHideAsync()

export const HomeScreen = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        setAppIsReady(false)
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }
  return (
    <>
      <Container onLayout={onLayoutRootView}>
        <Appbar.Header elevated statusBarHeight={5}>
          <Appbar.Content title="Home" />

          <ThemeSwitch />
        </Appbar.Header>
        <SunSet />
      </Container>
    </>
  )
}

const Container = styled.View`
  flex: 1;
`
