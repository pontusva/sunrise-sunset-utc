import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

export const FetchSunPattern = ({ lat, lon }) => {
  const [sunPattern, setSunPattern] = useState(null)
  const fetchSunPattern = async () => {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`
    )
    const data = await response.json()
    setSunPattern(data)
  }

  useEffect(() => {
    fetchSunPattern()
  }, [lat, lon])
  return (
    <>
      {sunPattern && (
        <View>
          <Text variant="bodyLarge">Sunrise: {sunPattern.results.sunrise}</Text>
          <Text variant="bodyLarge">Sunset: {sunPattern.results.sunset}</Text>
          <Text variant="bodyLarge">
            Day length: {sunPattern.results.day_length}
          </Text>
        </View>
      )}
    </>
  )
}
