import { ShoppingCartIcon } from "lucide-react"
import { useSelector, UseSelector } from "react-redux"
import { RootState } from "../../Redux/Store"

const CartButton=()=>{
    const data =useSelector((state:RootState)=>state.cart.count)
    return(
        <div className="flex  gap-1 justify-start items-center text-black 
                      hover:bg-orange-500 hover:text-black hover:p-5 hover:text-2xl  hover:font-semibold">
         <ShoppingCartIcon/>Cart ({data})
        </div>
    )
}
export default CartButton