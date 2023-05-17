import {useContext } from 'react'
import ShowFilter from '../ShowFilter'

import CreateTask from '../CreateTask/CreateTask'
import TasksContainer from '../TasksContainer/TasksContainer'
import ThemeContext from '../../context/theme-context'

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
      <ShowFilter isDark={isDark} deviceType='mobile' />
      <p>Drag and drop to reorder list</p>
    </main>
  )
}

export default Main
