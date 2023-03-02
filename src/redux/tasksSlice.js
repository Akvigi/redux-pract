import {createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const iTasksState = []

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
