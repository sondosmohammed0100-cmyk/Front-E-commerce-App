import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import NotFound from './Components/NotFound/NotFound'
import Categories from './Components/Categories/Categories'
import Needhelp from './Components/Needhelp/Needhelp'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'  
import UserContextProvider from './Context/UserContext'
import './App.css'

import ProductDetails from './Components/ProductDetails/ProductDetails'


let x = createBrowserRouter([
  {
    path: "", element: <Layout />,
    children: [
      { index: true, element:<ProtectedRoutes><Home /></ProtectedRoutes>  },
      { path: "home", element:<ProtectedRoutes> <Home /></ProtectedRoutes> },
      { path: "products", element:<ProtectedRoutes> <Products /></ProtectedRoutes> },
      { path: "categories", element:<ProtectedRoutes> <Categories /> </ProtectedRoutes>},
      {path:  "productdetails/:id",element:<ProtectedRoutes> <ProductDetails/> </ProtectedRoutes>},
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element:<ProtectedRoutes> <Cart /></ProtectedRoutes> },
      { path: "needhelp", element: <Needhelp /> },
      { path: "*", element: <NotFound /> }

    ]
  }])
function App() {

 return( 

        <UserContextProvider>

          <RouterProvider router={x}></RouterProvider>

        </UserContextProvider>

  )
}

export default App
