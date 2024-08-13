import React, { useState } from 'react';

const MyAccount = ({ id, options }) => {

  return (
    <>
      <div className="container-xxl section-block-inner">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 text-center">
            <h1 className="mb-2">Trips</h1>
            <p className="hero-text">View all of your trips</p>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 section-block">
        <div className="row mb-2 mt-4">
          <div className="col-auto me-auto offset-1">
            <h3>Upcoming Trips</h3>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-5 offset-1">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Novotel Thakher</h3>
                <p>23-Mar-2024 to 26-Mar-2024</p>
                <span className="badge text-bg-warning mt-2">Upcoming</span>
              </div>
            </div>
          </div>
          <div className="col-5 text-end">
            <button type="button" className="btn btn-primary btn-sm">View details</button>
            <button type="button" className="btn btn-secondary btn-sm mx-2">End trip</button>
            <button type="button" className="btn btn-secondary btn-sm">Cancel trip</button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-5 offset-1">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Novotel Thakher</h3>
                <p>23-Mar-2024 to 26-Mar-2024</p>
                <span className="badge text-bg-warning mt-2">Upcoming</span>
              </div>
            </div>
          </div>
          <div className="col-5 text-end">
            <button type="button" className="btn btn-primary btn-sm">View details</button>
            <button type="button" className="btn btn-secondary btn-sm mx-2">End trip</button>
            <button type="button" className="btn btn-secondary btn-sm">Cancel trip</button>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-auto me-auto offset-1">
            <h3>Past Trips</h3>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-5 offset-1">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Novotel Thakher</h3>
                <p>23-Mar-2024 to 26-Mar-2024</p>
                <span className="badge text-bg-info mt-2">Completed</span>
              </div>
            </div>
          </div>
          <div className="col-5 text-end">
            <button type="button" className="btn btn-primary btn-sm">View details</button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-5 offset-1">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Novotel Thakher</h3>
                <p>23-Mar-2024 to 26-Mar-2024</p>
                <span className="badge text-bg-info mt-2">Completed</span>
              </div>
            </div>
          </div>
          <div className="col-5 text-end">
            <button type="button" className="btn btn-primary btn-sm">View details</button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-5 offset-1">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Novotel Thakher</h3>
                <p>23-Mar-2024 to 26-Mar-2024</p>
                <span className="badge text-bg-info mt-2">Completed</span>
              </div>
            </div>
          </div>
          <div className="col-5 text-end">
            <button type="button" className="btn btn-primary btn-sm">View details</button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-5 offset-1">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Novotel Thakher</h3>
                <p>23-Mar-2024 to 26-Mar-2024</p>
                <span className="badge text-bg-info mt-2">Completed</span>
              </div>
            </div>
          </div>
          <div className="col-5 text-end">
            <button type="button" className="btn btn-primary btn-sm">View details</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default MyAccount;
