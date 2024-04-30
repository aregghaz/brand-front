import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "./searchApi"

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchProductsData: [],
        searchValue: ""
    },
    reducers: {
        toggleSearchValue: (state, {payload}) => {
            state.searchValue = payload 
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchSearch.fulfilled, (state, {payload}) => {
            if(payload) {
                state.searchProductsData = [...payload.products]
            }
        })
    }
})

export const selectSearch = state => state.search
export const {toggleSearchValue} = searchSlice.actions
export const searchReducer = searchSlice.reducer