import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
//This is for validation on form
import * as Yup from 'yup'
//This is for API Call
import axios from 'axios'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

export default function Register() {
  let navigate = useNavigate()
  const [Apierror, setApiError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  async function handelResgister(values) {
    setIsLoading(true)
    try{
      let {data}=await axios.post("http://localhost:3000/api/auth/register", values)
      console.log(data);
      // setIsLoading(false)
      if(data.msg==="success"){
        navigate("/login")
        
      }
    }
    catch(error){
      console.log(error.response.data);
      setApiError(error.response.data.msg)
      // alert(error.response.data.msg)
      // setIsLoading(false)
    }
    finally {
    setIsLoading(false) 
  }
  }
  let validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(15, "Name must be less than 15 characters"),
    email: Yup.string().required("Email is required").email("Invalid email format"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('password'), null], "Passwords must match"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions")  
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    },
    validationSchema,
    onSubmit: handelResgister
  })

  return <>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-3 shadow">
        
        <div className="card-body">
          <h3 className="text-center mb-3">Create Your Account</h3>
          <form onSubmit={formik.handleSubmit}>
              {Apierror ? <div className='alert alert-danger'>{Apierror}</div> : null}  
            <div className="mb-3 text-start">
              <label className="form-label">Name</label>
              <input type="text"
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control" />
            </div>
            {formik.errors.name && formik.touched.name ? 
            <div className='alert alert-danger'>{formik.errors.name}</div> : 
            null}
            <div className="mb-3 text-start">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control" />
            </div>
             {formik.errors.email && formik.touched.email ? 
            <div className='alert alert-danger'>{formik.errors.email}</div> : 
            null}

            <div className="mb-3 text-start">
              <label className="form-label">Password</label>
              <input
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password" className="form-control" placeholder="8+ characters" />
            </div>
             {formik.errors.password && formik.touched.password ? 
            <div className='alert alert-danger'>{formik.errors.password}</div> : 
            null}

            <div className="mb-3 text-start">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control" />
            </div>
             {formik.errors.confirmPassword && formik.touched.confirmPassword ? 
            <div className='alert alert-danger'>{formik.errors.confirmPassword}</div> : 
            null}

            <div className="form-check mb-3 text-start">
              <input
                type="checkbox"
                name='terms'
                checked={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-check-input" />
              <label className="form-check-label">
                Are you agree to Clicon Terms of Condition and Privacy Policy.
              </label>
            </div>
              {formik.errors.terms && formik.touched.terms ? 
            <div className='alert alert-danger'>{formik.errors.terms}</div> : 
            null}
            <button type='submit' className={`btn text-white w-100 ${style.orangebtn}`}>
              {isLoading ? <i className='fas fa-spinner fa-spin'></i> : "SIGN UP"}
            </button>
            <div className="text-center my-3">


              <div className="d-flex align-items-center mb-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-dark">or</span>
                <hr className="flex-grow-1" />
              </div>


              <button className="btn btn-white w-100 mb-2 d-flex align-items-center justify-content-center border">
                <i className="fa-brands fa-google fs-4 text-danger"></i>
                Sign up with Google
              </button>

              <button className="btn btn-white w-100 d-flex align-items-center justify-content-center border">
                <i className="fa-brands fa-apple fs-3 text-danger"></i>
                Sign up with Apple
              </button>
              <div className="text-center mt-3">
                <span className="text-muted">Already have an account?</span>
                <Link to="/login" className="text-decoration-none ms-2">Sign In</Link>
              </div>

            </div>

          </form>

        </div>
      </div>
    </div>

  </>


}
