import { useState } from 'react'

// import { Text } from 'react-native-paper'
import styled from 'styled-components/native'
import { View, Text, ImageBackground } from 'react-native'

import { CityInput } from './CityInput'

export const LocationParent = ({ navigation }) => {
  const [city, setCity] = useState(null)

  const fetchLocation = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},SE&limit=1&appid=640cf47e17be12427828751625fd1f45`
    )
    const data = await response.json()
    console.log(data)
    setCity('')
    return data
  }

  return (
    <Container>
      {/* {city ? <Text>{city}</Text> : <Text>no city</Text>} */}
      <CityInput
        navigation={navigation}
        fetchLocation={fetchLocation}
        city={city}
        setCity={setCity}
      />
    </Container>
  )
}

const Container = styled.View`
  height: 350px;
  /* border: 5px solid orange; */
`
