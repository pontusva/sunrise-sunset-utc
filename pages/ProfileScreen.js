import { View } from 'react-native'
import { useTheme, Appbar } from 'react-native-paper'
import ThemeSwitch from '../components/ThemeSwitch'

export const ProfileScreen = ({ navigation }) => {
  const theme = useTheme()
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Appbar.Header elevated statusBarHeight={5}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
        <ThemeSwitch />
      </Appbar.Header>
    </View>
  )
}
