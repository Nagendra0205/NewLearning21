import { HtmlHTMLAttributes, HTMLProps } from "react";
type Props=HtmlHTMLAttributes<HTMLInputElement>

export const Textbox=({onClick,...props}:Props)=>{
    return(
        <div>
            <input type ='text' className="w-full h-10 text-blue-700 p-2  bg-orange-600
             border-green-800 border-[2px] border-solid  hover:bg-red-600 rounded-lg" {...props} />
        </div>
    )
}