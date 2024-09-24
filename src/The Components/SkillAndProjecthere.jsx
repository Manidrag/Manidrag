//hramth
//ram











//harekrishnarammramramramram













import React from "react"
import { NavLink } from "react-router-dom"
export function Skillandprojects(){
   
   

return<>
        <div className="flex-col"><div className="m-20"><p className="text-xl p-3 rounded-md bg-amber-400 inline m-5 items-center content-center">SKILLs</p></div>
        <div className="m-10"><ul className=" flex justify-center gap-4 flex-wrap md:flex-wrap-reverse font-theHck">
            <li  style={{transition:"all 1s"}} value="React" className="text-2xl text-white bg-blue-800  shadow-white shadow-2xl  rounded-lg h-auto w-40 hover:text-4xl hover:border-blue-800 hover:bg-blue-700"><NavLink className="text-white"to="/iprojects/React"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" className=" h- inline " />REACT</NavLink></li>
            <li style={{transition:"all 1s"}}  value="Redux" className="text-2xl text-white bg-blue-800  shadow-white shadow-2xl  rounded-lg h-auto w-40 inline hover:text-4xl hover:border-blue-800 hover:bg-blue-700"><NavLink className="text-white" to="/iprojects/Redux"><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png" alt="" className="h-30" />REDUX</NavLink></li>
            <li style={{transition:"all 1s"}}  value="Css" className="text-2xl text-white bg-blue-800  shadow-white shadow-2xl  rounded-lg h-auto w-40 inline hover:text-4xl hover:border-blue-800 hover:bg-blue-700"><NavLink className='text-white'to='/iprojects/Css' ><img src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/tailwind-512.png " alt="" className="inline h-30 rounded-lg object-left m-0" />CSS & TAILWIND</NavLink></li>
            <li  style={{transition:"all 1s"}} value="HTML" className="text-2xl text-white bg-blue-800  shadow-white shadow-2xl rounded-lg h-auto w-40 inline   hover:border-blue-800  hover:text-4xl hover:bg-blue-700"><NavLink className='text-white' to='/iprojects/HTML' ><img src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png" className="inline h- overflow-visible rounded-lg object-left m-4 pt-2"></img>HTML</NavLink></li>
            <li style={{transition:"all 1s"}}  value="JavaScript" className="text-2xl text-white bg-blue-800  shadow-white shadow-2xl  rounded-lg h-auto w-40 inline hover:text-4xl hover:bg-blue-700"><NavLink className='text-white'to='/iprojects/JavaScript' ><img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-512.png" alt="" className="m-4 h-25 rounded-lg"/>JavaScript</NavLink></li>
        </ul></div></div>
</>
}