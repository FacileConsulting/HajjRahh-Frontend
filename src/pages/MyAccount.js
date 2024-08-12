import React, { useState } from 'react';

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
              <div className="col-12 mb-4">
                <img src="./assets/images/profile.webp" className="img-profile" alt="..." />
              </div>
              <div className="col-12 mb-4">
                <h4>Name</h4>
                <p>User name here</p>
              </div>
              <div className="col-12 mb-4">
                <h4>Email</h4>
                <p>name@domain.com</p>
              </div>
              <div className="col-12 mb-4">
                <h4>Phone</h4>
                <p>+91 9999 99999</p>
              </div>
              <div className="col-12 mb-4">
                <h4>Address</h4>
                <p>Address goes here</p>
              </div>
            </div>
          </div>
          <div className="col-9">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="tab-1" data-bs-toggle="tab" data-bs-target="#tab-1-pane" type="button" role="tab" aria-controls="tab-1-pane" aria-selected="true">Edit profile</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-2" data-bs-toggle="tab" data-bs-target="#tab-2-pane" type="button" role="tab" aria-controls="tab-2-pane" aria-selected="false">Change password</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-3" data-bs-toggle="tab" data-bs-target="#tab-3-pane" type="button" role="tab" aria-controls="tab-3-pane" aria-selected="false">Notification settings</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="tab-4" data-bs-toggle="tab" data-bs-target="#tab-4-pane" type="button" role="tab" aria-controls="tab-4-pane" aria-selected="false">Payment method</button>
              </li>
            </ul>
            <div className="row tab-margin">
              <div className="col">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="tab-1-pane" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
                    <div className="row">
                      <div className="col-4 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Update name" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Update email" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Update phone" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Update address" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                          <button type="button" className="btn btn-primary float-end">Save changes</button>
                          <button type="button" className="btn btn-secondary float-end mx-4">Cancel</button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-2-pane" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
                    <div className="row">
                      <div className="row">
                        <div className="col-4 mb-3">
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter old password" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 mb-3">
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter new password" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 mb-3">
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Reconfirm new password" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary float-end">Change password</button>
                            <button type="button" className="btn btn-secondary float-end mx-4">Reset</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-3-pane" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
                    <div className="row">
                      <div className="col-4 mb-3">
                      <p className="mb-1">Notification email</p>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" value="" id="flexRadioDefault1" checked />
                          <label className="form-check-label mt-1" for="flexRadioDefault1">
                            Enable
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" value="" id="flexRadioDefault2" />
                          <label className="form-check-label mt-1" for="flexRadioDefault2">
                            Disable
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
                  <div className="tab-pane fade" id="tab-4-pane" role="tabpanel" aria-labelledby="tab-4" tabindex="0">
                    <div className="row">
                      <div className="col-4 mb-3">
                        <p className="mb-1">Select mode of payments</p>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label mt-1" for="flexCheckDefault">
                            Credit card
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label mt-1" for="flexCheckDefault">
                            Debit card
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label mt-1" for="flexCheckDefault">
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
