import { configureStore } from "@reduxjs/toolkit";
import { cartButtonSlice } from "./cartReducer";

export const store =configureStore({
    reducer:{
        cart:cartButtonSlice.reducer,}
})
export type RootState = ReturnType<typeof store.getState>;