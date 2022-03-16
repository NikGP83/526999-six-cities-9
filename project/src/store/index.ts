import  usersDataSlice  from './users-data-slice/users-data-slice';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        data: usersDataSlice,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
