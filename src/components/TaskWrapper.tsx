import { useContext } from 'react'
import ThemeContext from './context/theme-context'
import styles from './TaskWrapper.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
}

const TaskWrapper = (props: Props) => {
  const ctx = useContext(ThemeContext)
  const inheritedClasses = props.className ? props.className : ''
  const classes = `${styles.wrapper} ${inheritedClasses} ${
    ctx.isDarkTheme ? styles.dark : ''
  }`

  return <div className={classes}>{props.children}</div>
}

export default TaskWrapper
