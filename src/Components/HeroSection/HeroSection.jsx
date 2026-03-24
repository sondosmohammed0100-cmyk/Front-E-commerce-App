import React from 'react'
import style from './HeroSection.module.css'
import playstation from '../../assets/playstation.png'
import mobile from '../../assets/mobile.png'
import airpods from '../../assets/airpods.png'
export default function HeroSection() {
  return (
    <div className="container my-4">
      <div className="row g-3">
        
        <div className="col-md-8">
          <div className="p-4 bg-light rounded h-100 d-flex align-items-center justify-content-between">
            
            <div>
              <small className="text-muted">THE BEST PLACE TO PLAY</small>
              <h2>Xbox Consoles</h2>
              <p>
                Save up to 50% on select Xbox games. Get 3 months of PC Game Pass.
              </p>
              <button className="btn btn-warning text-white">
                Shop Now →
              </button>
            </div>

            <img
              src={playstation}
              alt="xbox"
              style={{ width: "200px" }}
            />
          </div>
        </div>

        
        <div className="col-md-4 d-flex flex-column gap-3">
          
         
          <div className="p-3 bg-dark text-white rounded d-flex justify-content-between align-items-center">
            <div>
              <small>SUMMER SALES</small>
              <h6>Google Pixel 6 Pro</h6>
              <button className="btn btn-warning btn-sm mt-2">
                Shop Now
              </button>
            </div>
            <img
              src={mobile}
              alt="mobile"
              style={{ width: "80px" }}
            />
          </div>

          
          <div className="p-3 bg-light rounded d-flex justify-content-between align-items-center">
            <div>
              <h6>Xiaomi FlipBuds Pro</h6>
              <p className="text-primary">$299 USD</p>
              <button className="btn btn-warning btn-sm">
                Shop Now
              </button>
            </div>
            <img
              src={airpods}
              alt="airpods"
              style={{ width: "80px" }}
            />
          </div>

        </div>
      </div>

      {/* FEATURES */}
      <div className="row text-center mt-4 bg-light p-3 rounded">
        
        <div className="col-md-3">
          <i className="fas fa-truck fa-lg mb-2"></i>
          <h6>Fast Delivery</h6>
          <small>Delivery in 24/H</small>
        </div>

        <div className="col-md-3">
          <i className="fas fa-undo fa-lg mb-2"></i>
          <h6>24 Hours Return</h6>
          <small>100% Money-back guarantee</small>
        </div>

        <div className="col-md-3">
          <i className="fas fa-credit-card fa-lg mb-2"></i>
          <h6>SECURE PAYMENT </h6>
          <small>Your money is safe</small>
        </div>

        <div className="col-md-3">
          <i className="fas fa-headset fa-lg mb-2"></i>
          <h6>Support 24/7</h6>
          <small>Live contact/message</small>
        </div>

      </div>
    </div>
  )
}
