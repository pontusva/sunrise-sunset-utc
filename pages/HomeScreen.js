import React from 'react'
import styled from 'styled-components/native'
import { Appbar, useTheme } from 'react-native-paper'
import { SunSet } from '../components/homeScreen/SunSet'

import ThemeSwitch from '../components/ThemeSwitch'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const HomeScreen = () => {
  const theme = useTheme()
  return (
    <>
      <Container>
        <Appbar.Header elevated statusBarHeight={5}>
          <MaterialCommunityIcons
            dark
            style={{
              color: theme.colors.onBackground,
              marginLeft: 20,
              // position: 'absolute',
            }}
            name="unicorn"
            size={26}
          />
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
