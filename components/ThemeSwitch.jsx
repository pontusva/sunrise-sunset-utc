import { useState, useContext } from 'react'
import { Switch } from 'react-native-paper'
import { PreferencesContext } from '../context/ThemeContext'

const ThemeSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false)
  const { toggleTheme } = useContext(PreferencesContext)

  const onToggleSwitch = () => {
    toggleTheme()
    setIsSwitchOn(!isSwitchOn)
  }

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
}

export default ThemeSwitch
