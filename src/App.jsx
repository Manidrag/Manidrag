import { useState } from 'react'


import React from 'react'
import './App.css'
import { Navbar } from './The Components/NAvnar'

function App() {
  const [count, setCount] = useState(0)
  
  return (<Navbar/>
  )
}

export default App
