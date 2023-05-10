import { useContext } from 'react'

import ThemeContext from './components/context/theme-context'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './styles/_global.scss'
import styles from './App.module.scss'

function App() {
  const ctx = useContext(ThemeContext)
  const classes = `${styles.app} ${ctx.isDarkTheme ? styles.dark : ''}`

  return (
    <div className={classes}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
