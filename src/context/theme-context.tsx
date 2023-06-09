import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const ThemeContext = React.createContext({
  isDarkTheme: true,
  changeTheme: () => {},
})

export const ThemeContextProvider = (props: Props) => {
  const storedTheme = localStorage.getItem('darkTheme')
  const token = storedTheme === 'true' ? true : false
  const [isDark, setIsDark] = useState(token)

  const changeThemeHandler = () => {
    setIsDark((prev) => !prev)
    localStorage.setItem('darkTheme', `${!isDark}`)
  }

  const contextValue = {
    isDarkTheme: isDark,
    changeTheme: changeThemeHandler,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
