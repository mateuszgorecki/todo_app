import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/theme-context'
import { TasksContextProvider } from './context/tasks-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TasksContextProvider>
          <App />
      </TasksContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)