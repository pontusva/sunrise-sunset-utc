import React from 'react'
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'

export const ProfileScreen = ({ navigation }) => {
  const theme = useTheme()
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: theme.colors.background }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    </SafeAreaView>
  )
}
