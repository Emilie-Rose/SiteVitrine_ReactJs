import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    loading: null,
    error: false,
}

export const Baskets = createSlice({
    name: "BASKETS",
    initialState,
    
    reducers: {
        FETCH_STAR: (draft) =>{
            draft.loading = true;
        },
        FETCH_SUCCESS: (draft, action) =>{
            draft.loading = false;
            draft.data = action.payload;
        },
        FETCH_FAILURE: (draft) =>{
            draft.loading = false;
            draft.error = true;
        },
    }
})

export const {FETCH_FAILURE, FETCH_SUCCESS, FETCH_STAR} = Baskets.actions;
export default Baskets.reducer