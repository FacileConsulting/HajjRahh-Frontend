import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Counter from '../components/Counter';
import { DatePicker } from 'rsuite';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';

const HotelConfirmed = ({ id }) => {
  localStorage.setItem('current_route', '/hotelConfirmed');
  const location = useLocation();
  const { state } = location;
  const [bookingData, setBookingData] = useState(state?.data || null);

  console.log('$$$$$$@@@@@bookingData', bookingData);

  return (
    <>
      <div className="container-xxl section-block mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <img src="./assets/images/confirmed.svg" alt="" className="confirmed-image" />
            <h3 className="mt-4">Booking confirmed</h3>
            <p>Confirmation number: #{bookingData.bookingNumber}</p>
          </div>
        </div>
      </div>
      <div className="container-xxl section-block-inner">
        <div className="row align-items-center text-center">
          <div className="col-lg-12 col-md-12">
            <h3 className="mb-2">{bookingData.placeName}</h3>
            <p className="hero-texted"><span>Travel dates: </span>{bookingData.journeyDate}<span> To: </span>{bookingData.returnDate}</p>
            <p className="hero-texted"><span>Address: </span>{bookingData.address}</p>
          </div>
        </div>
      </div>
      <div className="container-xxl section-block mb-5">
        <div className="row">
          <div className="col-12 mt-3">
            <p>Contact us to <a href="#!" className="coloured-link">support@hajjrahh.com</a> for support in case of issues with
              the booking.</p>
          </div>
          <div className="col-12 mt-3">
            <h3 className="mb-3">Next steps to follow</h3>
            <h4>Check Travel Documents</h4>
            <p>Ensure you have all necessary travel documents (passport, visa, ID) and they are up to date.</p>
            <p>Print or download your boarding pass, travel itinerary, and hotel confirmations.</p>
            <h4>Review Travel Requirements</h4>
            <p>Check the entry requirements for your destination (vaccination, testing, etc.).</p>
            <p>Verify if there are any quarantine or health regulations to follow upon arrival.</p>
            <h4>Pack Accordingly</h4>
            <p>Review the baggage policy of your airline.</p>
            <p>Pack essentials like medications, electronics, chargers, and travel adapters.</p>
            <p>Don't forget travel-size toiletries, appropriate clothing, and any destination-specific items.</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default HotelConfirmed;
