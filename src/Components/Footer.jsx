import logo from '../assets/munchin-high-resolution-logo-transparent-cropped.svg'
import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import {  MdMail } from "react-icons/md";

export const Footer = () =>{
    return(
        <div className="bg-[rgb(48,48,48)] overflow-x-hidden lm:px-7 w-full h-full text-white lD:px-24 px-32 py-20">
        
        <div className="flex lm:flex-col lm:items-center">

        <div className="flex flex-col">
        <img src={logo} onDragStart={(e)=>e.preventDefault()} onContextMenu={(e)=>e.preventDefault()} className='w-[280px] h-[60px] lm:w-[200px]' alt="" />
       
        <div className="flex flex-col gap-7 my-5">
       <div className="flex  gap-3 w-[95%] ">
       <button type='button' className='w-[70px] hover:bg-slate-400 duration-200 h-[45px] flex justify-center items-center rounded-full bg-slate-500'> <CiLocationOn className='text-2xl'/> </button>
       <h1>Mumtajnagar near Polytechnic , Sahadatganj , Ayodhya, 224001</h1>
       </div>

       <div className="flex items-center  gap-3 w-[95%] ">
       <button type='button' className='w-[45px] hover:bg-slate-400 duration-200 h-[45px] flex justify-center items-center rounded-full bg-slate-500'> <IoCall className='text-2xl'/> </button>
       <h1>8467922118</h1>
       </div>
       
       <div className="flex items-center  gap-3 w-[90%] ">
       <button type='button' className='w-[45px] hover:bg-slate-400 duration-200 h-[45px] flex justify-center items-center rounded-full bg-slate-500'> <MdMail className='text-2xl'/> </button>
       <h1>coderamang02@gmail.com</h1>
       </div>

        </div>

        </div>
   
    <div className="flex lm:flex-col items-center justify-center lm:items-center w-full lD:grid-cols-2 tb:w-full lm:gap-2 tb:gap-10 lD:gap-0 lD:w-full gap-4">
        <div className="flex  flex-col lm:items-center lm:w-[45%] tb:w-[120%] gap-3 my-10 lm:my-3 mx-6">
            <h1 className='text-xl font-semibold'>Company</h1>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>About</a>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>Careers</a>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>Investor Relations</a>
        </div>
     
        <div className="flex  flex-col gap-3 lm:items-center lm:w-[45%] tb:w-[120%] my-10 mx-6">
            <h1 className='text-xl font-semibold'>Contact Us</h1>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>Help & Support</a>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>Partner with us</a>
        </div>

        <div className="flex  tb:w-[120%] lm:items-center flex-col lm:w-[45%] gap-3 my-10 mx-6">
            <h1 className='text-xl font-semibold'>Legal</h1>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>Terms & Condition</a>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>Cookie Policy</a>
            <a href="" className='text-lg text-gray-400 hover:text-gray-200'>Privacy Policy</a>
        </div>

    </div>

        </div>

        <h1 className='text-lg font-semibold text-center'>Designed and developed by Aman Gupta</h1>
        <h1 className='text-lg font-bold text-center my-2'>Copyright © 2024 Munch.in | All Rights Reserved</h1>
         
        </div>
    )
}