import { useSelector, useDispatch } from "react-redux";
import { removeTask, taskCompleted } from "../features/task/taskSlice";

function TaskItem({ task }) {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const deleteTaskHandler = (taskId) => {
        dispatch(removeTask(taskId))

    }

    const taskComplete = (taskId) => {
        dispatch(taskCompleted(taskId))
    }

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}
                className={`flex border bg-purple-400 border-black/10 rounded-lg my-2 px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]"
                }`}
            >
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={task.completed}
                    onChange={() => taskComplete(task.id)}
                />
                <input
                    type="text"
                    className={` border-none outline-none w-full bg-transparent rounded-lg "border-transparent ${task.completed ? "line-through" : "" } `
                    }
                    value={task.text}
                    readOnly={true}
                />
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => deleteTaskHandler(task.id)}
                >
                    ❌
                </button>
            </div>
            ))}
        </div>
        
    );
}

export default TaskItem;
