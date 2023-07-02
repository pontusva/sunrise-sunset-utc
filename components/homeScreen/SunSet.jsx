import { useTheme, Text } from 'react-native-paper'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export const SunSet = () => {
  const theme = useTheme()
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <MaterialCommunityIcons
        dark
        style={{
          color: theme.colors.onBackground,
        }}
        name="robot-happy-outline"
        size={26}
      />
      <Text
        variant="bodyMedium"
        style={{
          color: theme.colors.onBackground,
          width: 200,
          textAlign: 'justify',
        }}
      >
        UTC Sun tracker. This app shows sunrise and sunset times in Coordinated
        Universal Time (UTC), which is a universal time standard used worldwide.
      </Text>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
