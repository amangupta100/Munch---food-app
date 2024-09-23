import FoodData from "./CardData"
import { Navbar } from "./Navbar"
import { MdFavorite } from "react-icons/md";
import '../index.css'
import { FaStar } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Categories = ({clelem,clsetElem,cart,setCart,openCart,setOpenCart,totalItem,settotalItem,totPrice,settotPrice})=>{

const [inp,setInp] = useState("")
const [filterdCard,setfiltered] = useState([])
const [cateCh,setCategory] = useState("All")

useEffect(()=>{
const newFilter = FoodData.filter((elem=>{
return(
    elem.name.toLowerCase().includes(inp.toLowerCase())
)
}))
setfiltered(newFilter)
},[inp])

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


    const handleSelect = (val) =>{
        setCategory(val)
       }
useEffect(()=>{
const changCat = FoodData.filter(elem => elem.category == cateCh)
setfiltered(changCat)
},[cateCh])
    return(
        <>
       <Navbar/>
       <ToastContainer/>

      <h1 className="mx-16 my-4 text-lg font-medium font-serif">Find your favorite food</h1>
      <div className="flex gap-4 lm:flex-col lm:items-start items-center px-16">
       
      <h1 className="text-xl ">Filter :</h1>
       <select name="" id="" value={cateCh} onChange={(e)=>handleSelect(e.currentTarget.value)} className="px-3 py-2 border-2 cursor-pointer border-gray-200 focus:outline-none">
        <option value="All">All</option>
        <option value="Lunch" className="px-3">Lunch</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snack</option>
       </select>

       <input type="text" value={inp} onChange={(e)=> setInp(e.target.value)} placeholder="Search your favorite here..."  className="focus:outline-none text-lg rounded-xl lm:w-[70%] px-4  w-[20%] py-2 border-2"/>
      </div>
       <div className="px-16 grid grid-cols-4 relative lD:grid-cols-3 tb:grid-cols-2 lm:grid-cols-1 gap-8 my-8">
      {
        cateCh == "All" && filterdCard.length==0 ?
        FoodData.map((elem)=>{
            return(
             <div key={elem.id} id="card" className="w-[100%] rounded-2xl relative h-[415px] bg-slate-100 hover:shadow-2xl hover:shadow-gray-600 duration-200 px-3 py-3">
              <img src={elem.img} className="w-full rounded-2xl h-[180px]" alt="" />
        <div className="flex flex-col">
          <div className="flex my-3 justify-between">
              <h1 className="text-lg font-bold"> {elem.name} </h1>
              <h1 className="font-semibold text-lg text-green-400">₹{elem.price} </h1>
          </div>
          <p> {elem.desc.slice(0,70)}...  <NavLink onClick={()=>clsetElem(elem)} to={`/${elem.id}`} target="_self" className="text-blue-400">Read More</NavLink> </p>
          <div className="flex justify-between my-3 items-center">
             <section className="flex items-center gap-1"><FaStar className="text-yellow-400 text-xl" /> <h1 className="text-[20px] font-bold inline-block">  {elem.rating} </h1></section>
              <button onClick={()=> handleCart(elem)} className="bg-green-400 px-4 rounded-xl hover:bg-green-600 duration-150 py-3 text-white font-semibold">Add to Cart</button>
          </div>
        </div>
    </div>
            )
           }):
           filterdCard.map((elem)=>{
            return(
             <div key={elem.id} id="card" className="w-[100%] rounded-2xl relative h-[415px] bg-slate-100 hover:shadow-2xl hover:shadow-gray-600 duration-200 px-3 py-3">
             <MdFavorite id="favorite" className="absolute cursor-pointer top-5 right-10 text-pink-600 text-[35px] "/>
              <img src={elem.img} className="w-full rounded-2xl h-[180px]" alt="" />
        <div className="flex flex-col">
          <div className="flex my-3 justify-between">
              <h1 className="text-lg font-bold"> {elem.name} </h1>
              <h1 className="font-semibold text-lg text-green-400">₹{elem.price} </h1>
          </div>
          <p> {elem.desc.slice(0,70)}...   <NavLink onClick={()=>clsetElem(elem)} to={`categories/${elem.id}`} target="_self" className="text-blue-400">Read More</NavLink>  </p>
          <div className="flex justify-between my-3 items-center">
             <section className="flex items-center gap-1"><FaStar className="text-yellow-400 text-xl" /> <h1 className="text-[20px] font-bold inline-block">  {elem.rating} </h1></section>
              <button onClick={()=> handleCart(elem)} className="bg-green-400 px-4 rounded-xl hover:bg-green-600 duration-150 py-3 text-white font-semibold">Add to Cart</button>
          </div>
        </div>
    </div>
            )
           })
      }
        </div>
        </>
    )
}