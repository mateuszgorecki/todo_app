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

  return (
    <ul className={classes.list}>
      {tasks.length > 0 ? tasks : <p>No tasks!</p>}
    </ul>
  )
}

export default TasksList
