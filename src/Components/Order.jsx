import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../index.css'
import { MdOutlineDelete } from "react-icons/md";
import { Navbar } from './Navbar';

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
            autoClose: 3000,
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
    return(
        <>
        <div>
            <ToastContainer/>
<Navbar/>
<div className="py-7 relative px-4">
<h1 className=" text-2xl font-semibold">My Orders</h1>

{
  cart.length ==0 ? <h1 className='text-xl my-4'>Your cart is empty</h1>: 

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

<div className="w-full h-40 py-10">
    <h1 className="text-xl font-medium">Items : {totalItem} </h1>
    <h1 className="text-xl font-medium">Total Amount : {totPrice} </h1>
    <button className="w-[90%] bg-green-400 text-white text-lg py-2 rounded-lg">CheckOut</button>
</div>
</div>


</div>
        </>
    )
}