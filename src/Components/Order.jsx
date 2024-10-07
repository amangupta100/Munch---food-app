import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../index.css'
import { MdOutlineDelete } from "react-icons/md";
import { Navbar } from './Navbar';
import { NavLink } from 'react-router-dom';

export const Order = ({cart,setCart,openCart,setOpenCart,totalItem,settotalItem,totPrice,settotPrice}) =>{
    
    const addItem = (ele)=>{
        setCart((prev) =>{
           return prev.map((cur)=>{
                if(cur.id == ele.id){
                  return {...cur,quantity:cur.quantity+1}
                }
                return cur
            })
        })
        settotalItem(totalItem+1)
        settotPrice(totPrice + ele.price)
    }
    const lessItem = (ele) =>{
    setCart((prev)=>{
       return prev.map((cur)=>{
            if(cur.id == ele.id){
                return {...cur,quantity:cur.quantity-1}
            }
            return cur
        })
    })
    settotalItem(totalItem-1)
    settotPrice(totPrice-ele.price)
    setCart((prev)=>{
       return prev.filter((elem)=> elem.quantity>0)
    })
    }

    const handleDelete = (elem) =>{
        toast.info('Item deleted from cart', {
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
     const newCart = cart.filter((curElem)=>curElem!=elem)
     setCart(newCart)
     settotalItem(totalItem-elem.quantity)
     settotPrice(totPrice-elem.price* elem.quantity)
    }

    const handleClearCart = () =>{
        if(cart.length!=0){
            setCart([])
            toast.info('All Items removed from cart', {
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
                settotalItem(0)
                settotPrice(0)
        }
    }

    return(
        <>
        <div>
            <ToastContainer/>
<Navbar cart={cart}/>
<div className="py-7 relative px-10 lm:px-5">
<h1 className=" text-2xl font-semibold">My Orders</h1>

{
  cart.length ==0 ? <>
  <svg xmlns="http://www.w3.org/2000/svg" color='#f1c27d' className='my-7' width="96" height="96" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg> <h1 className='text-lg font-semibold'>Your cart is empty</h1></> : 

  <div className="flex flex-col gap-4 my-5">
    
    {
        cart.map((elem)=>{
            return(
                <div key={elem.id} className="w-[100%] relative flex items-center px-3 shadow-xl shadow-gray-200 hover:shadow-slate-400 duration-200  h-20   bg-white rounded-xl ">
            
            <MdOutlineDelete onClick={()=>handleDelete(elem)} className='absolute cursor-pointer top-2 right-2 text-xl' />
            
            <img src={elem.img} className='w-20 h-16 rounded-full' alt="" />
            <div className="flex mx-3  flex-col">
                <h1 className='text-[17px] font-semibold '> {elem.name} </h1>
                <h1 className='text-green-400 font-semibold'>₹{elem.price}</h1>
            </div>
            
            <div className="flex gap-2 absolute bottom-2 right-4 items-center">
                <button onClick={()=>addItem(elem)} className='border-2 hover:bg-green-400 duration-200 flex items-center justify-center border-gray-400 w-5 h-5 rounded-md'>+</button>
                <h1 className='text-[17px] font-semibold text-green-400 '> {elem.quantity} </h1>
                <button onClick={()=>lessItem(elem)} className='border-2 hover:bg-green-400 hover:border-none duration-200 flex items-center justify-center border-gray-400 w-5 h-5 rounded-md'>-</button>
            </div>
            
            </div> 
            )
            })
    }
        
    </div>

}
<div className="flex items-center justify-between lm:px-0 px-14 py-5">
  <NavLink to="/">  <button className='px-5 py-2  lm:px-3 text-white rounded-lg hover:bg-green-500 duration-200 bg-green-400'>Contiue Shopping</button></NavLink>
    <button onClick={()=>handleClearCart()} className='px-5 py-2 lm:px-3 text-white rounded-lg hover:bg-red-500 duration-200 bg-red-400'>Clear All</button>
</div>

<div className="w-[40%] lm:w-[75%] h-40 py-10">
    <h1 className="text-xl font-medium">Items : {totalItem} </h1>
    <h1 className="text-xl font-medium">Total Amount : ₹{totPrice} </h1>
    <button className="w-[30%] lm:w-[65%] lm:text-[16px] lm:py-2 my-3 bg-green-400 hover:bg-green-600 duration-200 text-white text-lg py-3 rounded-lg">CheckOut</button>
</div>
</div>


</div>
        </>
    )
}