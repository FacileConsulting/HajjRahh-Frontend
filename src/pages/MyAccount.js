import React, { useState } from 'react';
import EditProfile from '../components/EditProfile';
import DisplayProfile from '../components/DisplayProfile';
import ChangePassword from '../components/ChangePassword';
import NotificationSettings from '../components/NotificationSettings';

const MyAccount = ({id, options}) => {

  return (
    <>
      <div className="container-xxl section-block-inner">
        <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 text-center">
                <h1 className="mb-2">My account</h1>
                <p className="hero-text">View/manage your account details</p>
            </div>
        </div>
    </div>
    <div className="container-xxl py-5 section-block">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <DisplayProfile />
            </div>
          </div>
          <div className="col-9">
            <ul className="nav nav-tabs justify-content-center" id="my-account-details" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="edit-profile" data-bs-toggle="tab" data-bs-target="#my-account-edit-profile" type="button" role="tab" aria-selected="true">Edit profile</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="change-password" data-bs-toggle="tab" data-bs-target="#my-account-change-password" type="button" role="tab" aria-selected="false">Change password</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="notification-settings" data-bs-toggle="tab" data-bs-target="#my-account-notification-settings" type="button" role="tab" aria-selected="false">Notification settings</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="payment-methods" data-bs-toggle="tab" data-bs-target="#my-account-payment-methods" type="button" role="tab" aria-selected="false">Payment method</button>
              </li>
            </ul>
            <div className="row tab-margin">
              <div className="col">
                <div className="tab-content" id="my-account-content">
                  <EditProfile id={"my-account-edit-profile"} />
                  <ChangePassword id={"my-account-change-password"} />
                  <NotificationSettings id={"my-account-notification-settings"} />
                  <div className="tab-pane fade" id="my-account-payment-methods" role="tabpanel" tabIndex="0">
                    <div className="row">
                      <div className="col-4 mb-3">
                        <p className="mb-1">Select mode of payments</p>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label mt-1" htmlFor="flexCheckDefault">
                            Credit card
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label mt-1" htmlFor="flexCheckDefault">
                            Debit card
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label mt-1" htmlFor="flexCheckDefault">
                            UPI
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                          <button type="button" className="btn btn-primary float-end">Save</button>
                          <button type="button" className="btn btn-secondary float-end mx-4">Reset</button>
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

export default MyAccount;
