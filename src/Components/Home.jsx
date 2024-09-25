import FoodData from "./CardData"
import { FaStar } from "react-icons/fa6";
import '../index.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";

export const Home = ({clelem,clsetElem,cart,setCart,openCart,setOpenCart,totalItem,settotalItem,totPrice,settotPrice}) =>{

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
        <div className="w-full h-full">
        <Navbar/>
        <ToastContainer/>
        <h1 className="text-center text-xl my-5"> Menu List</h1>
        <div className="px-16 grid grid-cols-4 lm:flex lm:flex-col lm:items-center lD:grid-cols-3 tb:grid-cols-2 gap-8 my-14">
           {FoodData.map((elem)=>{
              return(
                <div key={elem.id} className="lm:h-[380px] lm:w-[90%] rounded-2xl bg-slate-100 hover:shadow-xl hover:shadow-gray-400 duration-200 p-3">
                    <img src={elem.img} className="w-full hover:scale-[1.02] duration-150 rounded-2xl lm:h-[140px] h-[180px]" alt="" />
              <div className="flex flex-col">
                <div className="flex my-3 justify-between">
                    <h1 className="text-lg font-bold"> {elem.name} </h1>
                    <h1 className="font-semibold text-lg text-green-400">₹{elem.price} </h1>
                </div>
                <p> {elem.desc.slice(0,70)}...   <NavLink to={`${elem.id}`} target="_self" className="text-blue-400"><button onClick={()=>clsetElem(elem)}> Read More </button></NavLink></p>
                <div className="flex justify-between my-3 lm:my-3 items-center">
                   <section className="flex items-center gap-1"><FaStar className="text-yellow-400 text-xl" /> <h1 className="text-[20px] font-bold inline-block">  {elem.rating} </h1></section>
                    <button onClick={()=> handleCart(elem)} className="bg-green-400 px-4 rounded-xl hover:bg-green-600 duration-150 py-3 text-white font-semibold">Add to Cart</button>
                </div>
              </div>
          </div>
              )
            })}
        </div>
        <Footer/>
        </div>
    )
}