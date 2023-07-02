import { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { useTheme } from 'react-native-paper'

import styled from 'styled-components/native'

import { CityInput } from './CityInput'

export const LocationParent = ({ navigation }) => {
  const [city, setCity] = useState(null)
  const [refreshing, setRefreshing] = useState(false)
  const theme = useTheme()
  const fetchLocation = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},SE&limit=1&appid=640cf47e17be12427828751625fd1f45`
    )
    const data = await response.json()
    console.log(data)
    setCity('')
    return data
  }
  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      navigation.reset({ index: 0, routes: [{ name: 'Location' }] })
    }, 2000)
  }
  return (
    <Container>
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
        <CityInput
          navigation={navigation}
          fetchLocation={fetchLocation}
          city={city}
          setCity={setCity}
        />
      </ScrollView>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  /* height: 200px; */
  /* margin: 20px; */
  /* border: 5px solid orange; */
`
