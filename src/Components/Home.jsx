import FoodData from "./CardData"
import { FaStar } from "react-icons/fa6";
import '../index.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";
import img from '../assets/fernando-andrade-_P76trHTWDE-unsplash.jpg'

export const Home = ({clelem,clsetElem,cart,setCart,openCart,setOpenCart,totalItem,settotalItem,totPrice,settotPrice}) =>{

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
        <div className="w-full h-full">
        <ToastContainer/>
        <Navbar cart={cart}/>
       
     <div className="px-16 tb:px-12 lm:px-5">

     <div className=" border-2 border-slate-200 w-full">
      <div className="flex lm:flex-col lm:gap-2">

      <div className="flex w-1/2 lm:w-full lm:py-7 flex-col items-center justify-center">
      <div className="flex items-center gap-2">
            <p className='w-10 h-[2px] bg-[#414141] '></p>
           <h1 className='font-medium text-[#414141]'>Delicious Food</h1>
           </div>

           <h1 className='font-medium text-4xl lm:text-2xl text-[#414141] first-letter:text-6xl tb:first-letter:text-5xl tb:text-3xl'>Fastest Delivery Ever</h1>
         
          <NavLink to="/categories">
          <button className="flex items-center gap-2 my-3 px-8 py-4 bg-slate-200 hover:bg-slate-400 duration-300 ease-in-out transition-all hover:rounded-full hover:text-white">
           <h1 className='font-medium text-[#414141]'>SHOP NOW</h1>
            <p className='w-10 h-[2px] bg-[#414141] '></p>
           </button>
          </NavLink>

      </div>
      
      <img src={img} className="w-1/2 lm:w-full h-[490px] lD:h-[390px] tb:h-[320px]" alt="" />

      </div>
      </div>



     </div>

     <h1 className="text-center text-2xl my-8"> Menu List</h1>
        <div className="px-16 lm:px-5 lm:flex lm:flex-col lm:items-center grid grid-cols-3 relative lD:grid-cols-3 tb:grid-cols-2 lm:grid-cols-1 gap-8 my-8">
           {FoodData.map((elem)=>{
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

<Footer/>
        </div>
    )
}