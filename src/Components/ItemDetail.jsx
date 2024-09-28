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
                autoClose: 3000,
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
                autoClose: 3000,
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
        <div className="px-8 lm:px-7 my-14">
       
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
        <div className="px-16 grid grid-cols-4  lD:grid-cols-3 tb:grid-cols-2 lm:grid-cols-1 overflow-hidden relative gap-8 my-14">
           {favFood.map((elem)=>{
              return(
                <div key={elem.id} className="lm:h-[400px] rounded-2xl bg-slate-100 hover:shadow-xl hover:shadow-gray-400 duration-200 p-3">
                    <img src={elem.img} className="w-full hover:scale-[1.02] duration-150 rounded-2xl lm:h-[150px] h-[180px]" alt="" />
              <div className="flex flex-col">
                <div className="flex my-3 justify-between">
                    <h1 className="text-lg font-bold"> {elem.name} </h1>
                    <h1 className="font-semibold text-lg text-green-400">₹{elem.price} </h1>
                </div>
                <p> {elem.desc.slice(0,70)}...   <NavLink to={`${elem.id}`} target="_self" className="text-blue-400"><button onClick={()=>handleSetElem(elem)}> Read More </button></NavLink></p>
                <div className="flex justify-between my-3 lm:my-3 items-center">
                   <section className="flex items-center gap-1"><FaStar className="text-yellow-400 text-xl" /> <h1 className="text-[20px] font-bold inline-block">  {elem.rating} </h1></section>
                    <button onClick={()=> handleCart(elem)} className="bg-green-400 px-4 rounded-xl hover:bg-green-600 duration-150 py-3 text-white font-semibold">Add to Cart</button>
                </div>
              </div>
          </div>
              )
            })}
        </div>
        </>
    )
}