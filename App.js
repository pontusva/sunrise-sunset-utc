import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { HomeScreen } from './pages/HomeScreen'
import { LocationScreen } from './pages/LocationScreen'
import 'react-native-gesture-handler'
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper'
import merge from 'deepmerge'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileScreen } from './pages/ProfileScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PreferencesContext } from './context/ThemeContext'
import { useState, useCallback, useMemo } from 'react'

const Tab = createMaterialBottomTabNavigator()

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

export default function App() {
  // useState, useCallback and useMemo is used to toggle between themes. Information about this can be found in the react-native-paper documentation. https://callstack.github.io/react-native-paper/4.0/theming-with-react-navigation.html.

  const [isThemeDark, setIsThemeDark] = useState(false)

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark)
  }, [isThemeDark])

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  )

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
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
              <NavigationContainer theme={theme}>
                <Tab.Navigator
                  shifting={true}
                  barStyle={{
                    backgroundColor: CombinedDarkTheme.colors.secondary,
                  }}
                  // theme={CombinedDarkTheme}
                  // fånga upp när man klickar på ett ikon i navigeringsfältet https://stackoverflow.com/questions/60742984/react-native-navigation-v5-tab-press-not-working
                  screenListeners={{
                    tabPress: () => {
                      console.log('Var tänkt att användas till något...')
                    },
                  }}
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
      </PaperProvider>
    </PreferencesContext.Provider>
  )
}
