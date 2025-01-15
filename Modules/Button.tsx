type Props={
    //text:string,
    onClick?:()=>void,
    children:React.ReactNode

 }




export  const Button=(props:Props)=>{
   

return(
    <div>
        <button onClick={
            props.onClick && props.onClick} className="w-32 h-10 text-red-600 bg-green-700 border-solid border-red-500 border-2 flex gap-2 hover:bg-blue-800">{props.children}</button>
    </div>
)
}