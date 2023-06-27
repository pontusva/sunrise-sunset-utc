import {
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import styled from 'styled-components/native'
import { LocationParent } from '../components/locationScreen/LocationParent'
import { useState } from 'react'

export const LocationScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      navigation.reset({ index: 0, routes: [{ name: 'Location' }] })
    }, 2000)
  }
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}
    // >

    <DissmissKeyboard>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <LocationParent navigation={navigation} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </DissmissKeyboard>
    // </KeyboardAvoidingView>
  )
}

const DissmissKeyboard = styled.View`
  flex: 1;
  justify-content: center;
  background-color: yellow;
  align-items: center;
  flex-direction: row;
`
