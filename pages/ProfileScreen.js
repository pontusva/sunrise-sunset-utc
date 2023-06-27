import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'

export const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    </SafeAreaView>
  )
}
