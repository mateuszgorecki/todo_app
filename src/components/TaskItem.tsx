import { useContext } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styles from './TaskItem.module.scss'
import TasksContext from './context/tasks-context'

interface Props {
  children?: React.ReactNode
  text: string
  isCompleted: boolean
  isDark: boolean
  id: string
  index: number
}

const TaskItem = (props: Props) => {
  const ctx = useContext(TasksContext)
  const deleteTaskHandler = () => {
    ctx.removeTask(props.id)
  }

  const completeTaskHandler = () => {
    ctx.completeTask(props.id)
  }

  const isCompletedStyles = props.isCompleted ? styles.completed : ''
  const isDarkStyles = props.isDark ? styles.dark : ''
  const classes = `${styles.item} ${isCompletedStyles} ${isDarkStyles}`

  return (
    <Draggable
      draggableId={props.id}
      index={props.index}
      key={props.id}
    >
      {(provided: any) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={classes}
        >
          <button onClick={completeTaskHandler}></button>
          <p>{props.text}</p>
          <button onClick={deleteTaskHandler}></button>
        </li>
      )}
    </Draggable>
  )
}

export default TaskItem
