import React from 'react'
import { IMenuCategory } from './models'
import MenuItemView from './MenuItemView'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../Shared/UI/Accordion'

//Accodian
export interface Props{
  items:IMenuCategory[]
}
export const NewMenuItemCategory=({items}:Props)=>{
  if(items.length==0){
    return <></>
  }
  return(
    <Accordion type="multiple">
  {
  items.map((item) => {
    return(
      <AccordionItem  key={item.categoryId} value={`{item.categoryId}`} >
         <AccordionTrigger>{item.name}({item.count})</AccordionTrigger>
         <AccordionContent>
         {item.menus.map((item)=><MenuItemView  key={item.name} {...item}/>)}    
         </AccordionContent>
    </AccordionItem>
    )

  }
        )
 } 
</Accordion>
  )

}
/*const MenuCategory = ({name,count,menus}:IMenuCategory) => {

    
  return (
    <div>
      <div>
        <h2 className='font-bold  text-black hover:text-xl hover:bg-blue-700'>{name}({count})</h2>
      </div>
      {menus.map((item)=><MenuItemView  key={item.name} {...item}/>)}
    </div>
  )
}

export default MenuCategory*/
