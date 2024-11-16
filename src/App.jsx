import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import "./App.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addAllTasks } from './features/task/taskSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    dispatch(addAllTasks(tasks))
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
