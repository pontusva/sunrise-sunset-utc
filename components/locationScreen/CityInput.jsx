import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TextInput } from 'react-native-paper'
import { Button, View, Text, Keyboard } from 'react-native'
import { FetchSunPattern } from './FetchSunPattern'

export const CityInput = ({ navigation, fetchLocation, city, setCity }) => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [visibleCity, setVisibleCity] = useState('')

  const handleLatLonPromise = async () => {
    fetchLocation().then((res) => {
      setLat(res[0].lat)
      setLon(res[0].lon)
      console.log(lat, lon)
    })
  }

  return (
    <Container>
      <DataContainer>
        {visibleCity && <Text>{visibleCity}</Text>}
        {lat && lon ? <FetchSunPattern lat={lat} lon={lon} /> : null}
      </DataContainer>
      <View>
        <TextInput
          mode="outlined"
          style={{ width: '80%', alignSelf: 'center' }}
          label="Enter city..."
          placeholder="Type something"
          value={city}
          onChangeText={(city) => setCity(city)}
          onSubmitEditing={async (event) => {
            setVisibleCity(city)
            setCity('')
            await handleLatLonPromise()
          }}
        />
        <Button
          title="Fetch"
          onPress={async () => {
            await handleLatLonPromise()
            Keyboard.dismiss()
          }}
        />
      </View>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  /* border: 5px solid pink; */
`

const DataContainer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
  /* border: 5px solid orange; */
  /* border-width: 5px; */
`
