import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import TripContainer from '../components/TripContainer';

const Flights = ({ id }) => {
  localStorage.setItem('current_route', '/flights');
  const history = useHistory();
  const { displayEmail } = useSelector(state => state.myAccount);
  const [tripsData, setTripsData] = useState({ upcomingTrips: [], onGoingTrips: [], pastTrips: [] });
  // State to store loading status
  const [loading, setLoading] = useState(true);
  // State to store error (if any)
  const [error, setError] = useState(null);

  
  const handleFlightCardClick = () => {
    history.push('/flightDetails');
  }

  return (
    <>
      <div className="section-listing">
        <div className="container-xxl">
          <div className="row">
            <ul className="list-inline flight-selection">
              <li className="list-inline-item">
                <a href="#!" className="trip-type active">Round trip</a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="trip-type">One way</a>
              </li>
              <li className="list-inline-item">
                <div className="dropdown">
                  <a className="class-guests dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Economy
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Economy</a></li>
                    <li><a className="dropdown-item" href="#">Business</a></li>
                    <li><a className="dropdown-item" href="#">First Class</a></li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="dropdown">
                  <a className="class-guests dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" id="dropdownMenuClickableInside" data-bs-auto-close="outside" aria-expanded="false">
                    Guests
                  </a>
                  <ul className="dropdown-menu dropmenu-guest" aria-labelledby="dropdownMenuClickableInside">
                    <li>
                      <div className="row">
                        <div className="col">
                          <h4 className="mb-0">Adult</h4> <p className="small-text">Ages 13 or above</p>
                        </div>
                        <div className="col">
                          <a className="dropdown-item" href="#">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                  <span className="bi bi-dash"></span>
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" value="1" min="1" max="10" />
                              <span className="input-group-btn">
                                <button type="button" className="btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="bi bi-plus"></span>
                                </button>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col">
                          <h4 className="mb-0">Children</h4> <p className="small-text">Ages 2-12</p>
                        </div>
                        <div className="col">
                          <a className="dropdown-item" href="#">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                  <span className="bi bi-dash"></span>
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" value="1" min="1" max="10" />
                              <span className="input-group-btn">
                                <button type="button" className="btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="bi bi-plus"></span>
                                </button>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col">
                          <h4 className="mb-0">Infants</h4> <p className="small-text">0-2</p>
                        </div>
                        <div className="col">
                          <a className="dropdown-item" href="#">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button type="button" className="btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                  <span className="bi bi-dash"></span>
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" value="1" min="1" max="10" />
                              <span className="input-group-btn">
                                <button type="button" className="btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="bi bi-plus"></span>
                                </button>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col">
              <select className="form-select form-select-lg" aria-label="Large select example">
                <option selected>Flying from</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <select className="form-select form-select-lg" aria-label="Large select example">
                <option selected>Flying to</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <div className="input-group">
                <input type="text" name="daterange" className="form-control form-addon calendar-selection" value="01/01/2018 - 01/15/2018" />
                <span className="input-group-text calendar-selection" id="basic-addon2"><i className="bi bi-calendar-event"></i></span>
              </div>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary">search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 section-block">
        <div className="row mb-4 mt-4">
          <div className="col">
            <h2 className="mb-2">India - Abu dhabu</h2>
            <p>22 flights &nbsp;&nbsp; · &nbsp;&nbsp; Round trip &nbsp;&nbsp; · &nbsp;&nbsp; 2 Guests</p>
          </div>
        </div>
        <div className="row mb-5 mt-5 align-items-end">
          <div className="col-auto me-auto">
            <h4><i className="bi bi-funnel"></i> Filter</h4>
            <select className="filter-results" id="airlines" name="states[]" multiple="multiple">
              <option value="AL">Emirates</option>
              <option value="WY">Airasia</option>
            </select>
            <select className="filter-results" id="travel-time" name="states[]" multiple="multiple">
              <option value="AL">2-4 hours</option>
              <option value="WY">4-6 hours</option>
            </select>
            <select className="filter-results" id="stop-points" name="states[]" multiple="multiple">
              <option value="AL">1 stop</option>
              <option value="WY">non stop</option>
            </select>
            <select className="filter-results" id="halal-meal" name="states[]" multiple="multiple">
              <option value="AL">Egg</option>
              <option value="WY">Non veg</option>
            </select>
            <select className="filter-results" id="flight-time" name="states[]" multiple="multiple">
              <option value="AL">Morning (06:00 am to 11:59am)</option>
              <option value="WY">Afternoon (12:00 pm to 04:00 pm)</option>
            </select>
            <a href="#!">Reset filter</a>
          </div>
          <div className="col-auto">
            <div className="row g-1 align-items-center mb-2">
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
        <div className="accordion" id="accordionExample">
          <div className="accordion-item flight-block" onClick={handleFlightCardClick}>
            <h2 className="accordion-header">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <div className="d-flex flex-row">
                    <div className="flight-logo">
                      <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                    </div>
                    <div className="ps-5">
                      <h3>11:00 - 16:40</h3>
                      <p>Emirates airlines</p>
                    </div>
                    <div className="ps-5">
                      <h3>5 hours 40 minutes</h3>
                      <p>BLR - AUH</p>
                    </div>
                    <div className="ps-5">
                      <h3>1 stop</h3>
                      <p>1 hour 30 minutes | HYD</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 text-end">
                  <div className="d-flex justify-content-end">
                    <div>
                      <h2 className="mb-2">$999</h2>
                      <p>Round trip</p>
                    </div>
                    <div className="ps-5 text-center">
                      <a href="#!" className="btn btn-primary btn-sm mb-2">Book now</a>
                      <a href="#!" className="flight-details-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Quick view</a>
                    </div>
                  </div>
                </div>
              </div>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body flight-details">
                <div className="d-flex flex-row">
                  <div className="flight-logo">
                    <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                  </div>
                  <div className="airport-details">
                    <span className="travel-line"></span>
                    <p>Monday, August 12 · 11:00</p>
                    <h3>Bangalore International Airport (BLR)</h3>
                    <p className="mt-4">Monday, August 12 · 13:00</p>
                    <h3>Hyderabad International Airport (Hyd)</h3>
                  </div>
                  <div className="ps-5">
                    <p className="small-text">Trip time: 2 hours</p>
                    <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
                  </div>
                </div>
                <div className="transit-block">
                  Transit time: 1 hours 30 minutes - Hyderabad International Airport (HYD)
                </div>
                <div className="d-flex flex-row">
                  <div className="flight-logo">
                    <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                  </div>
                  <div className="airport-details">
                    <span className="travel-line"></span>
                    <p>Monday, August 12 · 14:30</p>
                    <h3>Hyderabad International Airport (Hyd)</h3>
                    <p className="mt-4">Monday, August 12 · 16:40</p>
                    <h3>Abudhabi International Airport (AUH)</h3>
                  </div>
                  <div className="ps-5">
                    <p className="small-text">Trip time: 2 hours 10 minutes</p>
                    <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item flight-block">
            <h2 className="accordion-header">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <div className="d-flex flex-row">
                    <div className="flight-logo">
                      <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                    </div>
                    <div className="ps-5">
                      <h3>11:00 - 16:40</h3>
                      <p>Emirates airlines</p>
                    </div>
                    <div className="ps-5">
                      <h3>5 hours 40 minutes</h3>
                      <p>BLR - AUH</p>
                    </div>
                    <div className="ps-5">
                      <h3>1 stop</h3>
                      <p>1 hour 30 minutes | HYD</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 text-end">
                  <div className="d-flex justify-content-end">
                    <div>
                      <h2 className="mb-2">$999</h2>
                      <p>Round trip</p>
                    </div>
                    <div className="ps-5 text-center">
                      <a href="#!" className="btn btn-primary btn-sm mb-2">Book now</a>
                      <a href="#!" className="flight-details-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Quick view</a>
                    </div>
                  </div>
                </div>
              </div>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body flight-details">
                <div className="d-flex flex-row">
                  <div className="flight-logo">
                    <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                  </div>
                  <div className="airport-details">
                    <span className="travel-line"></span>
                    <p>Monday, August 12 · 11:00</p>
                    <h3>Bangalore International Airport (BLR)</h3>
                    <p className="mt-4">Monday, August 12 · 13:00</p>
                    <h3>Hyderabad International Airport (Hyd)</h3>
                  </div>
                  <div className="ps-5">
                    <p className="small-text">Trip time: 2 hours</p>
                    <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
                  </div>
                </div>
                <div className="d-flex flex-row transit-block">
                  Transit time: 1 hours 30 minutes - Hyderabad International Airport (HYD)
                </div>
                <div className="d-flex flex-row">
                  <div className="flight-logo">
                    <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                  </div>
                  <div className="airport-details">
                    <span className="travel-line"></span>
                    <p>Monday, August 12 · 14:30</p>
                    <h3>Hyderabad International Airport (Hyd)</h3>
                    <p className="mt-4">Monday, August 12 · 16:40</p>
                    <h3>Abudhabi International Airport (AUH)</h3>
                  </div>
                  <div className="ps-5">
                    <p className="small-text">Trip time: 2 hours 10 minutes</p>
                    <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item flight-block">
            <h2 className="accordion-header">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <div className="d-flex flex-row">
                    <div className="flight-logo">
                      <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                    </div>
                    <div className="ps-5">
                      <h3>11:00 - 16:40</h3>
                      <p>Emirates airlines</p>
                    </div>
                    <div className="ps-5">
                      <h3>5 hours 40 minutes</h3>
                      <p>BLR - AUH</p>
                    </div>
                    <div className="ps-5">
                      <h3>1 stop</h3>
                      <p>1 hour 30 minutes | HYD</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 text-end">
                  <div className="d-flex justify-content-end">
                    <div>
                      <h2 className="mb-2">$999</h2>
                      <p>Round trip</p>
                    </div>
                    <div className="ps-5 text-center">
                      <a href="#!" className="btn btn-primary btn-sm mb-2">Book now</a>
                      <a href="#!" className="flight-details-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Quick view</a>
                    </div>
                  </div>
                </div>
              </div>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body flight-details">
                <div className="d-flex flex-row">
                  <div className="flight-logo">
                    <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                  </div>
                  <div className="airport-details">
                    <span className="travel-line"></span>
                    <p>Monday, August 12 · 11:00</p>
                    <h3>Bangalore International Airport (BLR)</h3>
                    <p className="mt-4">Monday, August 12 · 13:00</p>
                    <h3>Hyderabad International Airport (Hyd)</h3>
                  </div>
                  <div className="ps-5">
                    <p className="small-text">Trip time: 2 hours</p>
                    <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
                  </div>
                </div>
                <div className="d-flex flex-row transit-block">
                  Transit time: 1 hours 30 minutes - Hyderabad International Airport (HYD)
                </div>
                <div className="d-flex flex-row">
                  <div className="flight-logo">
                    <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                  </div>
                  <div className="airport-details">
                    <span className="travel-line"></span>
                    <p>Monday, August 12 · 14:30</p>
                    <h3>Hyderabad International Airport (Hyd)</h3>
                    <p className="mt-4">Monday, August 12 · 16:40</p>
                    <h3>Abudhabi International Airport (AUH)</h3>
                  </div>
                  <div className="ps-5">
                    <p className="small-text">Trip time: 2 hours 10 minutes</p>
                    <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
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

export default Flights;
