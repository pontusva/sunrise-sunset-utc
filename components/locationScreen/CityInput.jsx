import React, { useState } from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { TextInput, Text, Button } from 'react-native-paper'
import { View, Keyboard } from 'react-native'
import { FetchSunPattern } from './FetchSunPattern'
import { FadeInView } from '../FadeInView'

export const CityInput = ({ fetchLocation, city, setCity }) => {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [visibleCity, setVisibleCity] = useState('')

  const handleLatLonPromise = async () => {
    fetchLocation().then((res) => {
      setLat(res[0].lat)
      setLon(res[0].lon)
    })
  }

  return (
    <Container>
      <DataContainer>
        <FadeInView>
          {visibleCity && <Text variant="headlineLarge">{visibleCity}</Text>}
          {lat && lon && <FetchSunPattern lat={lat} lon={lon} />}
        </FadeInView>
      </DataContainer>

      <View>
        <TextInput
          mode="outlined"
          style={{ width: '80%', alignSelf: 'center' }}
          label="Enter city..."
          placeholder="Type something"
          value={city}
          onChangeText={(city) => setCity(city)}
          onSubmitEditing={async () => {
            setVisibleCity(city)
            setCity('')
            await handleLatLonPromise()
          }}
        />
        <Button
          mode="contained-tonal"
          style={{ width: '75%', alignSelf: 'center', marginTop: 10 }}
          theme={{ roundness: 1.5 }}
          onPress={async () => {
            setVisibleCity(city)
            setCity('')
            await handleLatLonPromise()
            Keyboard.dismiss()
          }}
        >
          Tap
        </Button>
      </View>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`

const DataContainer = styled.View`
  /* flex: 3; */
  align-items: center;
  justify-content: center;
  /* border: 5px solid orange; */
  /* border-width: 5px; */
`
PropTypes.CityInput = {
  fetchLocation: PropTypes.func,
  city: PropTypes.string,
  setCity: PropTypes.func,
}
