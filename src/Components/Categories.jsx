import FoodData from "./CardData"
import { Navbar } from "./Navbar"
import '../index.css'
import { FaStar } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Footer } from "./Footer";

export const Categories = ({clelem,clsetElem,cart,setCart,openCart,setOpenCart,totalItem,settotalItem,totPrice,settotPrice})=>{

const [inp,setInp] = useState("")
const [filterdCard,setfiltered] = useState([])
const [cateCh,setCategory] = useState("All")
const [rating,setRating] = useState("2")
const [filterOpt,setfilterOpt] = useState(false)
const [filterI,setfItem] = useState([])

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

const handleFilter = () =>{
    setfilterOpt(!filterOpt)
    setRating("2")
    setCategory("All")
}

const applFiltr = () =>{
     const newArr = FoodData.filter((elem)=>elem.category == cateCh).filter((elem)=>elem.rating>=rating)
     setfilterOpt(!filterOpt)
     setfItem(newArr)
}
useEffect(()=>{setfiltered(filterI)},[filterI])

    return(
        <>
       <Navbar cart={cart}/>
       <ToastContainer/>

      <h1 className="mx-16 lm:mx-5 my-4 text-lg font-medium font-serif">Find your favorite food</h1>
      <div className="flex  gap-4 lm:flex-col lm:items-start items-center px-16 lm:px-5">
       
       <button onClick={()=>handleFilter()} className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-400 text-lg"> Filter </button>
 
    
    <div className={`${filterOpt?"block":"hidden"} lm:shadow-2xl lm:shadow-gray-500 backdrop-blur-xl mix-blend-multiply lm:w-[65%] lm:px-2 lm:py-16 px-7 h-full py-5 w-[350px] right-0 top-0 bg-slate-300 fixed z-50   shadow-xl shadow-gray-400`}>
     
     <div className="flex flex-col gap-3">
     <div className="flex py-2 items-center gap-3">
    <h1 className="text-xl lm:text-lg inline-block">Category :</h1>
     <select name="" id="" value={cateCh} onChange={(e)=>setCategory(e.target.value)} className="px-3 lm:w-[45%] w-[40%] bg-black text-white py-2 border-2 cursor-pointer border-gray-200 focus:outline-none">
      <option value="All">All</option>
      <option value="Lunch" className="px-3">Lunch</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Dinner">Dinner</option>
      <option value="Snacks">Snack</option>
     </select>

    </div>

    <div className="flex py-4 items-center gap-3">
    <h1 className="text-xl lm:text-lg inline-block">Rating :</h1>
     <select name="" id=""  value={rating} onChange={(e)=>setRating(e.target.value)} className="px-3 bg-black text-white w-[40%] lm:w-[35%] py-2 border-2 cursor-pointer border-gray-200 focus:outline-none">
      <option value="2"> {"2"} </option>
      <option value="3" className="px-3"> {"3"} </option>
      <option value="4"> {"4"} </option>
      <option value="4.5">{"4.5"} </option>
     </select>

    </div>
     </div>
     
     <button onClick={()=>applFiltr()} className="px-4 my-5 py-2 w-[50%] lm:w-full lm:translate-x-[0%] translate-x-[50%] hover:bg-blue-500 duration-200 rounded-lg bg-blue-400  text-white"> Apply Filters </button>
     <IoCloseSharp onClick={()=>setfilterOpt(!filterOpt)} className='text-black cursor-pointer absolute right-5 top-5 text-2xl'/>

     </div>

       <input type="text" value={inp} onChange={(e)=> setInp(e.target.value)} placeholder="Search your favorite here..."  className="focus:outline-none text-lg rounded-xl lm:w-[90%] px-4  w-[20%] py-2 border-2"/>
      </div>
       <div className="px-16 lm:px-5 lm:flex lm:flex-col lm:items-center grid grid-cols-3 relative lD:grid-cols-3 tb:grid-cols-2 lm:grid-cols-1 gap-8 my-8">
      {
         filterdCard.length==0 ?
        FoodData.map((elem)=>{
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
           }):
           filterdCard.map((elem)=>{
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
           })
      }
        </div>
      <Footer/>
        </>
    )
}