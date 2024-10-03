//hramth
//ram

//harekrishnarammramramramram

import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
export function Skillandprojects() {
  return (
    <>
      <div className="m-20">
        <p className="text-xl rounded-md bg-amber-200 p-5 inline m-5 items-center content-center shadow-2xl shadow-black font-theHck">
          SKILLS
        </p>
      </div>
      <div className="hey">
        <div className="List" style={{"--quantity":5}}>
        <div className="itegh1 text-2xl text-white bg-[url('https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover shadow-red-500 shadow-2xl  rounded-lg h-auto w-40 hover:text-4xl hover:border-blue-800"style={{"--position":1}}><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""  /><NavLink className="text-white uppercase" to="/iprojects/React">React</NavLink></div>
        <div className="itegh2  text-2xl text-white bg-[url('https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  shadow-red-600 shadow-2xl  rounded-lg h-auto w-40 inline bg-cover hover:text-4xl"style={{"--position":2}}><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png" alt=""  />  <NavLink className="text-white uppercase " to="/iprojects/Redux">Redux</NavLink></div>
        <div className="itegh3 text-2xl text-white bg-[url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  shadow-red-600 shadow-2xl  rounded-lg h-auto w-40 inline   hover:border-blue-800 bg-cover hover:text-4xl "style={{"--position":3}}><img src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/tailwind-512.png" alt=""  /> <NavLink className="text-white uppercase" to="/iprojects/Css">Css & Tailwind</NavLink></div>
        <div className="itegh4 text-2xl text-white bg-[url('https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover shadow-red-700 shadow-2xl  rounded-lg h-auto w-40 inline hover:text-4xl hover:bg-blue-700"style={{"--position":4}}><img src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png" alt=""  /><NavLink className="text-white" to="/iprojects/HTML">HTML</NavLink></div>
        <div className="itegh5 text-2xl justify-center items-center text-white bg-[url('https://images.pexels.com/photos/2915997/pexels-photo-2915997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  shadow-red-500 shadow-2xl rounded-lg h-auto w-40 inline bg-cover hover:text-4xl"style={{"--position":5}}><img className="w-24 m-10" src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-512.png" alt=""  />   <NavLink className="text-white uppercase" to="/iprojects/JavaScript">JavaScript</NavLink></div> </div></div></>)  }