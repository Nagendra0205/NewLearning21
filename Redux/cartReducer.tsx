import { createSlice } from "@reduxjs/toolkit";


const initialState={
    count:0
}
export const cartButtonSlice=createSlice({
   name:'cart',
   initialState:initialState,
   reducers:{
    addToCartActions:(state,action)=>{
        state.count=state.count+action.payload;
        console.log('item added to Cart '+state.count)
    },
    removeFromCartAction:(state,action)=>{
       state.count=state.count-1;
    }
   }

})
export  const {addToCartActions,removeFromCartAction}=cartButtonSlice.actions