import { useContext } from 'react'
import ShowFilter from './ShowFilter'
import ThemeContext from './context/theme-context'

import styles from './TasksMenu.module.scss'

const TasksMenu = () => {
  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme



  const classes = `${styles.menu} ${isDark ? styles.dark : ''}`


  return (
    <div className={classes}>
      <p>5 items left</p>
      <ShowFilter deviceType='desktop' isDark={isDark} />
      <button>Clear Completed</button>
    </div>
  )
}

export default TasksMenu
