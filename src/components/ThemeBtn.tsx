import { useContext } from 'react'
import styles from './ThemeBtn.module.scss'
import ThemeContext from './context/theme-context'
const ThemeBtn = () => {
  const ctx = useContext(ThemeContext)

  const classes = `${styles.btn} ${ctx.isDarkTheme ? styles.dark : ''}`
  return (
    <button
      className={classes}
      onClick={ctx.changeTheme}
    ></button>
  )
}

export default ThemeBtn
