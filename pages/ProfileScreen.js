import { View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { useTheme, Appbar, Text, Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner'
import ThemeSwitch from '../components/ThemeSwitch'

export const ProfileScreen = ({ navigation }) => {
  const theme = useTheme()
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <Appbar.Header elevated statusBarHeight={5}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="QR-Scanner" />
        <ThemeSwitch />
      </Appbar.Header>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  )
}
