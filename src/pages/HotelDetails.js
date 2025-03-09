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

const HotelDetails = ({ id }) => {
  localStorage.setItem('current_route', '/hotelDetails');
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

  const hotelConfirmRoute = () => {
    history.push({
      pathname: '/hotelConfirm',
      state: { from: 'Hotel Confirm click' }
    });
  }

  return (
    <>
      <div class="container-xxl section-block-inner">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-12">
            <h2 class="mb-2">Courtyard by Marriott New York</h2>
            <p class="hero-text hero-text-dark"><i class="bi bi-geo-alt"></i> 5855 W Century Blvd, Los Angeles - 90045 <a href="#!" class="text-primary ms-3"><i class="bi bi-eye-fill"></i> View map</a></p>
          </div>
        </div>
      </div>
      <div class="container-xxl">
        <nav class="nav overview-tabs">
          <a class="nav-link active" aria-current="page" href="#carouselExampleIndicators">Images</a>
          <a class="nav-link" href="#trip-overview-block">Overview</a>
          <a class="nav-link" href="#amenities">Amenities</a>
          <a class="nav-link" href="#room-selection">Room Selection</a>
          <a class="nav-link" href="#customer-review">Customer Reviews</a>
          <a class="nav-link" href="#t&c">Terms & Conditions</a>
        </nav>
      </div>
      <div class="container-xxl section-block mb-5">
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="./assets/images/slider/slider-1.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./assets/images/slider/slider-2.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./assets/images/slider/slider-3.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./assets/images/slider/slider-4.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="./assets/images/slider/slider-5.png" class="d-block w-100" alt="..." />
                </div>
              </div>
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active thumbnail" aria-current="true" aria-label="Slide 1">
                  <img src="./assets/images/slider/slider-1.png" class="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="thumbnail" aria-label="Slide 2">
                  <img src="./assets/images/slider/slider-2.png" class="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="thumbnail" aria-label="Slide 3">
                  <img src="./assets/images/slider/slider-3.png" class="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="thumbnail" aria-label="Slide 4">
                  <img src="./assets/images/slider/slider-4.png" class="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="thumbnail" aria-label="Slide 5">
                  <img src="./assets/images/slider/slider-5.png" class="d-block w-100" alt="..." />
                </button>
              </div>
            </div>
            <h3 id="trip-overview-block">Overview</h3>
            <p>See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through the historic streets on board a vintage double decker bus. Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.</p>
            <div class="trip-overview">
              <div class="row">
                <div class="col-6">
                  <div class="mb-3">
                    <span class="overview-icon"><i class="bi bi-slash-circle"></i></span>
                    <div class="overview-details align-top">
                      <h4>Free cancellation</h4>
                      <p>Cancel up to 7 days in advance to receive a full refund</p>
                    </div>
                  </div>
                  <div class="mb-3">
                    <span class="overview-icon"><i class="bi bi-ticket"></i></span>
                    <div class="overview-details align-top">
                      <h4>Mobile ticketing</h4>
                      <p>Use your phone or print your voucher</p>
                    </div>
                  </div>
                  <div>
                    <span class="overview-icon"><i class="bi bi-lightning-charge"></i></span>
                    <div class="overview-details align-top">
                      <h4>Instant confirmation</h4>
                      <p>Don’t wait for the confirmation!</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <span class="overview-icon"><i class="bi bi-clock-history"></i></span>
                    <div class="overview-details align-top">
                      <h4>3 days 4 nights</h4>
                      <p>Check availability.</p>
                    </div>
                  </div>
                  <div>
                    <span class="overview-icon"><i class="bi bi-megaphone"></i></span>
                    <div class="overview-details align-top">
                      <h4>Live tour guide in English</h4>
                      <p>English</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-line"></div>
            <div class="row" id="amenities">
              <div class="col-12">
                <h3>Amenities</h3>
              </div>
              <div class="col-6">
                <h3><i class="bi bi-bicycle text-brand"></i> Activities</h3>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Swimming pool</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Spa</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Kids' play area</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Gym</p>
                <h3 class="mt-3"><i class="bi bi-hand-thumbs-up-fill text-brand"></i> Services</h3>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Dry cleaning</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Room Service</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Special service</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Waiting Area</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Secrete smoking area</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Concierge</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Laundry facilities</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Lift</p>
              </div>
              <div class="col-6">
                <h3><i class="bi bi-credit-card text-brand"></i> Payment Method</h3>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Credit card (Visa, Master card)</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Cash</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Debit Card</p>
                <h3 class="mt-3"><i class="bi bi-shield-fill-check text-brand"></i> Safety & Security</h3>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Doctor on Call</p>
                <h3 class="mt-3"><i class="bi bi-translate text-brand"></i> Staff Language</h3>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>English</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Hindi</p>
                <p><i class="bi bi-check-circle-fill pe-2 text-success"></i>Arabic</p>
              </div>
            </div>
            <div class="h-line"></div>
            <div class="row" id="room-selection">
              <div class="col-12">
                <h3>Room options</h3>
                <div class="row mb-4 trip-block">
                  <div class="col-auto me-auto">
                    <div class="d-flex flex-row">
                      <div class="trip-image">
                        <img src="./assets/images/book_online/img-1.png" class="img-style" alt="" />
                      </div>
                      <div class="ps-3">
                        <h3>Pride moon Village Resort & Spa</h3>
                        <p>Air Conditioning <i class="bi bi-dot"></i> Wifi <i class="bi bi-dot"></i> Kitchen <i class="bi bi-dot"></i> Pool</p>
                        <p class="text-success pe-4">
                          <i class="bi bi-patch-check-fill"></i> Free Cancellation till 23 Oct 2024 <br/>
                            <i class="bi bi-patch-check-fill"></i> Free Breakfast
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto text-end">
                    <h2 class="mb-0">$999</h2>
                    <p class="mb-4">Per day</p>
                    <button type="button" class="btn btn-primary btn-sm">Select</button>
                  </div>
                </div>
                <div class="row mb-4 trip-block">
                  <div class="col-auto me-auto">
                    <div class="d-flex flex-row">
                      <div class="trip-image">
                        <img src="./assets/images/book_online/img-1.png" class="img-style" alt="" />
                      </div>
                      <div class="ps-3">
                        <h3>Luxury Room with Balcony</h3>
                        <p>Air Conditioning <i class="bi bi-dot"></i> Wifi <i class="bi bi-dot"></i> Kitchen <i class="bi bi-dot"></i> Pool</p>
                        <p class="text-danger pe-4">
                          <i class="bi bi-patch-check-fill"></i> Non Refundable <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto text-end">
                    <h2 class="mb-0">$750</h2>
                    <p class="mb-4">Per day</p>
                    <button type="button" class="btn btn-primary btn-sm">Select</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-line"></div>
            <div class="row" id="customer-review">
              <div class="col-12">
                <div class="bg-light p-4 mb-4 card">
                  <div class="g-4 align-items-center row">
                    <div class="col-md-4">
                      <div class="text-center">
                        <h2 class="mb-0">4.5</h2>
                        <p class="mb-2">Based on 120 Reviews</p>
                        <p class="text-warning">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <i class="bi bi-star"></i>
                        </p>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="p-0 card-body">
                        <div class="gx-3 g-2 align-items-center row">
                          <div class="col-sm-3 col-3">
                            <p class="progress-title">Excellent</p>
                            <p class="progress-title">Good</p>
                            <p class="progress-title">Average</p>
                            <p class="progress-title">Below Average</p>
                            <p class="progress-title">Bad</p>
                          </div>
                          <div class="col-sm-9 col-9">
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" style={{width: '85%'}}></div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" style={{width: '65%'}}></div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" style={{width: '45%'}}></div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" style={{width: '25%'}}></div>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" style={{width: '10%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <h4>Rate your experience</h4>
                <a href="#!" class="text-warning">
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </a>
                <div class="mb-3 mt-3">
                  <label htmlFor="exampleFormControlTextarea1" class="form-label">Leave comment</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <a href="#!" class="btn btn-primary btn-sm">Post Comment</a>
              </div>
              <div class="col-12 mt-3 pb-4 border-bottom">
                <div class="d-md-flex my-2">
                  <div class="avatar avatar-lg me-3 flex-shrink-0">
                    <img src="./assets/images/user.png" alt="avatar" class="review-image" /></div>
                  <div>
                    <div class="d-flex justify-content-between mt-1 mt-md-0">
                      <div>
                        <h4 class="me-3 mb-0">John deo</h4>
                        <p>Stayed on: 23 Oct 2024</p>
                      </div>
                      <div>
                        <p class="text-warning">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                        </p>
                      </div>
                    </div>
                    <p>Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                  </div>
                </div>
                <div class="d-md-flex reply-review">
                  <div class="avatar avatar-lg me-3 flex-shrink-0">
                    <img src="./assets/images/user.png" alt="avatar" class="review-image" /></div>
                  <div>
                    <div class="d-flex justify-content-between mt-1 mt-md-0">
                      <div>
                        <h4 class="me-3 mb-0">Admin</h4>
                      </div>
                    </div>
                    <p>Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="d-md-flex my-2">
                  <div class="avatar avatar-lg me-3 flex-shrink-0">
                    <img src="./assets/images/user.png" alt="avatar" class="review-image" /></div>
                  <div>
                    <div class="d-flex justify-content-between mt-1 mt-md-0">
                      <div>
                        <h4 class="me-3 mb-0">John deo</h4>
                        <p>Stayed on: 23 Oct 2024</p>
                      </div>
                      <div>
                        <p class="text-warning">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                        </p>
                      </div>
                    </div>
                    <p>Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-line"></div>
            <div class="row" id="t&c">
              <div class="col-12">
                <h3>Hotel Policies</h3>
                <p>
                  <i class="bi bi-check-circle-fill"></i> This is a family farmhouse, hence we request you to not indulge.
                </p>
                <p>
                  <i class="bi bi-check-circle-fill"></i> Drinking and smoking within controlled limits are permitted at the farmhouse but please do not create a mess or ruckus at the house.
                </p>
                <p>
                  <i class="bi bi-check-circle-fill"></i> Drugs and intoxicating illegal products are banned and not to be brought to the house or consumed.
                </p>
                <p>
                  <i class="bi bi-x-circle-fill"></i> For any update, the customer shall pay applicable cancellation/modification charges.
                </p>
                <p class="mt-2">
                  <i class="bi bi-arrow-right"></i> Check-in: 1:00 pm - 9:00 pm <br />
                  <i class="bi bi-arrow-right"></i> Check out: 11:00 am <br />
                  <i class="bi bi-arrow-right"></i> Self-check-in with building staff <br />
                  <i class="bi bi-arrow-right"></i> No pets <br />
                  <i class="bi bi-arrow-right"></i> No parties or events <br />
                  <i class="bi bi-arrow-right"></i> Smoking is allowed
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="booking-block mt-0">
              <h3 class="booking-title">Pricing Details</h3>
              <div class="booking-details-block">
                <p class="booking-details">Check in <span>23 oct 2024</span></p>
                <p class="booking-details">Check out <span>26 oct 20245</span></p>
                <p class="booking-details">Number of guests <span>2 adult 1 kid</span></p>
                <p class="booking-details">$750 x 2 Nights <span>$1,500</span></p>
                <p class="booking-details">Service fee <span>$50</span></p>
                <p class="booking-details">Taxes (5%) <span>$200</span></p>
              </div>
              <div class="booking-grand-total">
                <p>Grand total</p>
                <h2>$1,500 <span>(Inclusive of Taxes)</span></h2>
              </div>
            </div>
            <div class="d-grid gap-2">
              <a href="#!" class="btn btn-primary btn-block" onClick={hotelConfirmRoute}>Confirm to book</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default HotelDetails;
