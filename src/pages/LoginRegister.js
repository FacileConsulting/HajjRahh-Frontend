import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { decodeJwt } from 'jose';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import TripContainer from '../components/TripContainer';

const LoginRegister = (props) => {
  
  const { id } = props;
  const location = useLocation();
  const { state } = location;
  console.log('dsf state ', state)

  const [tripsData, setTripsData] = useState({ upcomingTrips: [], onGoingTrips: [], pastTrips: [] });
  // State to store loading status
  const [loading, setLoading] = useState(true);
  const [activeSignInTab, setActiveSignInTab] = useState('show active');
  const [activeSignUpTab, setActiveSignUpTab] = useState('');
  // State to store error (if any)
  const [error, setError] = useState(null);

  const fetchTripsData = async () => {
    try {
      let response = await handleAPIData('POST', '/api/trips', { id: "66cc1ef2a7cb9004d0e8c177" });
      console.log('tripsresponse', response);
      if (response.status === 'success' && response.data.message && response.data.data.length === 0) {
        toast.error(response.data.message, toastOptions);
        setTripsData({ upcomingTrips: [], onGoingTrips: [], pastTrips: [] });
      } else if (response.status === 'success' && response.data.data.length > 0) {
        let responseData = response.data.data;
        const upcomingTripsArray = responseData.filter((trip) => trip.status === 'upcoming');
        const onGoingTripsArray = responseData.filter((trip) => trip.status === 'live');
        const pastTripsArray = responseData.filter((trip) => trip.status === 'completed');
        setTripsData({
          upcomingTrips: upcomingTripsArray,
          onGoingTrips: onGoingTripsArray,
          pastTrips: pastTripsArray
        });
      } else if (response.status === 'error') {
        setTripsData({ upcomingTrips: [], onGoingTrips: [], pastTrips: [] });
        toast.error(response.message, toastOptions);
      } else {
        setTripsData({ upcomingTrips: [], onGoingTrips: [], pastTrips: [] });
        toast.error('Something went wrong. Please try again.', toastOptions);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component mounts
  // useEffect(() => {
  //   console.log('state state ', state)
  //   // if (state.data === 'login') {
  //   //   setActiveSignInTab('show active');
  //   //   setActiveSignUpTab('');
  //   // } else if (state.data === 'register') {
  //   //   setActiveSignInTab('');
  //   //   setActiveSignUpTab('show active');
  //   // }
  // }, []); // Empty dependency array means this runs once on mount

  const handleSignInTabClick = () => {
    googleLogout();
  }

  const handleSignUpTabClick = () => {

  }

  return (
    <>
      <div className="container-xxl section-block-inner">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 text-center">
            <h1 className="mb-2">Welcome to Hajjrah</h1>
            <p className="hero-text">Please Sign In / Sign Up using your Email/Mobile to continue</p>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 section-block">
        <div className="row">
          <div className="col-4 offset-4">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${state === 'login' ? 'active' : ''}`} id="header-login-btn" data-bs-toggle="tab" data-bs-target="#login-pane" type="button"
                  role="tab" onClick={handleSignInTabClick}>Sign In</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${state === 'register' ? 'active' : ''}`} id="header-register-btn" data-bs-toggle="tab" data-bs-target="#register-pane" type="button"
                  role="tab" onClick={handleSignUpTabClick}>Sign Up</button>
              </li>
            </ul>
            <div className="row tab-margin">
              <div className="col">
                <div className="tab-content" id="login-register-content">
                  <div className={`tab-pane fade ${state === 'login' ? 'show active' : ''}`} id="login-pane" role="tabpanel" aria-labelledby="tab-1"
                    tabIndex="0">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                          placeholder="Enter emai/mobile" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="password" className="form-control" id="exampleFormControlInput1"
                          placeholder="Enter password" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <a href="#!" className="forgot-link">Forgot password?</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        {/* <GoogleLogin
                          onSuccess={credentialResponse => {
                            console.log('credentialResponse', credentialResponse);
                            const cred = decodeJwt(credentialResponse.credential);
                            console.log('Login Success: currentUser: data', cred);
                          }}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                        /> */}
                        <button type="button" className="btn btn-primary float-end">Sign In</button>
                        <button type="button" className="btn btn-secondary float-end mx-4" onClick={handleSignInTabClick}>Cancel</button>

                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane fade ${state === 'register' ? 'show active' : ''}`} id="register-pane" role="tabpanel" aria-labelledby="tab-2" tabIndex="0">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter name*" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter email*" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone*" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="password" className="form-control" id="exampleFormControlInput1"
                          placeholder="Enter password*" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input type="password" className="form-control" id="exampleFormControlInput1"
                          placeholder="Reenter password*" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button type="button" className="btn btn-primary float-end">Sign up</button>
                        <button type="button" className="btn btn-secondary float-end mx-4">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default LoginRegister;
