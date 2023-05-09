import React, { useContext } from 'react'

import Footer from './components/Footer'

import './styles/_global.scss'
import styles from './App.module.scss'

import ThemeContext  from './components/context/theme-context'

function App() {

  const ctx = useContext(ThemeContext)

  const classes = `${styles.app} ${ctx.isDarkTheme ? styles.dark : ''}`

  return (
    <div className={classes}>
      <button onClick={ctx.changeTheme} >Toggle</button>
      <Footer />
    </div>
  )
}

export default App
