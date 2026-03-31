import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import api from '../../api/axios';
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

export default function Products() {
    const [products, setProducts] = useState([])

  function getProducts() {
    const token = localStorage.getItem("Usertoken");
// use the api instead of axios ('http://localhost:3000/api/products')
    api.get('products', {
      headers: {
        Authorization: `Bearer ${token}`
      }

    }).then((res) => {
      console.log(res.data.Products)
        setProducts(res.data.Products)

      }).catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className="container ">
      <div className="row"> 
        <h3 className='py-3 mx-auto'>Products</h3>
         <div className="col-lg-9 mx-auto">
          <div className="row">

            {products.length>0?  products.map((product) => (
              <div key={product._id} className="col-6 col-md-4 col-lg-3 mb-3">

                <Link to={`/productdetails/${product._id}`}>
                <div className="card h-100 text-center p-2">

                  <img
                    src={`http://localhost:3000${product.image[0]}`}
                    className="card-img-top"
                    style={{ height: "100px", objectFit: "contain" }}
                    alt={product.name}
                  />

                  <div className="card-body p-2">
                    <h6 className="small">
                      {product.name}
                    </h6>

                    <p className="text-primary fw-bold mb-1">
                      ${product.price}
                    </p>
                  </div>

                </div>

                </Link>
              </div>
              
            )):<div className="lds-hourglass mx-auto"></div>}

          </div>
        </div>


    </div>
    </div>
  )
}
