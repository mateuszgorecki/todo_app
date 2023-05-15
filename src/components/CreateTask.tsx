import { useState } from 'react'

import TaskWrapper from './TaskWrapper'

import styles from './CreateTask.module.scss'
import { useContext } from 'react'
import TasksContext from './context/tasks-context'

interface Props {
  isDark: boolean
}

const CreateTask = ({ isDark }: Props) => {
  const [title, setTitle] = useState('')
  const classes = `${styles.wrapper} ${isDark ? styles.dark : ''}`

  const setTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const ctx = useContext(TasksContext)
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    ctx.addTask({
      id: Math.random(),
      title: title,
      isCompleted: false,
    })
    setTitle('')
  }

  return (
    <TaskWrapper className={classes}>
      <form onSubmit={submitHandler}>
        <button type='submit' />
        <input
          value={title}
          onChange={setTitleHandler}
          type='text'
          placeholder='Create a new todo...'
          maxLength={30}
        />
      </form>
    </TaskWrapper>
  )
}

export default CreateTask
