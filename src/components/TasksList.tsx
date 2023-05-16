import { useContext } from 'react'
import TaskItem from './TaskItem'
import TasksContext from './context/tasks-context'

import classes from './TasksList.module.scss'

interface Props {
  isDark: boolean
}

const TasksList = ({ isDark }: Props) => {
  const ctx = useContext(TasksContext)
  const tasks = ctx.filteredTasks.map(({ id, title, isCompleted }) => (
    <TaskItem
      key={id}
      id={id}
      text={title}
      isCompleted={isCompleted}
      isDark={isDark}
    />
  ))

  const flag =
    ctx.tasksFlag === 'completed' ? (
      <p>No completed tasks!</p>
    ) : ctx.tasksFlag === 'active' ? (
      <p>No active tasks!</p>
    ) : (
      <p>No tasks!</p>
    )

  return <ul className={classes.list}>{tasks.length > 0 ? tasks : flag}</ul>
}

export default TasksList
