import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import { useTheme, Appbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { LocationParent } from '../components/locationScreen/LocationParent'
import ThemeSwitch from '../components/ThemeSwitch'

export const LocationScreen = ({ navigation }) => {
  const theme = useTheme()

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated statusBarHeight={5}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Sunset/Sunrise" />

        <ThemeSwitch />
      </Appbar.Header>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <DissmissKeyboard
          style={{ flex: 1, backgroundColor: theme.colors.background }}
        >
          <LocationParent navigation={navigation} />
        </DissmissKeyboard>
      </TouchableWithoutFeedback>
    </View>
  )
}

const DissmissKeyboard = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
