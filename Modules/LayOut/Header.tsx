import React from 'react'
import LocationSearch from '../LocationSearch';
import { HeaderMenu } from './HeaderMenu';

const Header = () => {
  return (
    <div className='flex justify-between  gap-10  shadow-lg  max-w-screen-2xl h mb-0 mt-0'>
      <div className='flex items-start font-bold gap-2 '>
        <img  src="\Asserts\Swiggy.jfif" alt="logo" className='w-20' />
        <LocationSearch/>
      </div>
      <div>
       <HeaderMenu/>
      </div>
    </div>
  )
}

export default Header

















/*import React from 'react';
import { Locationtype } from '../../JSONData/Location';
import { Button } from '../Button';
import { ChevronDown, MapPin } from 'lucide-react';
import { HeaderMenu } from './HeaderMenu';
 type Props={
  onChangeClick:()=> void ,//creating own props
  SLocation ?:Locationtype
 }
//      <button onClick={props.onChangeClick} >Click</button>

const Header = (props:Props) => {
  return (
    <div>
       <div>
        <img src=" " alt="logo" />
        <h2>Location</h2>
       </div>
       <div>
        <h3>Menu</h3>
       </div>
      
     <div>

          <p>{props.SLocation?.name}</p>
          {props.SLocation  && props.SLocation.address}
          <Button onClick={props.onChangeClick}>
          <strong>Click</strong>
         <h2>Me</h2>
          <MapPin fill='blue'/>
          <ChevronDown/>
        </Button>
    
       
      </div>
      <h2 style={{ color:"red", background:"green", width:'300px', height:"50px", padding:"10px", border:"2px red solid"}}>Header</h2><br/>
      
     
      <HeaderMenu/>
    </div>
  )
}

export default Header  */




/*import React from 'react';
import { Locationtype } from '../../JSONData/Location';
import { Button } from '../Button';
import { ChevronDown, MapPin } from 'lucide-react';
import { HeaderMenu } from './HeaderMenu';
import LocationSearch from '../LocationSearch';
 type Props={
  onChangeClick:()=> void ,//creating own props
  SLocation ?:Locationtype
 }
//      <button onClick={props.onChangeClick} >Click</button>

const Header = (props:Props) => {
  return (
    <div>
      <div>
       <div>
        <img src='' alt='logo'/>
      =;      
        <div>
          <p>{props.SLocation?.name}</p>
          {props.SLocation  && props.SLocation.address}
          <Button onClick={props.onChangeClick}>
          <strong>Click</strong>
         <h2>Me</h2>
          <MapPin fill='blue'/>
          <ChevronDown/>
      </Button>
        </div>
       </div>

      </div>
      <h2 style={{ color:"red", background:"green", width:'300px', height:"50px", padding:"10px", border:"2px red solid"}}>Header</h2><br/>
      
     
      <HeaderMenu/>
    </div>
  )
}

export default Header
*/