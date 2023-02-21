import { combineReducers } from "redux"
import { statusFilters } from "./constants"

const iTasksState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
]

const tasksReducer = (state = iTasksState, action) => {
    switch (action.type) {
        case "tasks/addTask":
            return [...state, action.payload]
        case "tasks/deleteTask":
            return state.filter(item => item.id !== action.payload)
        case "tasks/toggleCompleted":
            return state.map(item => {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                }
                return item
            })
        
        default:
            return state
    }
}

const iFilterState = {
    status: statusFilters.all,
}

const filterReducer = (state = iFilterState, action) => {
    switch (action.type) {
        case "filters/setStatusFilter":
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
} 

export const reducer = combineReducers ({
    tasks: tasksReducer,
    filter: filterReducer
})