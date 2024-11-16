import { createContext, useContext } from "react";


export const TodoContext = createContext({

    tasks: [
        {
            id: 1,
            task: "Todo Msg",
            completed: false,
        }
    ],

    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}

})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}