import { useState } from 'react'
import logo from '../assets/munchin-high-resolution-logo-transparent.svg'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import '../index.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Navbar = ()=>{

    const [menu,setMenu] = useState(false)

    return(
        <div className="w-full h-[90px] mobile:h-[80px] flex  items-center justify-between px-20 mobile:px-8 py-2 relative">
       <NavLink to="/">  <img src={logo} alt="" onContextMenu={(e)=>e.preventDefault()} onDragStart={(e)=>e.preventDefault()} className='w-56 h-24 mobile:w-44'/> </NavLink>
        <div className="flex justify-between laptop:flex mobile:hidden gap-8 items-center px-20">
            <NavLink to="/"  style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"gray",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-lg'>Home</NavLink>
            <NavLink to="/categories" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"gray",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-lg'>Categories</NavLink>
            <NavLink to="/order" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"gray",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-lg'>Orders</NavLink>
        </div>
        <RxHamburgerMenu onClick={()=>setMenu(!menu)} className='text-2xl laptop:hidden mobile:inline-block'/>
        <div className={`fixed ${menu?'inline-block':"hidden"} duration-300 flex flex-col gap-4 justify-center items-center w-full h-full top-0 right-0 bg-slate-400 backdrop-blur-[7px] mix-blend-multiply z-50`}>
        <IoCloseSharp onClick={()=>setMenu(!menu)} className='text-black absolute right-5 top-5 text-3xl'/>
        <NavLink to="/"  style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"black",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-[23px] text-black bg-blend-difference px-2 py-3 rounded-lg '>Home</NavLink>
            <NavLink to="/categories" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"black",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-[23px] text-black bg-blend-difference  px-2 py-3 rounded-lg '>Categories</NavLink>
            <NavLink to="/order" style={({isActive})=>{
                return isActive? {color:"white",backgroundColor:"black",paddingLeft:"14px",paddingRight:"14px",paddingTop:"7px",paddingBottom:"7px",borderRadius:"12px"}:{}
            }} className='text-[23px] text-black bg-blend-difference  px-2 py-3 rounded-lg '>Orders</NavLink>
            <div className="flex w-full flex-col gap-1 absolute bottom-2">
           <div className="flex justify-center gap-4">
           <FaLinkedin className="text-4xl"/>
           <FaGithub  className="text-4xl"/>
           </div>
           <h1 className='text-lg font-medium text-center'>Design & Developed by Aman Gupta</h1>
            </div>
        </div>
        </div>
    )
}
