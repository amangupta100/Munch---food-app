import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./Components/Home"
import { Categories } from "./Components/Categories"
import { Order } from "./Components/Order"
import { useState } from "react"


export const App = () =>{
    const [cart,setCart] = useState([])
    const [openCart,setOpenCart] = useState(false)
    const [totalItem,settotalItem] = useState(0)
    const [totPrice,settotPrice] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} totalItem={totalItem} settotalItem={settotalItem} totPrice={totPrice} settotPrice={settotPrice} />,
    },{
      path:"/categories",
      element:<Categories cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} totalItem={totalItem} settotalItem={settotalItem} totPrice={totPrice} settotPrice={settotPrice} />
    },{
      path:"/order",
      element:<Order cart={cart} setCart={setCart} openCart={openCart} setOpenCart={setOpenCart} totalItem={totalItem} settotalItem={settotalItem} totPrice={totPrice} settotPrice={settotPrice}/>
    },
  ]);
  return(
    <>
   <RouterProvider router={router}/>
    </>
  )
}