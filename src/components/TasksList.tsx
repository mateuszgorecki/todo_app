import TaskItem from './TaskItem'

interface Props {
  isDark: boolean
}

export const DUMMY_DATA = [
  {
    id: '1',
    title: 'Complete online JS course',
    isCompleted: true,
  },
  {
    id: '2',
    title: 'Jog around the park 3x',
    isCompleted: false,
  },
  {
    id: '3',
    title: '10 minutes meditaion',
    isCompleted: false,
  },
  {
    id: '4',
    title: 'Read for 1 hour',
    isCompleted: false,
  },
  {
    id: '5',
    title: 'Pick up groceries',
    isCompleted: false,
  },
  {
    id: '6',
    title: 'Complete Todo App on Frontend Mentor',
    isCompleted: false,
  },
]

const TasksList = ({ isDark }: Props) => {
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
