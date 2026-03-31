import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import api from '../../api/axios';



export default function ProductDetails() {

  let {id}=useParams();
const [product,setProduct]=useState(null)
  // console.log(id)
  function getProduct(id){
    api.get(`products/${id}`)
    .then((res)=>{
      //console.log(res)
      setProduct(res.data.Product)
      console.log(product)
    }).catch((res)=>{
      console.log(res)
    })

  }
useEffect(()=>{

  getProduct(id)
},[])
  return (
    <div className="container">
      <div className="row">
        <div className='col-3'>
            <img src={product?.image?.[0] ? `http://localhost:3000${product.image[0]}` : ""} className='w-100'/>

        </div>
       <div className='col-9'>
              {product && (
                <>
                  <h2>{product.name}</h2>

                  <p className="text-muted">
                    {product.description}
                  </p>

                  <h4 className="text-primary">
                    ${product.price}
                  </h4>

                  <p>
                    Category: <span className="fw-bold">
                      {product.categoryId.name}
                    </span>
                  </p>
                </>
              )}
</div>
      </div>
    </div>

    
  )
}
