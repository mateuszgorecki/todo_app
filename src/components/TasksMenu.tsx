import { useContext } from 'react'
import ShowFilter from './ShowFilter'
import ThemeContext from './context/theme-context'

import styles from './TasksMenu.module.scss'
import TasksContext from './context/tasks-context'

const TasksMenu = () => {
  const themeCtx = useContext(ThemeContext)
  const isDark = themeCtx.isDarkTheme

  const ctx = useContext(TasksContext)

  const clearCompletedTasksHandler = () => {
    ctx.clearCompletedTasks()
  }

  const classes = `${styles.menu} ${isDark ? styles.dark : ''}`

  return (
    <div className={classes}>
      <p>5 items left</p>
      <ShowFilter
        deviceType='desktop'
        isDark={isDark}
      />
      <button onClick={clearCompletedTasksHandler}>Clear Completed</button>
    </div>
  )
}

export default TasksMenu
