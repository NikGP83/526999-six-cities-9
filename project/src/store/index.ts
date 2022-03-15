import  usersDataSlice  from './users-data/users-data';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        data: usersDataSlice,
    }
})

export default store;