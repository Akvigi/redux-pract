import { createSlice } from "@reduxjs/toolkit"
import { statusFilters } from "./constants"

const iFilterState = {
    status: statusFilters.all,
}

const filterSlice = createSlice({
    name: "filter",
    initialState: iFilterState,
    reducers: {
        setStatusFilter(state, action) {
            return {
                ...state,
                status: action.payload
            }
        }
    }
})

export const { setStatusFilter } = filterSlice.actions

export const filterReducer = filterSlice.reducer
