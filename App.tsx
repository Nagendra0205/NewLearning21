import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Modules/Home/Home'
import Layout from './Modules/LayOut/Layout'
import Resturant from './Modules/Resturant/Resturant'
import MenuItem from './Modules/Resturant/MenuItemView'
const App = () => {
  const routers= createBrowserRouter([
    {
    path:'newres',
    element:<Resturant/>
    },
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'rest',
          element:<Resturant/>
        },
        {
          path:'rest/:orderId',
          element:<Resturant/>
        }
      
      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
    
    
  )
}

export default App













/*import React, { useState,useEffect } from 'react';
import Header from './Modules/LayOut/Header';
import LocationSearch from './Modules/LocationSearch';
import { Locationtype } from './JSONData/Location';
import { Button} from'./Modules/Button'
import { ChevronDown, MapPin } from 'lucide-react';
im   port {createBrowserRouter} from "react-router-dom"
import Home from './Modules/Home/Home';
import Resturant from './Modules/Resturant/Resturant';


const router=createBrowserRouter([{
  path:'/',
  element:<Home/>
},
{
  path:'/resturants',
  element:<Resturant/>
}

]

)
const App = () => {

  useEffect(()=>{
    const ULocationData=window.localStorage.getItem('Se_Location0');
    if(ULocationData){
      const NLocationData=JSON.parse(ULocationData);
      setSLocation(NLocationData)
    }
    
  },[])
  const [show,setShow]=useState(false)
  const [sLocation,setSLocation]=useState<Locationtype>()
  const handleOnClick=(item:Locationtype)=>{
    window.localStorage.setItem('Se_Location0',JSON.stringify(item));
    setSLocation(item);
    setShow(false)
  }
  return (
    <div>
      <ChevronDown/>
      <Header onChangeClick={
        ()=>{
          setShow(true);
        }
        } SLocation={sLocation}
        />
     { show &&<LocationSearch clickItems={handleOnClick}
     
      
     />}
      
    </div>
  )
} 

export default App


import React, { useState,useEffect } from 'react';
import Header from './LayOut/Header';
import LocationSearch from './Components/LocationSearch';
import { Locationtype } from './JSONData/Location';

const App = () => {

  useEffect(()=>{
    const ULocationData=window.localStorage.getItem('Se_Location0');
    if(ULocationData){
      const NLocationData=JSON.parse(ULocationData);
      setSLocation(NLocationData)
    }
    
  },[])
  const [show,setShow]=useState(false)
  const [sLocation,setSLocation]=useState<Locationtype>()
  const handleOnClick=(item:Locationtype)=>{
    window.localStorage.setItem('Se_Location0',JSON.stringify(item));
    setSLocation(item);
    setShow(false)
  }
  return (
    <div>
      <h2>Hello world</h2>
      <Header onChangeClick={
        ()=>{
          setShow(true);
        }
        } SLocation={sLocation}
        />
     { show &&<LocationSearch clickItems={handleOnClick}
     
      
     />}
      
    </div>
  )
} 

export default App*/