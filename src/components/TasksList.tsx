import TaskItem from './TaskItem'

interface Props {
  isDark: boolean
}

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Task 1',
    isCompleted: true,
  },
  {
    id: '2',
    title: 'Task 2',
    isCompleted: false,
  },
  {
    id: '3',
    title: 'Task 3',
    isCompleted: false,
  },
  {
    id: '4',
    title: 'Task 4',
    isCompleted: false,
  },
  {
    id: '5',
    title: 'Task 5',
    isCompleted: false,
  },
  {
    id: '6',
    title: 'Task 6',
    isCompleted: false,
  },
]

const TasksList = ({isDark}: Props) => {
  return (
    <ul>
      {DUMMY_DATA.map(({ id, title, isCompleted }) => (
        <TaskItem
          key={id}
          text={title}
          isCompleted={isCompleted}
          isDark={isDark}
        />
      ))}
    </ul>
  )
}

export default TasksList
