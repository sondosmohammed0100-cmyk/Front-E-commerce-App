
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image1 from '../../assets/img1.png'
export default function BestDeals() {
  const [products, setProducts] = useState([])

  function getProducts() {
    const token = localStorage.getItem("Usertoken");

    axios.get('http://localhost:3000/api/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setProducts(res.data.Products)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    
    <div className="container">
      <div className="row">

        <h3 className='py-3'>Beast Deals</h3>
        
        <div className="col-lg-3 mb-3">
          <div className="card h-100 p-3">

            <img
              src={image1}
              className="w-100"
              style={{ height: "200px", objectFit: "contain" }}
              alt="featured"
            />

            <div className="mt-2 fs-5">
              <h6>Xbox Series S 512GB SSD Console</h6>

              <p className="text-muted small">
                Games built using the Xbox Series X|S development kit showcase unparalleled load times.
              </p>

              <div className="text-warning my-4">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
              <button className="btn btn-warning w-100">
                ADD TO CART
              </button>
            </div>

          </div>
        </div>

        
        <div className="col-lg-9">
          <div className="row">

            {products.map((product) => (
              <div key={product._id} className="col-6 col-md-4 col-lg-3 mb-3">

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

              </div>
            ))}

          </div>
        </div>

      </div>
      
        
      
    </div>
   
  )
}
