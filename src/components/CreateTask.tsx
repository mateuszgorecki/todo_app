import TaskWrapper from './TaskWrapper'

import styles from './CreateTask.module.scss'

const CreateTask = () => {

  // * max length of task name is 30
  return (
    <TaskWrapper className={styles.wrapper}>
      <form action=''>
        <button type='submit' />
        <input type='text' placeholder='Create a new todo...' />
      </form>
    </TaskWrapper>
  )
}

export default CreateTask
