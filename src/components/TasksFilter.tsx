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
    ctx.filterTasks('all')
  }

  const showActiveTasksHandler = () => {
    ctx.filterTasks('active')
  }

  const showCompletedTasksHandler = () => {
    ctx.filterTasks('completed')
  }

  const flag = ctx.tasksFlag

  return (
    <ul className={classes}>
      <li>
        <button
          className={flag === 'all' ? styles.active : ''}
          onClick={showAllTasksHandler}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={flag === 'active' ? styles.active : ''}
          onClick={showActiveTasksHandler}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={flag === 'completed' ? styles.active : ''}
          onClick={showCompletedTasksHandler}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TasksFilter
