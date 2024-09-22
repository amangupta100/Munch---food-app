import FoodData from "./CardData"
import { FaStar } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import '../index.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./Navbar";
import { useState } from "react";


export const Home = ({cart,setCart,openCart,setOpenCart,totalItem,settotalItem,totPrice,settotPrice}) =>{
  
    const [fav,setFav] = useState(false)
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
                });
            setCart([...cart,{...elem,quantity:1}])
            settotPrice(totPrice+elem.price)
            settotalItem(totalItem+1)
        }
    }
    return(
        <>
        <Navbar/>
        <ToastContainer className="toast_mess"/>
        <h1 className="text-center text-xl my-5"> Menu List</h1>
        <div className="px-16 grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 laptop:grid-cols-3 relative gap-8 my-14">
           {FoodData.map((elem)=>{
              return(
                <div key={elem.id} id="card" className="w-[100%] rounded-2xl relative h-[415px] bg-slate-100 hover:shadow-2xl hover:shadow-gray-600 duration-200 px-3 py-3">
                    <img src={elem.img} className="w-full rounded-2xl h-[180px]" alt="" />
              <div className="flex flex-col">
                <div className="flex my-3 justify-between">
                    <h1 className="text-lg font-bold"> {elem.name} </h1>
                    <h1 className="font-semibold text-lg text-green-400">₹{elem.price} </h1>
                </div>
                <p> {elem.desc.slice(0,70)}...  <a href="" className="text-blue-400">Read More</a> </p>
                <div className="flex justify-between my-3 items-center">
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