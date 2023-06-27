import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { HomeScreen } from './pages/HomeScreen'
import { LocationScreen } from './pages/LocationScreen'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileScreen } from './pages/ProfileScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView
        style={{
          flex: 1,
        }}
        edges={['right', 'top', 'left']}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <NavigationContainer>
            <Tab.Navigator
              sceneAnimationEnabled={true}
              sceneAnimationType="shifting"
              shifting={true}
              // fånga upp när man klickar på ett ikon i navigeringsfältet https://stackoverflow.com/questions/60742984/react-native-navigation-v5-tab-press-not-working
              screenListeners={{
                tabPress: (e) => {
                  console.log('Var tänkt att användas till något...')
                },
              }}
              // theme={{ colors: { secondaryContainer: 'yellow' } }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  // tabBarBadge: 3,
                  tabBarLabel: 'Home',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Location"
                component={LocationScreen}
                options={{
                  tabBarLabel: 'App',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons name="apps" size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" size={26} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
