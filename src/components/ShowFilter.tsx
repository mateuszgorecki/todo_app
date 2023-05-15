import { useState, useEffect } from 'react'

import TasksFilter from './TasksFilter'

interface Props {
  children?: React.ReactNode
  isDark: boolean
  deviceType: string
}

const ShowFilter = ({ deviceType, isDark }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  if (deviceType === 'mobile') {
    return windowWidth < 480 ? <TasksFilter isDark={isDark} /> : null
  } else {
    return windowWidth >= 480 ? <TasksFilter isDark={isDark} /> : null
  }
}

export default ShowFilter
