import React from "react";
import {
  NavLink,
  UNSAFE_useRouteId,
  useOutletContext,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import "./Transition.css";
export function Projects() {
  const data = useParams();
  //hh
  console.log(data);
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

      <ul className="m-20 text-white text-xl font-theHck ">
        <li
          id="trans"
          className=" font-bold rounded-xl items-center md:flex hover:text-1xl h-auto md:h-44 bg-blue-300 shadow-xl hover:shadow-2xl hover:shadow-black shadow-black m-10 p-2"
        >
          <NavLink className="font-extrabold flex-none underline text-2xl text-black">
            To-Do List
          </NavLink>
          <p className="text-red-500">
            It a simple web app in which you add the items when its done mark it
            as done!{" "}
          </p>{" "}
          <br></br>
          <p className="flex-col h-auto">Skills: HTML,Tailwind,REACT.js</p>
        </li>
        <li
          id="trans"
          className="  font-bold rounded-xl items-center  md:flex hover:text-1xl h-auto md:h-44 bg-blue-300 shadow-lg hover:shadow-2xl hover:shadow-black shadow-black m-10 p-2 "
        >
          <NavLink className="font-extrabold flex-none underline text-2xl text-black">
            Food-Recipe{" "}
          </NavLink>
          <br></br>{" "}
          <p className="text-red-500">
            In This projext we made a website which use Api to fetch recipe
            details based on the user search
          </p>
          <br></br>
          <p>Skill used:REACT,Tailwind or CSS,HTML</p>
        </li>
        <li
          id="trans"
          className=" font-bold rounded-xl items-center md:flex hover:text-1xl md:h-44 h-auto  bg-blue-300 shadow-lg hover:shadow-2xl hover:shadow-black shadow-black m-10 p-2 "
        >
          <NavLink className="font-extrabold flex-none underline text-2xl text-black">
            Shopping Cart
          </NavLink>
          <p className="text-red-500">
            In this project i used APi to fetch data of product and use REDUX to
            maintail the data library of ADD to CART funtionality TO calculate
            Total price
          </p>
          <br></br>
          <p>Skill Used:REDUX,REACT</p>
        </li>
      </ul>
    </>
  );
}
