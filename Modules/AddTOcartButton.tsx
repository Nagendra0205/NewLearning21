import React, { useState } from 'react'
import { Button } from './Button'
import { addToCartActions,removeFromCartAction } from '../Redux/cartReducer';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
const AddTOcartButton = () => {
  const count=useSelector((S:RootState)=>S.cart.count)
  const dispatch=useDispatch()
  const [qty,setQty]=useState(0);
  if(qty===0){return(
    <button className="w-full h-8 rounded-lg text-green-600 bg-white border-solid
             border-red-500 border-2 flex justify-center items-center gap-2  " onClick={()=>{
      setQty(1)
    }}>ADD</button>
  )
   
  }
  return (
    <div className='flex  w-full h-8 rounded-lg text-green-600 bg-white border-solid
             border-red-500 border-2  justify-around items-center gap-2'> 
      <button onClick={()=>{dispatch(removeFromCartAction(5))}} className='text-red-700 font-semibold text-2xl' >-</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(addToCartActions(1))} className='text-green-700 font-semibold text-2xl' >+</button>
  
    
    </div>
  )
}

export default AddTOcartButton
