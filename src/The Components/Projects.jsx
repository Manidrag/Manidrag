import React from "react";
import "./style.css"
import {
  NavLink,
  UNSAFE_useRouteId,
  useOutletContext,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import "./Transition.css";
import { Ytodo } from "./Projects/To-do-list";
import { FoodRecipe } from "./Projects/TheFoodRES";
export function Projects() {
  const data = useParams();
  //hh
  console.log(data);
  function myFuctions(x) {
    let z = document.getElementById("" + x + "");
    console.log(z.style);
    if (z.style.display === "") {
      z.style.display = "none";
    } else {
      z.style.display = "";
    }
  }
  //hh
  return (
    <>
      {data.id == "React" ? (
        <>
          <NavLink className="grid justify-center mt-14 " to="http://react.dev">
            <img
              className="h-44 "
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            ></img>
            REACT <br />{" "}
          </NavLink>
          <p className="font-theHck font-bold underline">REACT PROJECTS </p>{" "}
        </>
      ) : null}
      {data.id == "Redux" ? (
        <>
          <NavLink
            className="grid justify-center mt-8"
            to="https://redux.js.org"
          >
            <img
              className="h-44 "
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png"
            ></img>
            REDUX <br />{" "}
          </NavLink>
          <p className="font-theHck font-bold underline">REDUX PROJECTS </p>{" "}
        </>
      ) : null}
      {data.id == "Css" ? (
        <>
          <NavLink
            className="grid justify-center "
            to="https://tailwindcss.com/"
          >
            <img
              className="h-44 "
              src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/tailwind-512.png"
            ></img>
            CSS
            <br />{" "}
          </NavLink>
          <p className="font-theHck font-bold underline">
            CSS AND TAILWIND PROJECTS{" "}
          </p>{" "}
        </>
      ) : null}

      {data.id == "HTML" ? (
        <>
          <NavLink className="grid justify-center m-9 " to="https://html.com">
            <img
              className="h-44 "
              src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
            ></img>
            HTML <br />{" "}
          </NavLink>
          <p className="font-theHck font-bold underline">HTML PROJECTS </p>{" "}
        </>
      ) : null}
      {data.id == "JavaScript" ? (
        <>
          <NavLink
            className="grid justify-center m-3 "
            to="https://www.javascript.com"
          >
            <img
              className="h-44 "
              src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-512.png"
            ></img>
            JavaScript <br />{" "}
          </NavLink>
          <p className="font-theHck font-bold underline">
            JavaScript PROJECTS{" "}
          </p>{" "}
        </>
      ) : null}

      <ul className=" text-white text-xl font-theHck ">
        <li
          id="trans"
          className=" font-bold rounded-xl items-center md:flex-col hover:text-1xl h-auto justify-center bg-red-200  hover:shadow-2xl hover:shadow-black shadow-black m-10 p-2"
        >
          <NavLink
            className="font-extrabold flex-none inline text-2xl text-black"
            onClick={() => myFuctions("tic")}
          >
            To-Do List
          </NavLink> </li>
        <div id="tic" style={{ display: "none" }}><Ytodo/></div>
       
       
        <li
          id="trans"
          className="  font-bold rounded-xl items-center  hover:text-1xl h-auto w-auto hover:shadow-lg bg-red-100  hover:shadow-black shadow-black m-10 p-2 "
        >
          <NavLink
            className="font-extrabold flex-none underline text-2xl text-black"
            onClick={() => myFuctions("Res")}
          >
            Food-Recipe{" "}
          </NavLink>
          <br></br>{" "}
          <div className="text-red-500" id="Res" style={{ display: "none" }}><FoodRecipe/>hhhh</div>
          
        </li>
        <li
          id="trans"
          className=" font-bold rounded-xl items-center md:flex hover:text-1xl md:h-44 h-auto justify-center  bg-red-300 hover:shadow-2xl hover:shadow-black shadow-black  p-2 "
        >
          <NavLink
            className="font-extrabold flex-none underline text-2xl text-black"
            onClick={() => myFuctions("RESTINGCART")}
          >
            Shopping Cart
          </NavLink>
          <p
            className="text-red-500"
            id="RESTINGCART"
            style={{ display: "none" }}
          >
            In this project i used APi to fetch data of product and use REDUX to
            maintail the data library of ADD to CART funtionality TO calculate
            Total price
          </p>
        </li>
      </ul>
    </>
  );
}
