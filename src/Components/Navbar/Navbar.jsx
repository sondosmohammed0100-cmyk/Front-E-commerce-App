import React, { useContext } from 'react'
import Style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { useEffect, useState } from "react";
import axios from "axios";


export default function Navbar() {
 let navigate=useNavigate()
  let { userLogin ,setuserLogin} = useContext(UserContext)
  function signout(){
    localStorage.removeItem("Usertoken")
    setuserLogin(null)
    navigate('/login')

  }
    const [Categories, setCategory] = useState([])

  function getCategories() {
    const token = localStorage.getItem("Usertoken");

    axios.get('http://localhost:3000/api/categories', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setCategory(res.data.category)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <div className="bg-black text-white p-3 position-relative">
        <div className="container d-flex align-items-center">

          {/* Black Friday */}
          <div className="d-flex align-items-center gap-2 ">
            <span className={`bg-warning px-3 py-1 fw-bold ${Style.rotate}`}>
              Black
            </span>
            <span className="fw-bold fs-5">Friday</span>
          </div>

          {/* Up to 59% */}
          <div className="mx-auto d-none d-lg-block">
            <span >Up to </span>
            <span className="text-warning fw-bold fs-4">59%</span>
            <span> OFF</span>
          </div>

          {/* Button */}
          {userLogin != null ? <button className="btn btn-warning me-3 ms-auto ">
            Shop Now
          </button> : null}


          {/* Close Button */}
          <button className="btn btn-dark text-white position-absolute top-0 end-0 mt-3 me-2"> X </button>

        </div>

      </div>
      {/* Top Navigation */}
      <div className={` ${Style.TopNav} `}>
        <div className="container text-white py-2">
          <div className="row">
            <div className="col-6 align-items-center">
              <p className="mb-0 pt-1" >Welcome to Clicon online eCommerce store</p>
            </div>
            <div className=" input-group col d-flex flex-wrap align-items-center justify-content-start gap-3  ">
              <p className="mb-0 d-none d-lg-block" >Follow us:</p>
              <i className="fa-brands fa-twitter "></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fa-brands fa-reddit"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
              <div className="border-end border-white p-3 d-none d-lg-block"></div>

              {/* ENG dropdown */}

              <div className="btn-group">
                <button
                  type="button"
                  className="btn dropdown-toggle text-white"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Eng
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">English</Link></li>
                  <li><Link className="dropdown-item" to="#">Mandarin</Link></li>
                  <li><Link className="dropdown-item" to="#">Russian</Link></li>
                </ul>
              </div>
              {/* USD dropdown */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn dropdown-toggle text-white"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  USD
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Dollar(USD)</Link></li>
                  <li><Link className="dropdown-item" to="#">Euro(EUR)</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
      <hr className="p-0 m-0 text-secondary" />
      {/* Middle Navigation */}
      <div className={` ${Style.TopNav} `}>
        <div className="container text-white">
          <div className="row align-items-center">

            <div className="col-3 d-flex align-items-center fs-3">
              <i className="fa-regular fa-circle-dot"></i>
              <h3 className="ms-2 m-3">CLICON</h3>
            </div>
            {userLogin != null ? <div className="col-6 d-none d-lg-block">
              <form className="input-group w-100">
                <input
                  className="form-control py-2 px-3"
                  type="search"
                  placeholder="Search for anything..."
                />
                <button className="btn btn-outline-light px-4">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div> : null}

            <div className="col-3 d-flex ms-auto align-items-center  justify-content-end  fs-3 gap-3">
              <Link className='text-white' to="Cart"><i className="fa-solid fa-cart-arrow-down"></i></Link>
              <Link className='text-white' to="needhelp"><i className="fa-regular fa-heart"></i></Link>
              {userLogin!=null?<span onClick={signout} className={`text-white ${Style.pointer}`} ><i className="fa-solid fa-right-from-bracket cursor-pointer"></i></span> : <Link className='text-white' to="Register"><i className="fa-regular fa-user"></i></Link>}
              

            </div>

          </div>
        </div>

      </div>
      {userLogin != null ? <>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">

            {/* Category Dropdown */}
            {/* <div className="btn-group">
              <button
                type="button"
                className={`btn dropdown-toggle ${Style.btnCatg}`}
                data-bs-toggle="dropdown">
                All Category
              </button>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="">Computer & Laptop</Link></li>
                <li><Link className="dropdown-item" to="">Computer & Accessories</Link></li>
                <li><Link className="dropdown-item" to="">Smart Phone</Link></li>
                <li><Link className="dropdown-item" to="">HeadPhone</Link></li>
              </ul>
            </div> */}
            <div className="btn-group">
      <button
        type="button"
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        All Category
      </button>

      <ul className="dropdown-menu">
        {Categories.map((cat) => (
          <li key={cat._id}>
            <Link className="dropdown-item" to={`/category/${cat._id}`}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>


            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navLinks">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links */}
            <div className="collapse navbar-collapse" id="navLinks">
              {/* I want to add a search bar here in the mobile view */}
              <div className="col-6  d-lg-none">
                <form className="input-group w-100">
                  <input
                    className="form-control py-2 px-3"
                    type="search"
                    placeholder="Search for anything..."
                  />
                  <button className="btn btn-outline-light px-4 bg-primary">
                    <i className="fa-solid fa-magnifying-glass "></i>
                  </button>
                </form>
              </div>



              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='home'>
                    <i className="fa-solid fa-house me-1"></i>
                    Home
                  </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to='categories'>
                    <i className="fa-solid fa-list me-1"></i>
                    Categories
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to='products'>
                    <i className="fa-solid fa-box-open me-1"></i>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='cart'>
                    <i className="fa-solid fa-shopping-cart me-1"></i>
                    Cart
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to='needhelp'>
                    <i className="fa-solid fa-circle-info me-1"></i>
                    Need Help
                  </Link>
                </li>
              </ul>


              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to=''>
                    <i className="fa-solid fa-phone-volume me-1"></i>
                    01122783547
                  </Link>
                </li>
              </ul>

            </div>
          </div>

        </nav>


      </> : null}


    </>
  )
}
