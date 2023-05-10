import styles from './TaskItem.module.scss'

interface Props {
  children?: React.ReactNode
  text: string
  isCompleted: boolean
  isDark: boolean
}

const TaskItem = (props: Props) => {
  const isCompletedStyles = props.isCompleted ? styles.completed : ''
  const isDarkStyles = props.isDark ? styles.dark : ''
  const classes = `${styles.item} ${isCompletedStyles} ${isDarkStyles}`

  return (
    <li className={classes}>
      <button></button>
      <p>{props.text}</p>
      <button></button>
    </li>
  )
}

export default TaskItem
