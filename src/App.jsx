import { useState } from 'react'
import './App.css'
import Viewproduct from './assets/components/Viewproduct'
import Addproduct from './assets/components/Addproduct'
import Navproduct from './assets/components/Navproduct'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navproduct />
     <Routes>
      <Route path='/'element={<Viewproduct/>}> </Route>
      <Route path='/add'element={<Addproduct/>}></Route>
      </Routes>
    </>
  )
}

export default App
