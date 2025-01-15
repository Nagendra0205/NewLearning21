import { IndianRupee, SquareDotIcon, StarIcon } from 'lucide-react'
import React from 'react'
import { Imenu, IMenuCategory } from './models'
import AddTOcartButton from '../AddTOcartButton';
interface MenuItemViewPrp{
  name:string;
  age:number;

}
 
const MenuItemView  = ({name,type,bestSeller,price,image,description,...props}:Imenu) => {
 
    return (
    <div className='flex items-start border p-2 mb-1'>
        <div className='flex-1 flex flex-col gap-2 p-2 m-2'>
         <div className='flex gap-1'>
           <SquareDotIcon fill={type=='veg'?'red':'yellow'}/>
           {bestSeller && <div className='flex gap-1'><StarIcon/> BestSeller</div> }
         </div>
         <h2 className='font-bold '>
          {name}
         </h2>
         <div className='flex items-center gap-1'>
           <IndianRupee/> {price}
         </div>
         <div>
          {description && <div>{description}</div>}
         </div>

        </div>
        <div className='flex-none flex items-center gap-2'>
           <div className='relative'>
             <img src={image} alt="image" className=' rounded-sm w-36 object-cover'/>
              <div className='absolute w-full bottom-[-15px]'>
              <AddTOcartButton/>
              </div>
            
           </div>
        </div>
    </div>
  )
}

export default MenuItemView
