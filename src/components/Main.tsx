import CreateTask from './CreateTask'
import TasksContainer from './TasksContainer'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.main}>
      <div>
        <CreateTask />
        <TasksContainer />
      </div>
      <p>Drag and drop to reorder list</p>
    </main>
  )
}

export default Main
