import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';

const HotelDetails = ({ id }) => {
  localStorage.setItem('current_route', '/hotelDetails');
  const location = useLocation();
  const history = useHistory();
  const { state } = location;
  const [hotelDatum, setHotelDatum] = useState(state?.data || null);

  const hotelPlaceOptions = [
    {
      value: 'jwmarriot-london',
      label: 'JW Marriot',
      lowerOne: 'London',
      lowerTwo: ''
    },
    {
      value: 'hayatt-newyork',
      label: 'Hayatt',
      lowerOne: 'London',
      lowerTwo: ''
    },
    {
      value: 'tajhotels-pune',
      label: 'Taj Hotels',
      lowerOne: 'Pune',
      lowerTwo: ''
    },
    {
      value: 'piramalhotels-bengaluru',
      label: 'Piramal Hotels',
      lowerOne: 'Bengaluru',
      lowerTwo: ''
    }
  ];

  const hotelConfirmRoute = () => {
    history.push({
      pathname: '/hotelConfirm',
      state: { from: 'Hotel Confirm click', data: hotelDatum }
    });
  }

  const renderHeading = (val) => {
    const place = hotelPlaceOptions.filter(o => o.value === val);
    if (place.length > 0) {
      return `${place[0].label}, ${place[0].lowerOne}`
    }
    return '';
  }

  const RenderOverviewBrief = ({ id, brief }) => {
    return (
      <div id={id} key={id} className="mb-3">
        <span className="overview-icon"><i className={`bi bi-${brief.icon}`}></i></span>
        <div className="overview-details align-top">
          <h4>{brief.name}</h4>
          <p>{brief.brief}</p>
        </div>
      </div>
    )
  }

  const RenderAmenity = ({ id, amenity }) => {
    return (
      <div id={id} key={id}>
        <h3><i className={`bi bi-${amenity.icon} text-brand`}></i> {amenity.title}</h3>
        {
          amenity.data.map((item, index) => (
            <p key={`p-${index}-${item}`}><i className="bi bi-check-circle-fill pe-2 text-success"></i>{item}</p>
          ))
        }
      </div>
    )
  }

  const renderStars = (rating) => {
    // Calculate full, half, and empty stars
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);

    return (
      <p className="text-warning">
        {/* Full stars */}
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <i key={`full-${index}`} className="bi bi-star-fill"></i>
          ))}

        {/* Half star */}
        {halfStar === 1 && <i className="bi bi-star-half"></i>}

        {/* Empty stars */}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <i key={`empty-${index}`} className="bi bi-star"></i>
          ))}
      </p>
    )
  }

  const getTotal = () => {
    return ((1500 * (hotelDatum.taxes / 100)) + (750 * hotelDatum.nightsTotal) + (hotelDatum.serviceFee)).toLocaleString();
  }


  const RenderRoom = ({ id, room }) => {
    return (
      <div className="row mb-4 trip-block" id={id} key={id}>
        <div className="col-md-8 col-sm-12 mb-3">
          <div className="d-flex flex-row">
            <div className="trip-image">
              <img src={`./assets/images/book_online/${room.image}`} className="img-style" alt="" />
            </div>
            <div className="ps-3">
              <h3>{room.title}</h3>
              <div className="d-flex flex-row">
              {
                room.amenities.length > 0 && room.amenities.map((item, index) => (
                  <p key={`amenityq-${index}`}><i className="bi bi-dot"></i>{item}</p>
                ))
              }
              </div>
              <p className="text-success pe-4">
                {
                  room.popular.length > 0 && room.popular.map((item, index) => (
                    <span ><i key={`popular-${index}`} className="bi bi-patch-check-fill"></i> {item.title} <br /></span>
                  ))
                }
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 text-end">
          <h2 className="mb-0">${room.price}</h2>
          <p className="mb-4">Per day</p>
          <button type="button" className="btn btn-primary btn-sm">Select</button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-xxl section-block-inner">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <h2 className="mb-2">{renderHeading(hotelDatum.namePlace)}</h2>
            <p className="hero-text hero-text-dark"><i className="bi bi-geo-alt"></i> {hotelDatum.address}
              {/* <a href="#!" className="text-primary ms-3"><i className="bi bi-eye-fill"></i> View map</a> */}
            </p>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <nav className="nav overview-tabs">
          <a className="nav-link active" aria-current="page" href="#carouselExampleIndicators">Images</a>
          <a className="nav-link" href="#trip-overview-block">Overview</a>
          <a className="nav-link" href="#amenities">Amenities</a>
          <a className="nav-link" href="#room-selection">Room Selection</a>
          <a className="nav-link" href="#customer-review">Customer Reviews</a>
          <a className="nav-link" href="#t&c">Terms & Conditions</a>
        </nav>
      </div>
      <div className="container-xxl section-block mb-5">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./assets/images/slider/slider-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/slider/slider-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/slider/slider-3.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/slider/slider-4.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./assets/images/slider/slider-5.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active thumbnail" aria-current="true" aria-label="Slide 1">
                  <img src="./assets/images/slider/slider-1.png" className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="thumbnail" aria-label="Slide 2">
                  <img src="./assets/images/slider/slider-2.png" className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="thumbnail" aria-label="Slide 3">
                  <img src="./assets/images/slider/slider-3.png" className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="thumbnail" aria-label="Slide 4">
                  <img src="./assets/images/slider/slider-4.png" className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="thumbnail" aria-label="Slide 5">
                  <img src="./assets/images/slider/slider-5.png" className="d-block w-100" alt="..." />
                </button>
              </div>
            </div>
            <h3 id="trip-overview-block">Overview</h3>
            <p>{hotelDatum.hotelDetails.overview}</p>
            <div className="trip-overview">
              <div className="row">
                <div className="col-6">
                  {
                    Array.isArray(hotelDatum.hotelDetails.overviewOneBrief) && hotelDatum.hotelDetails.overviewOneBrief.length > 0 && hotelDatum.hotelDetails.overviewOneBrief.map((brief, index) => {
                      return (<RenderOverviewBrief id={`briefHotelOne-${index}`} brief={brief} />)
                    })
                  }
                </div>
                <div className="col-6">
                  {
                    Array.isArray(hotelDatum.hotelDetails.overviewTwoBrief) && hotelDatum.hotelDetails.overviewTwoBrief.length > 0 && hotelDatum.hotelDetails.overviewTwoBrief.map((brief, index) => {
                      return (<RenderOverviewBrief id={`briefHotelTwo-${index}`} brief={brief} />)
                    })
                  }
                </div>
              </div>
            </div>
            <div className="h-line"></div>
            <div className="row" id="amenities">
              <div className="col-12">
                <h3>Amenities</h3>
              </div>
              <div className="col-6">
                {
                  Array.isArray(hotelDatum.hotelDetails.amenitiesOne) && hotelDatum.hotelDetails.amenitiesOne.length > 0 && hotelDatum.hotelDetails.amenitiesOne.map((amenity, index) => {
                    return (<RenderAmenity id={`amenityOne-${index}`} amenity={amenity} />)
                  })
                }
              </div>
              <div className="col-6">
                {
                  Array.isArray(hotelDatum.hotelDetails.amenitiesTwo) && hotelDatum.hotelDetails.amenitiesTwo.length > 0 && hotelDatum.hotelDetails.amenitiesTwo.map((amenity, index) => {
                    return (<RenderAmenity id={`amenityTwo-${index}`} amenity={amenity} />)
                  })
                }
              </div>
            </div>
            <div className="h-line"></div>
            <div className="row" id="room-selection">
              <div className="col-12">
                <h3>Room options</h3>
                {
                  Array.isArray(hotelDatum.hotelDetails.rooms) && hotelDatum.hotelDetails.rooms.length > 0 && hotelDatum.hotelDetails.rooms.map((room, index) => {
                    return (<RenderRoom id={`room-${index}`} room={room} />)
                  })
                }
              </div>
            </div>
            <div className="h-line"></div>
            <div className="row" id="customer-review">
              <div className="col-12">
                <div className="bg-light p-4 mb-4 card">
                  <div className="g-4 align-items-center row">
                    <div className="col-md-4">
                      <div className="text-center">
                        <h2 className="mb-0">{hotelDatum.hotelDetails.reviews.net}</h2>
                        <p className="mb-2">Based on {hotelDatum.hotelDetails.reviews.total} Reviews</p>
                        <p className="text-warning">
                          {renderStars(hotelDatum.hotelDetails.reviews.net)}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="p-0 card-body">
                        <div className="gx-3 g-2 align-items-center row">
                          <div className="col-sm-3 col-3">
                            <p className="progress-title">Excellent</p>
                            <p className="progress-title">Good</p>
                            <p className="progress-title">Average</p>
                            <p className="progress-title">Below Average</p>
                            <p className="progress-title">Bad</p>
                          </div>
                          <div className="col-sm-9 col-9">
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={`${hotelDatum.hotelDetails.reviews.excellent}`} aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar" style={{ width: `${hotelDatum.hotelDetails.reviews.excellent}%`}}></div>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={`${hotelDatum.hotelDetails.reviews.good}`} aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar" style={{ width: `${hotelDatum.hotelDetails.reviews.good}%` }}></div>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={`${hotelDatum.hotelDetails.reviews.average}`} aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar" style={{ width: `${hotelDatum.hotelDetails.reviews.average}%` }}></div>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={`${hotelDatum.hotelDetails.reviews.belowAverage}`} aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar" style={{ width: `${hotelDatum.hotelDetails.reviews.belowAverage}%` }}></div>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={`${hotelDatum.hotelDetails.reviews.bad}`}  aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar" style={{ width: `${hotelDatum.hotelDetails.reviews.bad}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
                <h4>Rate your experience</h4>
                <a href="#!" className="text-warning">
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </a>
                <div className="mb-3 mt-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Leave comment</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <a href="#!" className="btn btn-primary btn-sm">Post Comment</a>
              </div> */}
              {/* <div className="col-12 mt-3 pb-4 border-bottom">
                <div className="d-md-flex my-2">
                  <div className="avatar avatar-lg me-3 flex-shrink-0">
                    <img src="./assets/images/user.png" alt="avatar" className="review-image" /></div>
                  <div>
                    <div className="d-flex justify-content-between mt-1 mt-md-0">
                      <div>
                        <h4 className="me-3 mb-0">John deo</h4>
                        <p>Stayed on: 23 Oct 2024</p>
                      </div>
                      <div>
                        <p className="text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                        </p>
                      </div>
                    </div>
                    <p>Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                  </div>
                </div>
                <div className="d-md-flex reply-review">
                  <div className="avatar avatar-lg me-3 flex-shrink-0">
                    <img src="./assets/images/user.png" alt="avatar" className="review-image" /></div>
                  <div>
                    <div className="d-flex justify-content-between mt-1 mt-md-0">
                      <div>
                        <h4 className="me-3 mb-0">Admin</h4>
                      </div>
                    </div>
                    <p>Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-12 mt-3">
                <div className="d-md-flex my-2">
                  <div className="avatar avatar-lg me-3 flex-shrink-0">
                    <img src="./assets/images/user.png" alt="avatar" className="review-image" /></div>
                  <div>
                    <div className="d-flex justify-content-between mt-1 mt-md-0">
                      <div>
                        <h4 className="me-3 mb-0">John deo</h4>
                        <p>Stayed on: 23 Oct 2024</p>
                      </div>
                      <div>
                        <p className="text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                          <i className="bi bi-star"></i>
                        </p>
                      </div>
                    </div>
                    <p>Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.</p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="h-line"></div>
            <div className="row" id="t&c">
              <div className="col-12">
                <h3>Hotel Policies</h3>
                {
                  hotelDatum.hotelDetails.hotelPolicyOne.map((policy, index) => (
                    <p key={`policyOne-${index}`}><i className="bi bi-check-circle-fill"></i> {policy}</p>
                  ))
                }
                <p className="mt-2">
                  {
                    hotelDatum.hotelDetails.hotelPolicyTwo.map((policy, index) => (
                      <span key={`policyTwo-${index}`} ><i className="bi bi-arrow-right"></i> {policy}<br /></span>
                    ))
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="booking-block mt-0">
              <h3 className="booking-title">Pricing Details</h3>
              <div className="booking-details-block">
                <p className="booking-details">Check in <span>{hotelDatum.journeyDate}</span></p>
                <p className="booking-details">Check out <span>{hotelDatum.returnDate}</span></p>
                <p className="booking-details">Number of guests <span>2 adult 1 kid</span></p>
                <p className="booking-details">$750 x {hotelDatum.nightsTotal} Nights <span>$1,500</span></p>
                <p className="booking-details">Service fee <span>${hotelDatum.serviceFee}</span></p>
                <p className="booking-details">Taxes ({hotelDatum.taxes}%) <span>${1500 * (hotelDatum.taxes / 100)}</span></p>
              </div>
              <div className="booking-grand-total">
                <p>Grand total</p>
                <h2>${getTotal()} <span>(Inclusive of Taxes)</span></h2>
              </div>
            </div>
            <div className="d-grid gap-2">
              <a href="#!" className="btn btn-primary btn-block" onClick={hotelConfirmRoute}>Confirm to book</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default HotelDetails;
