import { ImageBackground, View, Text } from 'react-native'

import styled from 'styled-components/native'

export const SunSet = () => {
  return (
    <Container>
      <BackgroundImage
        style={{ flex: 1 }}
        source={require('../../assets/sunset.jpg')}
        resizeMode="cover"
      >
        <Text>asd</Text>
      </BackgroundImage>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`
