import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { About } from './The Components/About.jsx'
import { Skillandprojects } from './The Components/SkillAndProjecthere.jsx'
import { Home } from './The Components/Home.jsx'
import { Navbar } from './The Components/NAvnar.jsx'
import { Projects } from './The Components/Projects.jsx'
//hey
const route=createHashRouter([{
  path:'/',
  element:<Navbar/>,
  children:[{
    path:'/',
    element:<Home/>
  },{
    path:'/about',
    element:<About/>
  },{
    path:'/iprojects/:id',
    element:<Projects/>
  },{
    path:'/Skillandprojects',
    element:<Skillandprojects/>
  }]
}

])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>,
)
