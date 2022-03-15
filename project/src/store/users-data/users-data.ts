import { createSlice } from "@reduxjs/toolkit";


const usersDataSlice = createSlice({
    name: 'data',
    initialState:{
        data: [],
    },
    reducers: {
        setData(state, action) {
            state.data.push(...action.payload)
        },
    }
})

export default usersDataSlice.reducer;
export const {setData} = usersDataSlice.actions; 