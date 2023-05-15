import { useContext } from 'react'
import styles from './TasksFilter.module.scss'
import TasksContext from './context/tasks-context'

interface Props {
  isDark: boolean
}
const TasksFilter = ({ isDark }: Props) => {
  const classes = `${styles.filter} ${isDark ? styles.dark : ''}`

  const ctx = useContext(TasksContext)

  const showAllTasksHandler = () => {
    ctx.showAllTasks()
  }

  const showActiveTasksHandler = () => {
    ctx.showActiveTasks()
  }

  const showCompletedTasksHandler = () => {
    ctx.showCompletedTasks()
  }

  return (
    <ul className={classes}>
      <li>
        <button onClick={showAllTasksHandler}>All</button>
      </li>
      <li>
        <button onClick={showActiveTasksHandler}>Active</button>
      </li>
      <li>
        <button onClick={showCompletedTasksHandler}>Completed</button>
      </li>
    </ul>
  )
}

export default TasksFilter
