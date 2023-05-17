import { useContext } from 'react'

import ThemeContext from './context/theme-context'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import './styles/_global.scss'
import styles from './App.module.scss'

function App() {
  const ctx = useContext(ThemeContext)
  const classes = `${styles.app} ${ctx.isDarkTheme ? styles.dark : ''}`

  return (
    <div className={classes}>
      <div></div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
