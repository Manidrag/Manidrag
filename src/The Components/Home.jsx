import React from "react"
import './style.css'


export function Home(){
    return<>

<div style={{transition:" all 1s"}} className=" md:flex shadow-xl  gap-5 justify-center items-center font-theHck">
<img src="./src/The Components/index.png" style={{transition:" all 1s"}}
className="rounded-full bg-cover  m-5 hover:border-red-500 border-white shadow-2xl shadow-black md:h-80 mr-20 items-center "></img>
<div id="resume" className="mt-5 h-auto text-red-400  hover:text-xl bg-gray-800  shadow-white rounded-lg shadow-2xl flex items-center p-5">
<p id="blink" >This is Resume of FrontEnd Developer!<br></br> Manish Krishna Joshi.</p></div></div>
<p style={{transition:" all 1s"}} className="text-emerald-800 text-2xl p-10 shadow-white font-theHck mt-8 hover:text-red-300 hover:font-bold hover:bg-slate-100 rounded-2xl shadow-2xl">Knowledge is Good! <br></br>But it sHould Be used foR The Better Purpose!<br></br> To iNNovate ! To EvolVe ! To GiVe! <br></br>To UnderStanD ! To BuiLD!</p>

</>

}