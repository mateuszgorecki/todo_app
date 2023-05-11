import TasksList from './TasksList'
import TasksMenu from './TasksMenu'

import styles from './TasksContainer.module.scss'

interface Props {
  isDark: boolean
}

const TasksContainer = ({ isDark }: Props) => {
  const classes = `${styles.container} ${isDark ? styles.dark : ''}`

  return (
    <div className={classes}>
      <TasksList isDark={isDark} />
      <TasksMenu />
    </div>
  )
}

export default TasksContainer
