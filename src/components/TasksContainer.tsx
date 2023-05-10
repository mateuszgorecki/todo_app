import TasksList from './TasksList'
import TasksMenu from './TasksMenu'

import styles from './TasksContainer.module.scss'
import { useContext } from 'react'
import ThemeContext from './context/theme-context'

const TasksContainer = () => {
  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme

  const classes = `${styles.container} ${isDark ? styles.dark : ''}`

  return (
    <div className={classes}>
      <TasksList isDark={isDark} />
      <TasksMenu />
    </div>
  )
}

export default TasksContainer
