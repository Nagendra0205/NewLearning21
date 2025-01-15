import { IResturantDetails, ResturantProps } from "../Modules/Resturant/models";

export const ResturantMock:ResturantProps[]=[
    {
        name:"VaralakshmiTiffins",
        categories:['SouthIndian'],
        deliveryTime:"10-20mis",
        rating:4.5,
        location:"Madapur",
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wjk5wojurrjthnaihzeg",
        orderId:1,
        offers:'',
            
    },
    {
        name:"Rameswaramcafe",
        categories:['SouthIndian','Snacks','Beverges'],
        deliveryTime:"20-30mis",
        rating:4.0,
        location:"HitechCity",
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e44abba1cb13eb2777f7a72c2be9794f",
        orderId:2,
        offers:'',
        

    },
    {
        name:"Rameswaramcafe",
        categories:['SouthIndian','Snacks','Beverges'],
        deliveryTime:"20-30mis",
        rating:4.0,
        location:"HitechCity",
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e44abba1cb13eb2777f7a72c2be9794f",
        orderId:3,
        offers:'',
        
    },
    {
        name:"VaralakshmiTiffins",
        categories:['SouthIndian'],
        deliveryTime:"10-20mis",
        rating:4.5,
        location:"Madapur",
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wjk5wojurrjthnaihzeg",
        orderId:4,
        offers:'',
    
    },
]

export const ResturantMockData:IResturantDetails=
    {
        name:"VaralakshmiTiffins",
        category:['SouthIndian'],
        deliveryTime:"10-20mis",
        rating:4.5,
        location:"Madapur",
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wjk5wojurrjthnaihzeg",
        orderId:1,
        offers:'',
        menucategory:[
            {
             categoryId:1,
             name:"Idli",
             count:2,
             menus:[
                {
                    menuId:1,
                    name:'idly',
                    type:'veg',
                    price:195,
                    description:"Idly is made from grond rice o rice flour mixed", 
                    bestSeller:true,
                    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/144768312C.png"                


                },
                {
                    menuId:2,
                    name:'GeeKaramIdly',
                    type:'veg',
                    price:200,
                    description:" Ghee Idly is made from grond rice and Ghee mixed", 
                    bestSeller:true,
                    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/144768341C.png"                
                },
                
             ]

            },
            {
                categoryId:2,
                name:"Dosa",
                count:2,
                menus:[
                   {
                       menuId:1,
                       name:'Dosa',
                       type:'veg',
                       price:195,
                       description:"Dosa is made from grond rice o rice flour mixed", 
                       bestSeller:true,
                       image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wjk5wojurrjthnaihzeg"                
   
   
                   },
                   {
                       menuId:2,
                       name:'Karamdosa',
                       type:'veg',
                       price:200,
                       description:"Dosa is made from grond rice or rice flour mixed and ghee, ghee karampodi", 
                       bestSeller:true,
                       image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/12/bbedb747-3553-4c83-a82e-accefc0399dd_e7e80f83-2a64-464e-a25d-999ede27939b.jpg"                
   
   
                   }]
           }
            
        ]
    }
