import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import MenuItem from './MenuItemView'
import { ResturantMockData } from '../../Mock/ResturantMock'
import { IResturantDetails } from './models'
import  {NewMenuItemCategory} from './MenuCategory'



const Resturant = () => {
  const [resturant,setResturant]=useState<IResturantDetails>()
  const [load,setLoad]=useState(true);
  const orderId=useParams()

  useEffect(()=>{
    setTimeout(()=>{
      setResturant(ResturantMockData)
     setLoad(false) 
     console.log(resturant)
    },5000)
     
  },[])
  if(load){
    return(
      <div>Loading...</div>
    )
  }

  console.log(orderId);
  return (
    <div >
      <h2> welcom to Resturant Page</h2>

       <p className='font-bold  text-black'>{resturant?.name}</p>
        
        {resturant?.menucategory&& <NewMenuItemCategory items={resturant?.menucategory}/>}
    </div>
  )
}

export default Resturant
