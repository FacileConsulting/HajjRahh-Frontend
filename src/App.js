import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { DateRangePicker } from 'rsuite';
import { handleAPIData } from './hooks/useCustomApi';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Trips from './pages/Trips';
import Select from './components/Select';
import Counter from './components/Counter';
import {toastOptions} from './toastify';
import './App.css';
import 'rsuite/DateRangePicker/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

const baseurl = "http://localhost:8888";

const App = ({ message }) => {
  


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Hajjrah</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item text-center">
                <span className="nav-menu-icon img-flight"></span> <br/>
                <a className="nav-link" aria-current="page">Flights</a>
              </li>
              <li className="nav-item text-center">
                <span className="nav-menu-icon img-hotel"></span> <br/>
                <a className="nav-link" aria-current="page">Hotels</a>
              </li>
              <li className="nav-item text-center">
                <span className="nav-menu-icon img-holidays"></span> <br/>
                <a className="nav-link" aria-current="page">Holidays</a>
              </li>
              <li className="nav-item text-center">
                <span className="nav-menu-icon img-cabs"></span> <br/>
                <a className="nav-link" aria-current="page">Cabs</a>
              </li>
              <li className="nav-item text-center">
                <span className="nav-menu-icon img-invest"></span> <br/>
                <a className="nav-link" aria-current="page">Invest</a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex nav-secondary">
                <li className="nav-item">
                  <a className="nav-link">My Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Trips</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Support</a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
      
      {/* <Home /> */}
      <MyAccount />
      <div className="section-bg">
        <div className="container-xxl py-5 section-block">
          <div className="row align-items-center">
            <div className="col">
              <div className="logo mb-2">HajjRahh</div>
              <p className="text-dark">© 2024 HajjRahh. All rights reserved.</p>
            </div>
            <div className="col">
              <ul className="list-inline float-end">
                <li className="list-inline-item"><a>Terms of Use</a></li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item"><a>Privacy and Cookies</a></li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item"><a>Cookie consent</a></li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item"><a>Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
};

export default App;
