import { IHotels } from './../../types/types';
import { createSlice } from "@reduxjs/toolkit";

interface HotelsState {
    data: IHotels[]
}

const initialState: HotelsState = {
    data: []
}

const usersDataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData(state, action) {
            state.data.push(action.payload)
        },
    }
})

export default usersDataSlice.reducer;
export const {setData} = usersDataSlice.actions; 