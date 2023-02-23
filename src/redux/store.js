import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { tasksReducer } from "./tasksSlice";


const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: filterReducer
    }
})

export default store