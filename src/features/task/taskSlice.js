import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {

        addAllTasks: (state, action) => {
            return action.payload
        },
        addTask: (state, action) => {

            const task = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }

            state.push(task)

        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload)

        },

        taskCompleted: (state, action) => {
            return state.map((task) => task.id === action.payload ? {...task, completed: !task.completed} : task)
        }
    }

})

export const {addTask, removeTask, taskCompleted, addAllTasks} =  taskSlice.actions
export default taskSlice.reducer