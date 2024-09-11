import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import TripContainer from '../components/TripContainer';

const FlightDetails = ({ id }) => {
  localStorage.setItem('current_route', '/flightDetails');
  const history = useHistory();
  const { displayEmail } = useSelector(state => state.myAccount);
  const [tripsData, setTripsData] = useState({ upcomingTrips: [], onGoingTrips: [], pastTrips: [] });
  // State to store loading status
  const [loading, setLoading] = useState(true);
  // State to store error (if any)
  const [error, setError] = useState(null);

  return (
    <>
      <div className="container-xxl section-block-inner">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <h1 className="mb-2">Booking</h1>
            <p className="hero-text">Embark on a seamless journey with Emirates airlines from Bangalore (BLR) to Abu Dhabi (AUH), with a layover in Hyderabad (HYD). Enjoy world-class service, comfortable seating, and delicious dining options onboard. Take advantage of your layover to explore the dynamic city of Hyderabad before continuing your adventure to Abu Dhabi. With Emirates airlines, every flight promises an exceptional experience from start to finish.</p>
          </div>
        </div>
      </div>
      <div className="container-xxl section-block mb-5">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="flight-details flight-details-big">
              <div className="d-flex flex-row">
                <div className="flight-logo">
                  <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                </div>
                <div className="airport-details">
                  <span className="travel-line"></span>
                  <p>Monday, August 12 · 11:00</p>
                  <h3>Bangalore International Airport (BLR)</h3>
                  <div className="flight-information">
                    <p className="small-text pb-1">Trip time: 2 hours</p>
                    <p className="small-text pb-3">ANA · Business class · Boeing 787 · NH 847</p>
                    <div className="row">
                      <div className="col-6">
                        <p className=" mb-2"><i className="bi bi-luggage me-2"></i> Baggage 1 x 23 kg</p>
                        <p className=" mb-2"><i className="bi bi-tv me-2"></i> In-flight entertainment</p>
                        <p><i className="bi bi-wifi me-2"></i> Free wifi internet</p>
                      </div>
                      <div className="col-6">
                        <p className=" mb-2"><i className="bi bi-suitcase2 me-2"></i> Cabin baggage 1 x 7 kg</p>
                        <p><i className="bi bi-1-circle me-2"></i> Priority Boarding</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">Monday, August 12 · 13:00</p>
                  <h3>Hyderabad International Airport (Hyd)</h3>
                </div>
              </div>
              <div className="transit-block">
                <p>Transit time: 1 hours 30 minutes - Hyderabad International Airport (HYD)</p>
                <p>At this stop, you need to: Prepare transit visa if required</p>
              </div>
              <div className="d-flex flex-row">
                <div className="flight-logo">
                  <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
                </div>
                <div className="airport-details">
                  <span className="travel-line"></span>
                  <p>Monday, August 12 · 14:30</p>
                  <h3>Hyderabad International Airport (Hyd)</h3>
                  <div className="flight-information">
                    <p className="small-text">Trip time: 2 hours 10 minutes</p>
                    <p className="small-text pb-3">ANA · Business class · Boeing 787 · NH 847</p>
                    <div className="row">
                      <div className="col-6">
                        <p className=" mb-2"><i className="bi bi-luggage me-2"></i> Baggage 1 x 23 kg</p>
                        <p className=" mb-2"><i className="bi bi-tv me-2"></i> In-flight entertainment</p>
                        <p><i className="bi bi-wifi me-2"></i> Free wifi internet</p>
                      </div>
                      <div className="col-6">
                        <p className=" mb-2"><i className="bi bi-suitcase2 me-2"></i> Cabin baggage 1 x 7 kg</p>
                        <p><i className="bi bi-1-circle me-2"></i> Priority Boarding</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">Monday, August 12 · 16:40</p>
                  <h3>Abudhabi International Airport (AUH)</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="booking-block">
              <h3 className="booking-title">Booking details</h3>
              <div className="booking-details-block">
                <p className="booking-details">Trip type:  <span>One way</span></p>
                <p className="booking-details">Trip duration: <span>5 hours 40 minutes</span></p>
                <p className="booking-details">Booking on: <span>09-sep-2024 16:03</span></p>
                <p className="booking-details">Number of passangers: <span>2 adults 1 child</span></p>
              </div>
            </div>
            <div className="booking-block">
              <h3 className="booking-title">Fare details</h3>
              <div className="booking-details-block">
                <p className="booking-sub-title">Base fare:  <span>$400</span></p>
                <p className="booking-details">Adult X 2: <span>$165</span></p>
                <p className="booking-details">Child X 1: <span>$70</span></p>
                <p className="booking-sub-title">Fee & Surcharges:  <span>$100</span></p>
                <p className="booking-details">Service charge: <span>$5</span></p>
                <p className="booking-details">Hospitality <span>$5</span></p>
                <p className="booking-details">Taxes <span>$20</span></p>
                <p className="booking-details">Airlines fuel surcharge <span>$70</span></p>
              </div>
            </div>
            <div className="d-grid gap-2">
              <a href="#!" className="btn btn-primary btn-block">Book now</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default FlightDetails;
