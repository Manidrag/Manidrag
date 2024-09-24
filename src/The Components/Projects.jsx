import React from "react";
import { NavLink, UNSAFE_useRouteId, useOutletContext, useParams, useResolvedPath } from "react-router-dom";
import "./Transition.css"
export function Projects(){
    const data=useParams();console.log(data)
    let name;
    let link;
    let srrt;
    console.log(data)
   
   
return(<>{data.id=="React"?<>
<NavLink className="grid justify-center mt-14 " to="http://react.dev"><img className="h-44 " src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>REACT <br /> </NavLink>
    <p className="font-theHck font-bold underline">REACT PROJECTS </p> </>:null}
    {data.id=="Redux"?<>

     <NavLink className="grid justify-center mt-8" to="https://redux.js.org"><img className="h-44 " src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png"></img>REDUX <br /> </NavLink>
        <p className="font-theHck font-bold underline">REDUX PROJECTS </p> </>:null}
        {data.id=="Css"?<><NavLink className="grid justify-center " to="https://tailwindcss.com/"><img className="h-44 " src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/tailwind-512.png"></img>CSS<br /> </NavLink>
    <p className="font-theHck font-bold underline">CSS AND TAILWIND PROJECTS </p> </>:null}
   
       {data.id=="HTML"?<><NavLink className="grid justify-center m-9 " to="https://html.com"><img className="h-44 " src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"></img>HTML <br /> </NavLink>
    <p className="font-theHck font-bold underline">HTML PROJECTS </p> </>:null}
    {data.id=="JavaScript"?<><NavLink className="grid justify-center m-3 " to="https://www.javascript.com"><img className="h-44 " src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-512.png"></img>JavaScript <br /> </NavLink>
    <p className="font-theHck font-bold underline">JavaScript PROJECTS </p> </>:null}
   
   
<ul  className="m-20 text-white text-xl font-theHck ">
<li id="trans" className=" font-bold rounded-xl hover:text-3xl h-auto bg-blue-600 shadow-lg shadow-white p-2 m-2 "><NavLink className="font-extrabold underline text-2xl text-black">To-Do List </NavLink><p>It a simple web app in which you add the items when its done mark it as done!  </p> <br></br><p className="flex-col h-auto">Skills: HTML,Tailwind,REACT.js</p> </li>
<li id="trans"  className=" font-bold rounded-xl hover:text-3xl m-2 bg-blue-600 shadow-lg shadow-white p-2 transition-opacity duration-300 ease-in-out"><NavLink className="font-extrabold text-2xl underline text-black  ">Food-Recipe </NavLink><br></br> <p>In This projext we made a website which use Api to fetch recipe details based on the user search</p><br></br>
<p>Skill used:REACT,Tailwind or CSS,HTML</p></li>
<li id="trans" className="font-bold rounded-xl  hover:text-3xl bg-blue-600 shadow-lg shadow-white p-2 m-1"><NavLink className='font-extrabold underline text-2xl text-black'>Shopping Cart</NavLink><p>In this project i used APi to fetch data of product and use REDUX to maintail the data library of ADD to CART funtionality TO calculate Total price</p><br></br>
<p>Skill Used:REDUX,REACT</p></li></ul>

</>)

   
}