import { useState } from 'react'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import NotFound from './Components/NotFound/NotFound'
import Categories from './Components/Categories/Categories'
import Needhelp from './Components/Needhelp/Needhelp'

import './App.css'
RouterProvider
let x=createBrowserRouter([
   {path:"",element:<Layout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"home",element:<Home/>},
      {path:"products",element:<Products/>},
      {path:"categories",element:<Categories/>},
      {path:"Login",element:<Login/>},
      {path:"Register",element:<Register/>},
      {path:"Cart",element:<Cart/>},
      {path:"needhelp",element:<Needhelp/>},
      {path:"*",element:<NotFound/>}
      

    ]
   }])
function App() {

  return <RouterProvider router={x}>  </RouterProvider>
}

export default App
