
import style from './Login.module.css'
import { Link } from 'react-router-dom'
import React, {  use, useContext, useState } from 'react'
import { useFormik } from 'formik'
//This is for validation on form
import * as Yup from 'yup'
//This is for API Call
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'



export default function Login() {
  
  let {userLogin, setuserLogin} = useContext(UserContext)

  let navigate = useNavigate()
  const [Apierror, setApiError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  async function handellogin(values) {
    setIsLoading(true)
    try {
      let { data } = await axios.post("http://localhost:3000/api/auth/login", values)
      console.log(data);
      // setIsLoading(false)
      if (data.msg === "success") {
        localStorage.setItem("Usertoken", data.Token)
        setuserLogin(data.Token)
        navigate("/")

      }
    }
    catch (error) {
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

    email: Yup.string().required("Email is required").email("Invalid email format"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters")

  });

  let formik = useFormik({
    initialValues: {

      email: "",
      password: ""

    },
    validationSchema,
    onSubmit: handellogin
  })
  return <>

    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-3 w-75 shadow">
        <div className="card-body">
          <h2 className="text-center mb-3">SIGN IN</h2>
          <form onSubmit={formik.handleSubmit}>
            {Apierror ? <div className='alert alert-danger'>{Apierror}</div> : null}

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
            <button type='submit' className={`btn text-white w-100 ${style.orangebtn}`}>
              {isLoading ? <i className='fas fa-spinner fa-spin'></i> : "SIGN IN"}
            </button>
            <div className="d-flex align-items-center mb-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-dark">or</span>
                <hr className="flex-grow-1" />
              </div>


              <button className="btn btn-white w-100 mb-2 d-flex align-items-center justify-content-center border">
                <i className="fa-brands fa-google fs-4 text-danger"></i>
                Sign in with Google
              </button>

              <button className="btn btn-white w-100 d-flex align-items-center justify-content-center border">
                <i className="fa-brands fa-apple fs-3 text-danger"></i>
                Sign in with Apple
              </button>
            <div className="text-center mt-3">
              <span className="text-muted">Can't have account?</span>
              <Link to="/register" className="text-decoration-none ms-2">Sign UP</Link>
            </div>

          </form>

        </div>
      </div>
    </div>


  </>
}
