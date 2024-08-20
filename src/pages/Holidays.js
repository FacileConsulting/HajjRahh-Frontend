import React, { useState } from 'react';

const Holidays = ({ id, options }) => {

  return (
    <>
      <div className="section-listing">
        <div className="container-xxl">
          <div className="row">
            <div className="col offset-1">
              <select className="form-select form-select-lg" aria-label="Large select example">
                <option selected>Destination</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <select className="form-select form-select-lg" aria-label="Large select example">
                <option selected>Depature City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <div className="input-group">
                <input type="text" className="form-control form-addon" placeholder="Travelling dates" aria-label="Travelling dates" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2"><i className="bi bi-calendar-event"></i></span>
              </div>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary">Modify search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-listing-filter">
         {/* <div className="container-xxl">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-row listing-filters justify-content-center">
                <a href="#!" className="me-3"><i className="bi bi-funnel-fill"></i></a>
                <a href="#!" className="filter-type">Trip duration <i className="bi bi-chevron-down"></i></a>
                <a href="#!" className="filter-type">Hotel star <i className="bi bi-chevron-down"></i></a>
                <a href="#!" className="filter-type">Transportation <i className="bi bi-chevron-down"></i></a>
                <a href="#!" className="filter-type">Theme <i className="bi bi-chevron-down"></i></a>
                <a href="#!" className="filter-type">Price <i className="bi bi-chevron-down"></i></a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-xxl">
          <div className="row">
            <div className="col">
              <ul className="d-flex flex-row listing-filters justify-content-center list-unstyled">
                <li className="filter-type-first text-end">
                  <a href="#!"><i className="bi bi-funnel-fill"></i></a>
                </li>
                <li className="filter-type">
                  <a href="#!">Trip duration <i className="bi bi-chevron-down"></i></a>
                  <div className="filter-list">
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Up to 3 nights
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            4 - 6 Nights
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            7 - 10 Nights
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            11 - 15 Nights
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Above 16 Nights
                          </label>
                      </div>
                    </a>

                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!">Hotel star <i className="bi bi-chevron-down"></i></a>
                  <div className="filter-list">
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            5 star
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            4 star
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Upto 3 star
                          </label>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!">Transportation <i className="bi bi-chevron-down"></i></a>
                  <div className="filter-list">
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Bus
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Landonly
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Flight
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Cruise
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Optional
                          </label>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!">Theme <i className="bi bi-chevron-down"></i></a>
                  <div className="filter-list">
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Adventure
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Affordable
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Art & Culture
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Beach
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Best seller
                          </label>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!">Price <i className="bi bi-chevron-down"></i></a>
                  <div className="filter-list">
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            Up To $1,000
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            $1,000 to $2,000
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            $2,000 to $4,000
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            $4,000 to $8,000
                          </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            $8,000 and above
                          </label>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <div className="text-center mt-3 filter-btn">
                <button type="button" className="btn btn-secondary btn-sm">Cancel</button>
                <button type="button" className="btn btn-primary btn-sm">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 section-block">
        <div className="row mb-4 mt-4">
          <div className="col-auto me-auto">
            <h3>Upcoming Trips</h3>
          </div>
          <div className="col-auto">
            <div className="row g-1 align-items-center">
              <div className="col-auto">
                <span>Sort by:</span>
              </div>
              <div className="col-auto">
                <select className="form-select form-sort" aria-label="Large select example">
                  <option selected="">Select</option>
                  <option value="1">By date</option>
                  <option value="2">By price</option>
                  <option value="3">By cost</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4 trip-block">
          <div className="col-8">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Best Of Dubai With Free 1 Hour Limousine Ride</h3>
                <p>5 Nights/ 6 Days</p>
                <ul className="list-inline list-unstyled tour-features">
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      hotel
                    </span>
                    <p>Hotel</p>
                  </li>
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      directions_car
                    </span>
                    <p>Transfers</p>
                  </li>
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      restaurant
                    </span>
                    <p>Food Included</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 text-end">
            <h2 className="mb-0">$999</h2>
            <p className="mb-4">Per person onwards</p>
            <button type="button" className="btn btn-primary btn-sm">View details</button>
          </div>
        </div>
        <div className="row mb-4 trip-block">
          <div className="col-8">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Best Of Dubai With Free 1 Hour Limousine Ride</h3>
                <p>5 Nights/ 6 Days</p>
                <ul className="list-inline list-unstyled tour-features">
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      hotel
                    </span>
                    <p>Hotel</p>
                  </li>
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      directions_car
                    </span>
                    <p>Transfers</p>
                  </li>
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      restaurant
                    </span>
                    <p>Food Included</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 text-end">
            <h2 className="mb-0">$999</h2>
            <p className="mb-4">Per person onwards</p>
            <button type="button" className="btn btn-primary btn-sm">View details</button>
          </div>
        </div>
        <div className="row mb-4 trip-block">
          <div className="col-8">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src="./assets/images/book_online/img-1.png" className="img-style" alt="" />
              </div>
              <div className="ps-3">
                <h3>Best Of Dubai With Free 1 Hour Limousine Ride</h3>
                <p>5 Nights/ 6 Days</p>
                <ul className="list-inline list-unstyled tour-features">
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      hotel
                    </span>
                    <p>Hotel</p>
                  </li>
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      directions_car
                    </span>
                    <p>Transfers</p>
                  </li>
                  <li className="list-inline-item">
                    <span className="material-symbols-outlined">
                      restaurant
                    </span>
                    <p>Food Included</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 text-end">
            <h2 className="mb-0">$999</h2>
            <p className="mb-4">Per person onwards</p>
            <button type="button" className="btn btn-primary btn-sm">View details</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Holidays;
