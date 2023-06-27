import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const FetchSunPattern = ({ lat, lon }) => {
  const [sunPattern, setSunPattern] = useState(null)
  const fetchSunPattern = async () => {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`
    )
    const data = await response.json()
    setSunPattern(data)
    console.log(data)
  }

  useEffect(() => {
    fetchSunPattern()
  }, [lat, lon])
  return (
    // TODO: fix keyExtractor[]

    <>
      {sunPattern && (
        <View>
          <Text>Sunrise: {sunPattern.results.sunrise}</Text>
          <Text>Sunset: {sunPattern.results.sunset}</Text>
          <Text>Day length: {sunPattern.results.day_length}</Text>
        </View>
      )}
    </>
  )
}
