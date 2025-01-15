export interface Imenu {
  menuId:number,
  name:string,
  price:number,
  description:string,
  image ?:string,
  type:menuType,
  bestSeller ?:boolean,
}
export interface IMenuCategory{
  categoryId:number,
  name:string,
  count:number,
  menus:Imenu[],
}
export interface ResturantProps{
  name:string,
  rating:number
  deliveryTime:string,
  categories: string[],
  image:string,
  orderId:number,
  location:string,
  offers:string,
  
}
export type menuType= 'veg' |'NonVeg'


export interface IResturantDetails{
  name:string,
  rating:number,
  deliveryTime:string,
  category:string[],
  image:string,
  orderId:number,
  location:string,
  offers:string,
  menucategory:IMenuCategory[]
}


export interface raj{
  name:string,
  age:number
}