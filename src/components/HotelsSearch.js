import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DatePicker } from 'rsuite';
import isBefore from 'date-fns/isBefore';
import TimePicker from 'rc-time-picker';
import Select from './Select';
import Button from './Button';
import SearchInput from './SearchInput';
import Traveller from './Traveller';
import { updateFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-time-picker/assets/index.css';

const HotelsSearch = ({ id, loading, hotelsCallback }) => {
  const dispatch = useDispatch();
  const { hotelPlace, hotelJourneyDate, hotelReturnDate, travelRooms } = useSelector(state => state.home);

  const dateStyles = {
    border: '1px solid #79747E',
    height: '47px',
    fontSize: '16px',
    lineHeight: '50px',
    borderRadius: '6px'
  };

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

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [hotelJourneyDay, setHotelJourneyDay] = useState('Day of Week');
  const [hotelReturnDay, setHotelReturnDay] = useState('Day of Week');

  const handleHotelSearchClick = () => {
    hotelsCallback('search');
  }

  const handleHotelJourneyDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'hotelJourneyDate', value: '' }));
      setHotelJourneyDay('Day of Week');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'hotelJourneyDate', value: date }));
      setHotelJourneyDay(daysOfWeek[value.getDay()]);
    }
  }

  const handleHotelReturnDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'hotelReturnDate', value: '' }));
      setHotelReturnDay('Day of Week');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'hotelReturnDate', value: date }));
      setHotelReturnDay(daysOfWeek[value.getDay()]);
    }
  }

  return (

    <div id={id} className="container section-block-hero">
      <div className="row">
        <div className="col-lg-12 col-md-12 text-center">
          <h1 className="mb-2 hero-title">Embark on a Sacred Journey with Us</h1>
          <p className="hero-text mb-4">Your Trusted Companion for a Hassle-Free Hajj and Umrah Experience</p>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="booking-form">
            <div className="hero-form-title">Book Hotel</div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <SearchInput
                    id={"hotel-search-input"}
                    keyName={"hotelPlace"}
                    placeholder={"Enter Location or Hotel"}
                    middle={"Search"}
                    lowerTwo={"City Name"}
                    options={hotelPlaceOptions}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 departure-date-home-page">
                  <a href="#!" className="form-selection">
                    <label htmlFor="journeyDate" className="form-label">Journey Date</label>
                    <div className="input-group">
                      <DatePicker oneTap id="hotels-search-journey-date-datepicker" size="lg" style={dateStyles} onChange={handleHotelJourneyDate} shouldDisableDate={date => isBefore(date, new Date())} placeholder="Select Date" format="dd-MM-yyyy" />
                    </div>
                    <div className="helper-text">{hotelJourneyDay}</div>
                  </a>
                </div>
              </div>              
              <div className="col">
                <div className="mb-3 departure-date-home-page">
                  <a href="#!" className="form-selection">
                    <label htmlFor="return" className="form-label">Return Date</label>
                    <div className="input-group">
                      <DatePicker oneTap id="hotels-search-return-date-datepicker" size="lg" style={dateStyles} onChange={handleHotelReturnDate} placeholder="Select Date" format="dd-MM-yyyy" />
                    </div>
                    <div className="helper-text">{hotelReturnDay}</div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <Traveller
                    id={"rooms-guests"}
                    keyName={"travelRooms"}
                    placeholder={"Rooms & Guests"}
                    defaultTravellers={"1"}
                    defaultFlightClass={"Economy"}
                    defaultValue={travelRooms}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button id={"search-hotels-page-btn"} loading={loading} handleBtnClick={handleHotelSearchClick} btnType={"primary"} classes={"float-end"} label={"Search Hotels"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HotelsSearch;