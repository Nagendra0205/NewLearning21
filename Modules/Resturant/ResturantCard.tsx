import React from 'react'
import { ResturantProps } from './models'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ResturantCard = (props:ResturantProps) => {
  const tid=props.orderId
  console.log(tid)
  
  return (
    <div className='flex flex-col' key={props.orderId}>
      <Link to="/rest">
      <div>
         
      <img src={props.image} alt={props.name} className='rounded-lg aspect-square gap-2 object-cover'/>
      <div>
        <h2  className=' font-bold text-lg'>{props.name}</h2>
        <div className='flex gap-2'>
        <div className='flex gap-1'> <Star fill='green'/>{props.rating}</div>
        <h3>{props.deliveryTime}</h3>
      </div>
      <div className='text-gray-700'>
         <h2>{props.categories.join(',')}</h2>
      </div>
      <div className='text-gray-700'>
        {props.location}
      </div>
      </div>
      </div>

    </Link>
      
    </div>
  )
}

export default ResturantCard
