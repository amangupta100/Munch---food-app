import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../index.css'
import { MdOutlineDelete } from "react-icons/md";

export const Cart = ({cart,setCart,openCart,setOpenCart,totalItem,settotalItem,totPrice,settotPrice}) =>{

    const handleCloseC = () =>{
        setOpenC(!openC)
    }
    
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
        setCart((prev) => {
            return prev.map(pr => {
                if (pr?.id === ele?.id) {
                    return { ...pr, quantity: pr?.quantity - 1 }
                }
                return pr
            }).filter(pr => pr?.quantity > 0)
        })
        settotPrice(totP - ele.price)
        settotalItem(totalItem-1)
    }

    const handleDelete = (elem) =>{
        toast.info('Item deleted from cart', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
     const newCart = cartElem.filter((curElem)=>curElem!=elem)
     setcart(newCart)
     setPrice(totP-elem.price)
     settotalItem(totalitem-1)
    }

    return(
        <>
        <div className={`${openCart?"openedC":"closedC"}  fixed px-7  flex flex-col justify-between right-0 top-0 w-[25%] h-full bg-slate-200 shadow-2xl shadow-slate-500 z-50 `}>

<div className="py-7 relative">
    <div onClick={handleCloseC} className="w-10 cursor-pointer absolute right-5 flex items-center justify-center h-10 rounded-full bg-white">
        <button> X </button>
    </div>
<h1 className=" text-2xl font-semibold">My Order</h1>
{cart.len==0? <h1 className="text-[20px] my-3 text-center font-semibold">Your Cart is empty</h1> :

<div className="flex flex-col gap-4 my-5">

{
    cart.map((elem)=>{
        return(
            <div key={elem.id} className="w-[100%] relative flex items-center px-3 shadow-xl shadow-gray-200 hover:shadow-slate-400 duration-200  h-20   bg-white rounded-xl ">
        
        <MdOutlineDelete onClick={()=>handleDelete(elem)} className='absolute cursor-pointer top-2 right-2 text-xl' />
        
        <img src={elem.img} className='w-16 h-16 rounded-full' alt="" />
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
</div>

<div className=" w-full h-24 bg-black">
    <h1 className="text-xl font-medium">Items : {totalitem} </h1>
    <h1 className="text-xl font-medium">Total Amount : {totP} </h1>
    <button className="w-[90%] bg-green-400 text-white text-lg py-2 rounded-lg">CheckOut</button>
</div>

</div>
        </>
    )
}