import { useContext } from 'react'

import CreateTask from './CreateTask'
import TasksContainer from './TasksContainer'
import ThemeContext from './context/theme-context'

import styles from './Main.module.scss'

const Main = () => {
  const ctx = useContext(ThemeContext)
  const isDark = ctx.isDarkTheme

  const classes = `${styles.main} ${isDark ? styles.dark : ''}`

  return (
    <main className={classes}>
      <div>
        <CreateTask isDark={isDark} />
        <TasksContainer isDark={isDark} />
      </div>
      <p>Drag and drop to reorder list</p>
    </main>
  )
}

export default Main
