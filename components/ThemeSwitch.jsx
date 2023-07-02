import { useContext } from 'react'
import { Switch } from 'react-native-paper'
import { PreferencesContext } from '../context/ThemeContext'

const ThemeSwitch = () => {
  const { isThemeDark, toggleTheme } = useContext(PreferencesContext)

  return (
    <Switch
      style={{ marginRight: 20 }}
      value={isThemeDark}
      onValueChange={toggleTheme}
    />
  )
}

export default ThemeSwitch
