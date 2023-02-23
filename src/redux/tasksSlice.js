import {createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const iTasksState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
]

const tasksSlice = createSlice({
    name: "tasks",
    initialState: iTasksState,
    reducers: {
        addTask: {
            reducer: (state, action) => {
                return [...state, action.payload]
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                        completed: false
                    }
                }
            }
        },
        deleteTask(state, action) {
            // return state.filter(item => item.id !== action.payload)
            const index = state.findIndex(item => item.id === action.payload)
            state.splice(index, 1)
        },
        toggleCompleted(state, action) {
            // return state.map((item) => {
            //     if (item.id !== action.payload) {
            //         return item
            //     }
            //     return {
            //         ...item,
            //         completed: !item.completed
            //     }
            // })
            for (const item of state) {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                    break
                }
            }
        }
    }
})



export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer
