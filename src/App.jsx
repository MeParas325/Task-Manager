import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import "./App.css"
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    // localStorage.getItem("todos")
  }, [])

  return (
    <>
      <div >
        <h1 className='text-xl font-semibold'>Task Management App</h1>
        <TaskForm />
        <TaskItem />
      </div>
    </>
  )
}

export default App
