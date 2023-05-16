import React, { useState } from 'react'

interface Task {
  id: number
  title: string
  isCompleted: boolean
}

interface Props {
  children: React.ReactNode
}
const initialState: Task[] = [
  {
    id: 1,
    title: 'Complete online JS course',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Jog around the park 3x',
    isCompleted: false,
  },
  {
    id: 3,
    title: '10 minutes meditaion',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Read for 1 hour',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Pick up groceries',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Complete Todo App on Frontend Mentor',
    isCompleted: false,
  },
]

const TasksContext = React.createContext({
  tasks: initialState,
  filteredTasks: initialState,
  addTask: (task: Task) => {},
  completeTask: (taskId: number) => {},
  filterTasks: (filter: string) => {},
  removeTask: (taskId: number) => {},
  clearCompletedTasks: () => {},
  tasksFlag: 'all'
})

export const TasksContextProvider = (props: Props) => {
  const [tasks, setTasks] = useState(initialState)
  const [filter, setFilter] = useState('all')

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.isCompleted
    }
    if (filter === 'completed') {
      return task.isCompleted
    }
    return true
  })

  const addTaskHandler = (task: Task) => {
    setTasks((prev) => [task, ...prev])
  }

  const completeTaskHandler = (taskId: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    )
  }

  const removeTaskHandler = (taskId: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  }

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.isCompleted))
  }

  const contextValue = {
    tasks: tasks,
    filteredTasks,
    addTask: addTaskHandler,
    completeTask: completeTaskHandler,
    filterTasks: setFilter,
    removeTask: removeTaskHandler,
    clearCompletedTasks: clearCompletedTasks,
    tasksFlag: filter
  }

  return (
    <TasksContext.Provider value={contextValue}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksContext
