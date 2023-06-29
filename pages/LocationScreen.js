import {
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native'
import { useTheme, Appbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { LocationParent } from '../components/locationScreen/LocationParent'
import { useState } from 'react'

export const LocationScreen = ({ navigation }) => {
  const theme = useTheme()
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      navigation.reset({ index: 0, routes: [{ name: 'Location' }] })
    }, 2000)
  }
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header elevated statusBarHeight={5}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Sunset/Sunrise" />
      </Appbar.Header>
      <DissmissKeyboard style={{ backgroundColor: theme.colors.background }}>
        {/* <TouchableWithoutFeedback> */}
        <ScrollView
          // snapToInterval={300}
          //disableScrollViewPanResponder makes it possible to click a button inside a scrollview.
          // it's also recommended to use it with snapToInterval because the button could be clicked when scrolling
          disableScrollViewPanResponder={true}
          refreshControl={
            <RefreshControl
              // tintColor is for ios. Not sure if progressBackgroundColor is working...
              progressBackgroundColor={[theme.colors.primary]}
              tintColor={theme.colors.primary}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <LocationParent navigation={navigation} />
        </ScrollView>
        {/* </TouchableWithoutFeedback> */}
      </DissmissKeyboard>
    </View>
  )
}

const DissmissKeyboard = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
