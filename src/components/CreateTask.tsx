import TaskWrapper from './TaskWrapper'

import styles from './CreateTask.module.scss'

interface Props {
  isDark: boolean
}

const CreateTask = ({ isDark }: Props) => {
  const classes = `${styles.wrapper} ${isDark ? styles.dark : ''}`

  // * max length of task name is 30
  return (
    <TaskWrapper className={classes}>
      <form action=''>
        <button type='submit' />
        <input
          type='text'
          placeholder='Create a new todo...'
          maxLength={30}
        />
      </form>
    </TaskWrapper>
  )
}

export default CreateTask
