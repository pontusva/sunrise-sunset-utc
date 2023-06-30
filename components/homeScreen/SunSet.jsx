import { useTheme, Text } from 'react-native-paper'
import styled from 'styled-components/native'

export const SunSet = () => {
  const theme = useTheme()
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.onBackground }}>Theme</Text>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`
