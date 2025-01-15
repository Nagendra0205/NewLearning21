import React,{useState,useEffect} from 'react';
import { LocationData } from '../JSONData/Location';
import { Locationtype } from '../JSONData/Location';
import { ChevronDown, Star } from 'lucide-react';
import { Textbox } from './Textbox';
import { Button } from './Button';
import HomeResturantList from './Home/HomeResturantList';
type Props={
  clickItems:(item:Locationtype)=>void;
}

const LocationSearch = (props:any) => {
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
    setShow(false);

  }
    const [ldata,setLdata]=useState<string>('') 
    const [sdata,setSdata]=useState<Locationtype[]>([]);

   // const MockLocation=LocationData;
    let filterData:Locationtype[]=[]
    
     const  Click= async ()=>{
        //console.log(ldata);
       // filterData=MockLocation.filter(m=>m.pincode.toString() ===ldata)
       // console.log(filterData);
      try{
     const res= await fetch("http://localhost:3001/localData",{
          method:"Get"
     })
     const result:Locationtype[] =await res.json()
    // console.log(result);
     setSdata(result.filter((m)=>m.pincode === parseFloat(ldata)))
     //console.log(sdata);
    }
    catch(error)
    {
      alert('Server Disconnected')
     console.log(error)
    }
     
      fetch("http://localhost:3001/localData",{
        method:'Get'
       }).then(res=>res.json()).then(result=>console.log(result)).catch((err)=>console.log(err))
        //setSdata(MockLocation.filter(m=>m.pincode.toString() ===ldata));
        //console.log(sdata)
    }
    const changeHandler=(e:any)=>{
       setLdata(e.target.value);
    }
    /*
     <input type="text"  className="w-30 h-10 text-blue-700 bg-slate-200 m-2 hover:text-red-600 border-solid border-blue-600" onChange={changeHandler}/>
       <button className="w-30 h-9 p-1 border-2 border-dotted border-red-600 m-2 text-red-600 font-semibold bg-green-500 rounded-lg hover:bg-blue-600 hover:text-green-700" onClick={Click}>Submit1</button>
      */
  return (
    
    <div>
       {
         sLocation  && 
          <div className='flex  justify-start items-center  gap-1'> 
            <div>{sLocation.address},{sLocation.name}</div>
          <button onClick={()=>setShow(true)}><ChevronDown/></button>
            
          </div>

         
       }
          
   
      
        {filterData.length}{
          show  &&
          <><Textbox  onChange={changeHandler}/>
          <Button onClick={Click}>
            <h2>Submit</h2>
          </Button>
          <HomeResturantList/>
          <div>
          { sdata.map((item:any )=>{
        return(
            <div key={item.id} onClick={()=>{handleOnClick(item)}} style={{color:'green',display:"flex", flexDirection:"row",gap:"25px",justifyContent:"center",
            height:"150px",width:"500px",padding:"5px", border:'3px red solid',margin:"10px"}}>
              <Star/>
             <h2>{item.name}</h2>
             <h2>{item.address}</h2>
             <h2>{item.pincode}</h2>
          
            </div>
        )
      })}
          </div>
          </>
           
        }
      
      <div>
        <h2 className=''>Hii</h2>
        
        
      
        
        </div>
    
      <div>
    
      </div>
    </div>
  )
}

export default LocationSearch




















































/*import React,{useState} from 'react';
import { LocationData } from '../JSONData/Location';
import { Locationtype } from '../JSONData/Location';
import { Star } from 'lucide-react';
import { Textbox } from './Textbox';
import { Button } from './Button';
import HomeResturantList from './Home/HomeResturantList';
type Props={
  clickItems:(item:Locationtype)=>void;
}

const LocationSearch = (props:Props) => {
    const [ldata,setLdata]=useState<string>('') 
    const [sdata,setSdata]=useState<Locationtype[]>([]);

   // const MockLocation=LocationData;
    let filterData:Locationtype[]=[]
    
     const  Click= async ()=>{
        //console.log(ldata);
       // filterData=MockLocation.filter(m=>m.pincode.toString() ===ldata)
       // console.log(filterData);
      try{
     const res= await fetch("http://localhost:3001/localData",{
          method:"Get"
     })
     const result:Locationtype[] =await res.json()
    // console.log(result);
     setSdata(result.filter((m)=>m.pincode === parseFloat(ldata)))
     //console.log(sdata);
    }
    catch(error)
    {
      alert('Server Disconnected')
     console.log(error)
    }
     
      fetch("http://localhost:3001/localData",{
        method:'Get'
       }).then(res=>res.json()).then(result=>console.log(result)).catch((err)=>console.log(err))
        //setSdata(MockLocation.filter(m=>m.pincode.toString() ===ldata));
        //console.log(sdata)
    }
    const changeHandler=(e:any)=>{
       setLdata(e.target.value);
    }
    /*
     <input type="text"  className="w-30 h-10 text-blue-700 bg-slate-200 m-2 hover:text-red-600 border-solid border-blue-600" onChange={changeHandler}/>
       <button className="w-30 h-9 p-1 border-2 border-dotted border-red-600 m-2 text-red-600 font-semibold bg-green-500 rounded-lg hover:bg-blue-600 hover:text-green-700" onClick={Click}>Submit1</button>
      
  return (
    <div>
        {filterData.length}
      <Textbox  onChange={changeHandler}/>
      <Button onClick={Click}>
        <h2>Submit</h2>
      </Button>
      <HomeResturantList/>
      <div>
        <h2 className=''>Hii</h2>
        
        
      { sdata.map((item:any )=>{
        return(
            <div key={item.id} onClick={()=>{props.clickItems(item)}} style={{color:'green',display:"flex", flexDirection:"row",gap:"25px",justifyContent:"center",
            height:"150px",width:"500px",padding:"5px", border:'3px red solid',margin:"10px"}}>
              <Star/>
             <h2>{item.name}</h2>
             <h2>{item.address}</h2>
             <h2>{item.pincode}</h2>
          
            </div>
        )
      })}
        
        </div>
    
      <div>
    
      </div>
    </div>
  )
}

export default LocationSearch
*/
