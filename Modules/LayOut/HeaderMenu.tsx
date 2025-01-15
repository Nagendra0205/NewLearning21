import { BadgeIndianRupee, BadgePercentIcon, CircleHelp, LogIn, SearchIcon, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import CartButton from "./CartButtn"

interface Imenu{
    name:string,
    path:string,
    icon:React.ReactElement
  
  }
export const HeaderMenu=()=>{
    const menus:Imenu[]=[
        {
        name:'Search',
        icon:<SearchIcon/>,
        path:'serch'

        },
        {
            name:"offers",
            icon:<BadgePercentIcon/>,
            path:'offers'
        },
        {
            name:"Help",
            icon:<CircleHelp/>,
            path:'help'
        },
        {
            name:"SignIn",
            icon:<LogIn/>,
            path:'signup'
        },
        
    ]
   
    return(
        <div className="flex justify-start items-center gap-7  hover: ">
        
            {menus.map(item=>{
                return(
                    <div>
                   <Link to={item.path} key={item.path} className="flex gap-1 justify-start items-center text-black 
                      hover:bg-orange-500 hover:text-black hover:p-5 hover:text-2xl  hover:font-semibold">{item.icon} {item.name} </Link>
                   

                    </div>
                    
                    )
            })}
            <CartButton/>
        </div>
    )
}



/*
{
            name:'Cart',
            icon:<ShoppingCart/>,
            path:'cart'
        }*/