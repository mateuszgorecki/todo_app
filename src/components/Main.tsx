import CreateTask from './CreateTask'
import TasksContainer from './TasksContainer'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.main}>
      <CreateTask />
      <TasksContainer />

      <p>Drag and drop to reorder list</p>
    </div>
  )
}

export default Main
