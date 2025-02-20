import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DatePicker } from 'rsuite';
import TimePicker from 'rc-time-picker';
import Select from './Select';
import Button from './Button';
import SearchInput from './SearchInput';
import { updateFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-time-picker/assets/index.css';

const HotelsSearch = ({ id, loading, cabsCallback }) => {
  const dispatch = useDispatch();
  const { cabPickUpPlace, cabDropPlace, cabDate, cabTime } = useSelector(state => state.home);

  const dateStyles = {
    border: '1px solid #79747E',
    height: '47px',
    fontSize: '16px',
    lineHeight: '50px',
    borderRadius: '6px'
  };

  const hotelPlaceOptions = [
    {
      value: 'london',
      label: 'London',
      lowerOne: 'JW Marriot',
      lowerTwo: ''
    },
    {
      value: 'newYork',
      label: 'New York',
      lowerOne: 'Hayatt',
      lowerTwo: ''
    },
    {
      value: 'pune',
      label: 'Pune',
      lowerOne: 'Taj Hotels',
      lowerTwo: ''
    },
    {
      value: 'bengaluru',
      label: 'Bengaluru',
      lowerOne: 'Piramal Hotels',
      lowerTwo: ''
    }
  ];

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [hotelCheckInDay, setHotelCheckInDay] = useState('Day of Week');
  const [hotelCheckOutDay, setHotelCheckOutDay] = useState('Day of Week');

  const handleCabSearchClick = () => {
    cabsCallback('search');
  }

  const handleCabTimeSelect = (value) => {
    if (value) {
      const hr = value.hour() < 10 ? `0${value.hour()}` : value.hour();
      const min = value.minute() < 10 ? `0${value.minute()}` : value.minute();
      dispatch(updateFunc({ keyName: 'cabTime', value: `${hr}:${min}` }));
    } else {
      dispatch(updateFunc({ keyName: 'cabTime', value: '' }));
    }
  }

  const handleHotelCheckInDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'hotelCheckInDate', value: '' }));
      setHotelCheckInDay('Day of Week');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'hotelCheckInDate', value: date }));
      setHotelCheckInDay(daysOfWeek[value.getDay()]);
    }
  }

  const handleHotelCheckOutDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'hotelCheckOutDate', value: '' }));
      setHotelCheckOutDay('Day of Week');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'hotelCheckOutDate', value: date }));
      setHotelCheckOutDay(daysOfWeek[value.getDay()]);
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
            <div className="hero-form-title">Book Hotels</div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <SearchInput
                    id={"pickup-hotel-search-input"}
                    keyName={"hotelPickUpPlace"}
                    placeholder={"Location"}
                    middle={"Search"}
                    lowerTwo={"Hotel Name"}
                    options={hotelPlaceOptions}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 check-in-date-home-page">
                  <a href="#!" className="form-selection">
                    <label htmlFor="checkIn" className="form-label">Check In</label>
                    <div className="input-group">
                      <DatePicker oneTap id="hotels-search-check-in-date-datepicker" size="lg" style={dateStyles} onChange={handleHotelCheckInDate} placeholder="Select Date" format="dd-MM-yyyy" />
                    </div>
                    <div className="helper-text">{hotelCheckInDay}</div>
                  </a>
                </div>
              </div>              
              <div className="col">
                <div className="mb-3 check-out-date-home-page">
                  <a href="#!" className="form-selection">
                    <label htmlFor="checkOut" className="form-label">Check Out</label>
                    <div className="input-group">
                      <DatePicker oneTap id="hotels-search-check-out-date-datepicker" size="lg" style={dateStyles} onChange={handleHotelCheckOutDate} placeholder="Select Date" format="dd-MM-yyyy" />
                    </div>
                    <div className="helper-text">{hotelCheckOutDay}</div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <a href="#!" className="form-selection">
                    <label htmlFor="return" className="form-label">Journey Time</label>
                    <div className="input-group">
                      <TimePicker
                        id="cabs-timepicker"
                        showSecond={false}
                        className="xxx"
                        inputIcon={<i className="bi bi-clock"></i>}
                        onChange={handleCabTimeSelect}
                        format={"h:mm A"}
                        use12Hours
                        inputReadOnly
                      />
                      {/* <DatePicker oneTap id="cabs-search-pick-up-date-datepicker" size="lg" style={dateStyles} onChange={handleCabPickUpDate} placeholder="Select Date" format="dd-MM-yyyy" /> */}
                    </div>
                    <div className="helper-text">&nbsp;</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button id={"search-cabs-page-btn"} loading={loading} handleBtnClick={handleCabSearchClick} btnType={"primary"} classes={"float-end"} label={"Search Cabs"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HotelsSearch;