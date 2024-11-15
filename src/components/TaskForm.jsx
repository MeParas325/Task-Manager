import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice"

function TaskForm() {

    const [taskInput, setTaskInput] = useState("")
    const dispatch = useDispatch()

    const addTaskHandler = (e) => {
        e.preventDefault()
        if(taskInput.trim() !== "") {
            dispatch(addTask(taskInput))
            setTaskInput("")
        }
    }


    return (
        <form onSubmit={addTaskHandler}  className="flex my-4">
            <input
                type="text"
                placeholder="Write Task..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/50 py-1.5"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TaskForm;