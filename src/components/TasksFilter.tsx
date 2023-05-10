import styles from './TasksFilter.module.scss'

interface Props {
  isDark: boolean
}
const TasksFilter = ({ isDark }: Props) => {
  const classes = `${styles.filter} ${isDark ? styles.dark : ''}`

  return (
    <ul className={classes}>
      <li>
        <button>All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  )
}

export default TasksFilter
