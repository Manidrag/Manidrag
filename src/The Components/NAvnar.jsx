import { NavLink, Outlet } from "react-router-dom";
import React, { useState } from "react";

//yhtramdh
export function Navbar(){  let [bgclr,setbgclr]=useState("#DFE0DC")
    document.body.style.backgroundColor=bgclr;
  return<> 
<header  className="flex justify-between flex-col md:flex-row gap-5 font-theHck" style={{transition:"all 1s"}}>
<div><NavLink to={'/'} onClick={()=>setbgclr("cream")} className="text-5xl text-red-400 shadow-2xl  m-0 p-0 rounded-xl hover:shadow-black "> YOUR PORTFOLIO </NavLink></div>
<div className=""><NavLink to={'/'} className=" shadow-2xl bg-white shadow-gray-50 text-red-900 m-5 hover:text-blue-500 p-2 pt-3 pb-3 hover:shadow-black hower:shadow-2xl rounded-xl font-bold   hover:bg-white">Home</NavLink>
<NavLink to={'/iprojects/:'} className="p-11  pt-1   shadow-2xl bg-white shadow-gray-50 text-red-900 m-5 hover:text-blue-500 pb-1 hover:shadow-black hover:shadow-xl rounded-xl font-bold    hover:bg-white">Projects</NavLink>
<NavLink to={'/Skillandprojects'} className="    shadow-2xl bg-white shadow-gray-50 text-red-900 m-5 hover:text-blue-500  pt-1 pb-1  pl-2 pr-2 hover:shadow-black  hover:shadow-xl rounded-xl font-bold bg   hover:bg-white">SKills</NavLink>
</div> 
</header>
<Outlet/>
<div className="flex justify-between flex-col md:flex-row gap-5 font-mono relative bottom-3"> 
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
    alt="" className="z-10 h-10  bg-white rounded-xl m-5 hover:border-red-700 hover:border-0 w-40 " />
    </div>
</>

}