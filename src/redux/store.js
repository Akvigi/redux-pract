import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import { filterReducer } from "./filterSlice";
import { tasksReducer } from "./tasksSlice";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    filter: filterReducer
})

const persistConfig = {
    key: "root", 
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistore = persistStore(store)
