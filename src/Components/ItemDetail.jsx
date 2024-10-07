import { Navbar } from "./Navbar"
import { FaStar } from "react-icons/fa6";
import FoodData from "./CardData";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import '../index.css'

export const ItemDetail = ({clelem,clsetElem,cart,setCart,totalItem,settotalItem,totPrice,settotPrice}) =>{

    const [favFood,setFood] = useState([])
    useEffect(()=>{
        const newFood = FoodData.filter((curEl)=> curEl.category === clelem.category)
        setFood(newFood)
    },[clelem])

    const star = []
     const starCnt = Math.round(clelem.rating)
     for(let i=1;i<=starCnt;i++){
      star.push(starCnt)
     }
     useEffect(()=>{
     const handleSetElem = (elem) =>{
      clsetElem(elem)
     }
     },[clelem])

     const handleCart = (elem) =>{
        if(cart.find((curElem)=> curElem.id == elem.id)){
            toast.info('Item already in cart', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                className:"toast-message"
            });
        }
        else{
            
            toast.success('Item added in cart', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                className:"toast-message"
            });
            setCart([...cart,{...elem,quantity:1}])
            settotPrice(totPrice+elem.price)
                settotalItem(totalItem+1)
            }
     }
    return(
        <>
        <Navbar cart={cart}/>
       <ToastContainer/>
        <div className="px-8 lm:px-5 my-14">
       
        <div className="flex lm:flex-col lm:items-center gap-20 lm:gap-7">
        <img src={clelem.img} className="w-[380px] hover:scale-[1.02] duration-150 lm:h-[180px] lm:w-[300px] rounded-lg h-[250px]"/>
       <div className=" w-[45%] lm:w-[100%]">
       <h1 className="text-xl"> {clelem.name} </h1>
       <div className="flex items-center gap-2  ">
       <h1 className="text-xl "> Price :  </h1> <h1 className="text-xl font-bold text-green-400">₹ {clelem.price} </h1> 
       </div>
       <p className="text-lg my-3"> {clelem.desc} </p>
      <div className="flex  items-center">
      <h1 className="text-xl lm:block">Customer Rating :</h1>
      <h1 className="font-bold mx-2 text-xl text-green-500 lm:inline-block"> {clelem.rating} </h1>
      {
     star.map((_,i)=>{
            return(
                <FaStar key={i} className="text-yellow-400 text-xl" />
            )
        })
      }
      </div>
       <button onClick={()=> handleCart(clelem)} className="bg-green-400 my-3 px-4 rounded-xl hover:bg-green-600 duration-150 py-3 text-white font-semibold">Add to Cart</button>
       </div>
        </div>

        </div>
        
        <h1 className="text-center my-4 font-medium text-xl">Similar dishes that you may like ❤️</h1>
        <div className="px-16 lm:px-5 grid grid-cols-4  lD:grid-cols-3 tb:grid-cols-2 lm:grid-cols-1 overflow-hidden relative gap-8 my-14">
           {favFood.map((elem)=>{
 return(
    <div className="w-full desktop:h-[210px] h-[170px] lm:h-[220px] gap-3 bg-slate-100 hover:shadow-xl lm:shadow-xl rounded-2xl items-center flex lm:gap-8 p-3" key={elem.id}>
    <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[17px] ">{elem.name}</h1>
        <h1 className="font-semibold">₹{elem.price}</h1>
        <p> {elem.desc.slice(0,25)}... <NavLink to={`${elem.id}`} target="_self" className="text-blue-400"><button onClick={()=>clsetElem(elem)}> Read More </button></NavLink> </p>
        <button onClick={()=> handleCart(elem)} className=" rounded-xl hover:bg-slate-300 font-bold text-lg px-7 py-2 text-green-600 bg-white my-2">Add</button>
    </div>
    <img src={elem.img} className="w-full h-[76%] max-w-[50%] rounded-xl " alt="" />
  
   </div>
)
            })}
        </div>
        </>
    )
}