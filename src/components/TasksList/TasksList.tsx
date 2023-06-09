import { useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import TaskItem from '../TaskItem/TaskItem'
import StrictModeDroppable from '../StrictModeDroppable'
import TasksContext from '../../context/tasks-context'

import classes from './TasksList.module.scss'

interface Props {
  isDark: boolean
}

const TasksList = ({ isDark }: Props) => {

  const ctx = useContext(TasksContext)
  const tasks = ctx.filteredTasks.map(({ id, title, isCompleted }, index) => {
    return (
      <TaskItem
        key={id}
        id={id}
        text={title}
        isCompleted={isCompleted}
        isDark={isDark}
        index={index}
      />
    )
  })

  const flag =
    ctx.tasksFlag === 'completed' ? (
      <p>No completed tasks!</p>
    ) : ctx.tasksFlag === 'active' ? (
      <p>No active tasks!</p>
    ) : (
      <p>No tasks!</p>
    )

  const onDragEndHandler = (result: any) => {
    if (!result.destination) return

    const startIndex = result.source.index
    const endIndex = result.destination.index

    ctx.reorderTasks(startIndex, endIndex)
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <StrictModeDroppable droppableId='droppable'>
        {(provided: any) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classes.list}
          >
            {tasks.length > 0 ? tasks : flag}
            {provided.placeholder}
          </ul>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  )
}

export default TasksList
