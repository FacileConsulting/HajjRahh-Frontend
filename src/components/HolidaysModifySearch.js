import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DatePicker } from 'rsuite';
import isBefore from 'date-fns/isBefore';
import SearchInput from './SearchInput';
import NewSelect from './NewSelect';
import Traveller from './Traveller';
import Button from './Button';
import { updateFunc, dateFunc, dateResetFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'react-toastify/dist/ReactToastify.css';

const HolidaysModifySearch = ({ id, loading, holidaysCallback }) => {
  const dispatch = useDispatch();
  const { departure, destination, holidayDepartureDate: dpDate, flightType, travelClass } = useSelector(state => state.home);

  console.log('ERERERER', departure, destination, dpDate, flightType);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [departureDay, setDepartureDay] = useState('Day of Week');
  const [returnDay, setReturnDay] = useState('Day of Week'); 
  const [allowedDates, setAllowedDates] = useState([]); 

  const dateStyles = {
    border: '1px solid #79747E',
    height: '47px',
    fontSize: '16px',
    lineHeight: '50px',
    borderRadius: '6px'
  };

  const destinationOptions = [    
    {
      value: 'AUH',
      label: 'Abu Dhabi',
      lowerOne: 'Zayed International Airport',
      lowerTwo: '| UAE'
    },   
    {
      value: 'DXB',
      label: 'Dubai',
      lowerOne: 'Dubai International Airport',
      lowerTwo: '| UAE'
    },   
    {
      value: 'SYD',
      label: 'Sydney',
      lowerOne: 'Sydney Airport',
      lowerTwo: '| Australia'
    }, 
    {
      value: 'LGA',
      label: 'New York',
      lowerOne: 'LaGuardia Airport',
      lowerTwo: '| USA'
    },
    {
      value: 'LON',
      label: 'London',
      lowerOne: 'London City Airport',
      lowerTwo: '| England'
    }
  ]

  const departureOptions = [
    {
      value: 'BLR',
      label: 'Bengaluru',
      lowerOne: 'Kempegowda International Airport',
      lowerTwo: '| India'
    },
    {
      value: 'BOM',
      label: 'Mumbai',
      lowerOne: 'Chhatrapati Shivaji Maharaj International Airport',
      lowerTwo: '| India'
    },
    {
      value: 'CCU',
      label: 'Kolkata',
      lowerOne: 'Netaji Subhas Chandra Bose International Airport',
      lowerTwo: '| India'
    },
    {
      value: 'MAA',
      label: 'Chennai',
      lowerOne: 'Chennai International Airport',
      lowerTwo: '| India'
    },
    {
      value: 'DEL',
      label: 'Delhi',
      lowerOne: 'Indira Gandhi International Airport',
      lowerTwo: '| India'
    },
    {
      value: 'DEL',
      label: 'New Delhi',
      lowerOne: 'Indira Gandhi International Airport',
      lowerTwo: '| India'
    },
    {
      value: 'DEL',
      label: 'Delhi Dil',
      lowerOne: 'Indira Gandhi International Airport',
      lowerTwo: '| India'
    }
  ]

  const handleSearchFlightsClick = () => {
    holidaysCallback('search');
  }  


  const handleDepartureDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'holidayDepartureDate', value: '' }));
      setDepartureDay('Day of Week');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'holidayDepartureDate', value: date }));
      setDepartureDay(daysOfWeek[value.getDay()]);
    }    
  }

  const handleReturnDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'holidayReturnDate', value: '' }));
      setReturnDay('Day of Week');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'holidayReturnDate', value: date }));
      setReturnDay(daysOfWeek[value.getDay()]);
    }    
  }

  const convertDateFormat = (dateString) => {
    // Split the date string into day, month, and year
    const [day, month, year] = dateString.split('-').map(Number);
  
    // Create a Date object
    const date = new Date(year, month - 1, day);
  
    // Subtract one day
    date.setDate(date.getDate() - 1);
  
    // Format the previous date back to 'YYYY-MM-DD'
    const prevDay = String(date.getDate()).padStart(2, '0');
    const prevMonth = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const prevYear = date.getFullYear();
  
    return `${prevYear}-${prevMonth}-${prevDay}`;
  }

  const shouldDisableDate = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format the date as 'YYYY-MM-DD'
    return !allowedDates.includes(formattedDate); // Disable if not in the allowedDates array
  };

  useEffect(() => {
    let isMounted = true; // Flag to prevent updates if the component unmounts
  
    const fetchDates = async () => {
      try {
        let response = await handleAPIData('POST', '/api/vendors', { type: 'PACKAGE_MANAGEMENT_FETCH_ALL' });
        if (isMounted) {
          let dates = [];
          if (response.status === 'success' && response.data.data.length > 0) {
            for (let i = 0; i < response.data.data.length; i++) {
              for (let j = 0; j < response.data.data[i].dateRange.length; j++) {
                let dater = convertDateFormat(response.data.data[i].dateRange[j]);
                dates.push(dater);
              }
            }
          }
          setAllowedDates(dates); // Update state only if still mounted
        }
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };
  
    fetchDates();
  
    return () => {
      isMounted = false; 
    };
  }, []); 
  

  return (
    <div id={id} className="container-lg section-block-hero">
      <div className="row">
        <div className="col-lg-12 col-md-12 text-center">
          <h1 className="mb-2 hero-title">Embark on a Sacred Journey with Us</h1>
          <p className="hero-text mb-4">Your Trusted Companion for a Hassle-Free Hajj and Umrah Experience</p>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="booking-form">
            <div className="hero-form-title">Book Holiday</div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <SearchInput
                    id={"departure-search-input"}
                    keyName={"departure"}
                    placeholder={"Travelling from"}
                    lowerOne={"XXX"}
                    middle={"Departure"}
                    lowerTwo={"City Name"}
                    options={departureOptions}
                    isFlight={true}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <SearchInput
                    id={"destination-search-input"}
                    keyName={"destination"}
                    placeholder={"Travelling to"}
                    lowerOne={"XXX"}
                    middle={"Destination"}
                    lowerTwo={"City Name"}
                    options={destinationOptions}
                    isFlight={true}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3 departure-date-home-page">
                  <a href="#!" className="form-selection">
                    <label htmlFor="depature" className="form-label">Depature Date</label>
                    <div className="input-group">
                      <DatePicker oneTap shouldDisableDate={shouldDisableDate} id="holiday-search-departure-date-datepicker" size="lg" style={dateStyles} onChange={handleDepartureDate} placeholder="Select Date" format="dd-MM-yyyy" />
                    </div>
                    <div className="helper-text">{departureDay}</div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="mb-3 departure-date-home-page">
                  <a href="#!" className="form-selection">
                    <label htmlFor="return" className="form-label">Return Date</label>
                    <div className="input-group">
                      <DatePicker oneTap id="holiday-search-return-date-datepicker" size="lg" style={dateStyles} onChange={handleReturnDate} shouldDisableDate={date => isBefore(date, new Date())} placeholder="Select Date" format="dd-MM-yyyy" />
                    </div>
                    <div className="helper-text">{returnDay}</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button id={"search-flights-home-page-btn"} loading={loading} handleBtnClick={handleSearchFlightsClick} btnType={"primary"} classes={"float-end"} label={"Search Holidays"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HolidaysModifySearch;





