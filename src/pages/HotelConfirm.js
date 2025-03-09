import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import FlightsFilter from '../components/FlightsFilter';
import FlightsSearch from '../components/FlightsSearch';
import FlightContainer from '../components/FlightContainer';
import NoDataAvailable from '../components/NoDataAvailable';
import Select from '../components/Select';

const HotelConfirm = ({ id }) => {
  localStorage.setItem('current_route', '/hotelConfirm');
  const location = useLocation();
  const history = useHistory();
  const { state } = location;
  const [cabDatum, setCabDatum] = useState(state?.data || null);

  const capitalizeWords = str => str.replace(/\b\w/g, char => char.toUpperCase());

  const getCurrentDateTime = () => {
    const options = { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
    const now = new Date();
    return now.toLocaleString('en-GB', options).replace(',', '').toLowerCase();
  }

  return (
    <>
      <div class="container-xxl section-block-inner">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <h2 class="mb-2">Courtyard by Marriott New York</h2>
                <p class="hero-text hero-text-dark">
                  Check in <span>23 oct 2024</span> - Check out <span>26 oct 2024</span>
                </p>
            </div>
        </div>
      </div>
      <div class="container-xxl section-block mb-5">
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <div class="flight-details flight-details-big pb-4">
              <div class="row">
                <div class="col-12"><h3 class="mb-3">Payment details</h3></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <div class="d-flex align-items-start">
                    <div class="nav flex-column me-3 tabs-cards" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Credit card</button>
                      <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Debit card</button>
                      <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Internet banking</button>
                      <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">UPI</button>
                    </div>
                  </div>
                </div>
                <div class="col-9">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                      <div class="row">
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name on card" />
                        </div>
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Card number" />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="MM/YYYY" />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CVV" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                      <div class="row">
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name on card" />
                        </div>
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Card number" />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="MM/YYYY" />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CVV" />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                      <select class="form-select" aria-label="Large select example">
                        <option selected="">Select Bank</option>
                        <option value="1">HDFC bank</option>
                        <option value="2">ICICI bank</option>
                        <option value="2">State bank of India</option>
                        <option value="2">Axis Bank</option>
                      </select>
                    </div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter UPI ID" />
                    </div>
                  </div>
                  <div class="mt-4">
                    <a href="#!" class="btn btn-primary">Make Payment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="booking-block">
              <h3 class="booking-title">Pricing Details</h3>
              <div class="booking-details-block">
                <p class="booking-details">Number of guests <span>2 adult 1 kid</span></p>
                <p class="booking-details">$750 x 2 Nights <span>$1,500</span></p>
                <p class="booking-sub-title">Coupon applied <span>-$250</span></p>
                <p class="coupon-type mb-2"><span class="coupon-name">(FLAT $250 off)</span> <a href="#!" class="">delete</a></p>
                <div class="my-3 row">
                  <div class="col-auto">
                    <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Apply coupon" />
                  </div>
                  <div class="col-auto">
                    <a href="#!" class="btn btn-primary btn-sm">Apply</a>
                  </div>
                </div>
                <p class="booking-details">Service fee <span>$50</span></p>
                <p class="booking-details">Taxes (5%) <span>$200</span></p>
              </div>
              <div class="booking-grand-total">
                <p>Grand total</p>  
                <h2>$1,500 <span>(Inclusive of Taxes)</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default HotelConfirm;
