import { ResturantMock } from "../../Mock/ResturantMock";
import { ResturantProps } from "../Resturant/models";
import ResturantCard from "../Resturant/ResturantCard";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const HomeResturantList = () => {
    const [restList,setRestList] =useState<ResturantProps[]>([]);
    const resID=useParams()

    
    useEffect(()=>{
        setRestList(ResturantMock);
        console.log(resID)
    },[])
  return (
    <>
    <h2>Resturant Content available here</h2>
    <div className='grid grid-cols-4 gap-5 h-screen '>
     {restList.map(item=>(<ResturantCard key={item.orderId} {...item} />))}
    </div>
    </>
    
    
  )
}

export default HomeResturantList
