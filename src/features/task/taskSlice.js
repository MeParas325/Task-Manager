import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {

            const task = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }

            state.tasks.push(task)

        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)

        },

        taskCompleted: (state, action) => {
            state.tasks = state.tasks.map((task) => task.id === action.payload ? {...task, completed: !task.completed} : task)
        }
    }

})

export const {addTask, removeTask, taskCompleted} =  taskSlice.actions
export default taskSlice.reducer