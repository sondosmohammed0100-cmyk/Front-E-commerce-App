import React, { use, useEffect, useState } from 'react'
import style from './Categories.module.css'
import api from '../../api/axios'
import imgCategory from '../../assets/mobile.png'
export default function Categories() {
const [categories, setCategories] = useState([])

function getCategories() {
  const token = localStorage.getItem("Usertoken");
  api.get('categories', {
    headers: {  
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {  
    console.log(res.data.category)
    setCategories(res.data.category);

  }).catch((err) => {
    console.log(err)
  })
}
useEffect(() => {
  getCategories()
}, []);
  return (
    <>
    <div className="container">
    <div className="col-lg-9 mx-auto">
          <div className="row">

            {categories.length>0?   categories.map((catergory) => (
              <div key={catergory._id} className="col-6 col-md-4 col-lg-3 mb-3">

                <div className="card h-100 text-center p-2">

                  <img
                    src={imgCategory}
                    className="card-img-top"
                    style={{ height: "100px", objectFit: "contain" }}
                    alt={catergory.name}
                  />

                  <div className="card-body p-2">
                    <h6 className="small">
                      {catergory.description}
                    </h6>

                    
                  </div>

                </div>

              </div>
            )):<div className="lds-hourglass mx-auto"></div>}

          </div>
        </div>
        </div>
    
    
    
    
    
    
    </>
  )
}
