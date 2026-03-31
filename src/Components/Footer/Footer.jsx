import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>

    <footer className="bg-black text-white pt-5 ">

      <div className="container">
        <div className="row">

          {/* Logo + Info */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">

            <div className="d-flex align-items-center mb-3">
              <i className="fa-regular fa-circle-dot"></i>
              <h3 className="ms-2 m-0">CLICON</h3>
            </div>

            <div className="text-secondary small">
              <p className="mb-1">Customer Supports:</p>
              <p className="mb-1">+01122783547</p>
              <p className="mb-1">4517 Washington Ave.</p>
              <p className="mb-1">Manchester, Kentucky 39495</p>
              <p className="mb-1">info@kinbo.com</p>
            </div>

          </div>

          {/* Top Category */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase mb-3 fw-bold">Top Category</h5>

            <ul className="list-unstyled">
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">Computer & Laptop</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">SmartPhone</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">Headphone</Link></li>

              <span className="text-warning d-block mb-2">
                Accessories & Others
              </span>

              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">Camera & Photo</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">TV & Homes</Link></li>
            </ul>
          </div>

         
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase mb-3 fw-bold">Quick Links</h5>

            <ul className="list-unstyled">
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">Shop Product</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">Wishlist</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">Track Order</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">Customer Help</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none d-block mb-2">About Us</Link></li>
            </ul>
          </div>

          
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase mb-3 fw-bold">Download App</h5>

          
            <div className="d-flex align-items-center justify-content-between bg-secondary p-2 rounded my-2">
              <div>
                <p className="mb-0 small">Get it now</p>
                <span className="fw-bold">Google Play</span>
              </div>
              <i className="fa-brands fa-google-play fs-4"></i>
            </div>

            
            <div className="d-flex align-items-center justify-content-between bg-secondary p-2 rounded my-2">
              <div>
                <p className="mb-0 small">Get it now</p>
                <span className="fw-bold">App Store</span>
              </div>
              <i className="fa-brands fa-apple fs-4"></i>
            </div>

          </div>

        </div>
      </div>

      
      <div className="text-center p-3 border-top border-secondary mt-3">
        Kinbo - eCommerce Template © 2021. Design by Templatecookie
        
      </div>

    </footer>
  </>
}
