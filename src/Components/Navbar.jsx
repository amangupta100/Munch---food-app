import { useState } from 'react'
import logo from '../assets/munchin-high-resolution-logo-transparent-cropped.svg'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import '../index.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import '../App.css'
import { CiDark } from "react-icons/ci";


export const Navbar = ({cart})=>{
   
    const [menu,setMenu] = useState(false)
    return(
        <div className="relative">
        
         <div className="w-full h-[85px] justify-between px-12 lm:px-5 laptop:px-20 lD:px-12 flex items-center">
             
         <NavLink to="/">  <img src={logo} alt="" onContextMenu={(e)=>e.preventDefault()} onDragStart={(e)=>e.preventDefault()} className='w-[15vw] lD:w-[20vw] tb:w-[25vw] lm:w-[44vw]'/> </NavLink>
        <div className="flex justify-between relative lm:hidden gap-8 items-center">
            <NavLink to="/"  style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"gray",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-lg hover:text-gray-500'>Home</NavLink>
            <NavLink to="/categories" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"gray",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-lg hover:text-gray-500'>Categories</NavLink>
            <NavLink to="/order" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"gray",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-lg hover:text-gray-500 relative'> <CiShoppingCart className='text-4xl'/> <h1 className='absolute right-[-10px] top-[-30%] bg-slate-400 px-2 rounded-full text-[16px] text-white '> {cart.length} </h1> </NavLink>
        </div>
        <RxHamburgerMenu onClick={()=>setMenu(!menu)} className='text-2xl desktop:hidden lm:inline'/>
       
      

       <div className={`fixed ${menu?'inline-block':"hidden"} duration-500 flex flex-col gap-4 backdrop-blur-[7px] mix-blend-multiply justify-center items-center w-full h-full top-0 right-0 bg-slate-400  z-50`}>
        <IoCloseSharp onClick={()=>setMenu(!menu)} className='text-black absolute right-5 top-5 text-3xl'/>
        <NavLink to="/"  style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"black",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-[23px] origin-top text-black bg-blend-difference px-2 py-3 rounded-lg '>Home</NavLink>
            <NavLink to="/categories" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"black",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-[23px] text-black bg-blend-difference  px-2 py-3 rounded-lg '>Categories</NavLink>
            <NavLink to="/order" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"black",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-[23px] text-black bg-blend-difference  px-2 py-3 rounded-lg '>Cart</NavLink>
            <div className="flex w-full flex-col gap-1 absolute bottom-2">
           <div className="flex justify-center gap-4">
           <FaLinkedin onClick={()=> window.open("https://www.linkedin.com/in/aman-gupta-721953250/","_blank")} className="text-4xl"/>
           <FaGithub onClick={()=> window.open("https://github.com/amangupta100","_blank")}  className="text-4xl"/>
           </div>
           <h1 className='text-lg font-medium text-center'>Design & Developed by Aman Gupta</h1>
            </div>
        </div>


         </div>
       
        
        </div>
    )
}
