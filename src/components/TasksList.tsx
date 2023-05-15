import { useContext } from 'react'
import TaskItem from './TaskItem'
import TasksContext from './context/tasks-context'

interface Props {
  isDark: boolean
}

const TasksList = ({ isDark }: Props) => {
  const ctx = useContext(TasksContext)
  const tasks = ctx.tasks

  return (
    <ul>
      {tasks.map(({ id, title, isCompleted }) => (
        <TaskItem
          key={id}
          id={id}
          text={title}
          isCompleted={isCompleted}
          isDark={isDark}
        />
      ))}
    </ul>
  )
}

export default TasksList
