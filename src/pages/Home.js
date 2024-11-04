import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DatePicker } from 'rsuite';
import { resetHomeFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { updateFunc } from '../reducers/homeSlice';
import Select from '../components/Select';
import SearchInput from '../components/SearchInput';
import DefaultBody from '../components/DefaultBody';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Traveller from '../components/Traveller';
const Home = ({ id, options }) => {
  localStorage.setItem('current_route', '/');
  const dispatch = useDispatch();
  const history = useHistory();
  const { adults, children, infants, travelClass, flyingFrom, flyingTo, flightDepartureDate, flightReturnDate } = useSelector(state => state.home);
  

  const dateStyles = {
    border: '1px solid #79747E',
    height: '56px',
    fontSize: '16px',
    lineHeight: '38px',
    borderRadius: '6px'
  }

  const destinationOptions = [    
    {
      value: 'AUH',
      label: 'Abu Dhabi',
      airport: 'Zayed International Airport',
      country: 'UAE'
    },   
    {
      value: 'DXB',
      label: 'Dubai',
      airport: 'Dubai International Airport',
      country: 'UAE'
    },   
    {
      value: 'SYD',
      label: 'Sydney',
      airport: 'Sydney Airport',
      country: 'Australia'
    }, 
    {
      value: 'LGA',
      label: 'New York',
      airport: 'LaGuardia Airport',
      country: 'USA'
    },
    {
      value: 'LON',
      label: 'London',
      airport: 'London City Airport',
      country: 'England'
    }
  ]

  const departureOptions = [
    {
      value: 'BLR',
      label: 'Bengaluru',
      airport: 'Kempegowda International Airport',
      country: 'India'
    },
    {
      value: 'BOM',
      label: 'Mumbai',
      airport: 'Chhatrapati Shivaji Maharaj International Airport',
      country: 'India'
    },
    {
      value: 'CCU',
      label: 'Kolkata',
      airport: 'Netaji Subhas Chandra Bose International Airport',
      country: 'India'
    },
    {
      value: 'MAA',
      label: 'Chennai',
      airport: 'Chennai International Airport',
      country: 'India'
    },
    {
      value: 'DEL',
      label: 'Delhi',
      airport: 'Indira Gandhi International Airport',
      country: 'India'
    },
    {
      value: 'DEL',
      label: 'New Delhi',
      airport: 'Indira Gandhi International Airport',
      country: 'India'
    },
    {
      value: 'DEL',
      label: 'Delhi Dil',
      airport: 'Indira Gandhi International Airport',
      country: 'India'
    }
  ]

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [departureDate, setDepartureDate] = useState(null);
  const [departureDay, setDepartureDay] = useState('');
  const [returnDate, setReturnDate] = useState(null);
  const [returnDay, setReturnDay] = useState('');
  const [loading, setLoading] = useState(false);

  

  const handleDepartureDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'flightDepartureDate', value: '' }));
      setDepartureDate(null);
      setDepartureDay('');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'flightDepartureDate', value: date }));
      setDepartureDate(value);
      setDepartureDay(daysOfWeek[value.getDay()]);
    }    
  }

  const handleReturnDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'flightReturnDate', value: '' }));
      setReturnDate(null);
      setReturnDay('');
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'flightReturnDate', value: date }));
      setReturnDate(value);
      setReturnDay(daysOfWeek[value.getDay()]);
    }    
  }

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  const handleSearchHolidays = () => {

  }

  //   const convertDate = (dateStr) => {
  //     if (!dateStr) {
  //       return ''
  //     }
  //     const [day, month, year] = dateStr.split('-');
  //     const date = new Date(year, month - 1, day);
  //     const formattedYear = date.getFullYear();
  //     const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
  //     const formattedDay = String(date.getDate()).padStart(2, '0');
  //     return `${formattedYear}-${formattedMonth}-${formattedDay}`;
  //   }

  //   const payload = {
  //     departure: departure,
  //     destination: destination,
  //     startDate: departureDate,
  //     endDate: returnDate,
  //     noOfPeople
  //   };

  //   const flightPayload = {
  //     flyingFrom: departure,
  //     flyingTo: destination,
  //     flightDepartureDate: convertDate(departureDate),
  //     flightReturnDate: convertDate(returnDate)
  //   };

  //   console.log('sfsdfdfdf', flightPayload, departure, destination, noOfPeople);
  //   setLoading(true);
  //   let response = await handleAPIData('POST', '/api/searchHolidays', payload);
  //   let resFlights = await handleAPIData('POST', '/api/searchFlights', flightPayload);
  //   console.log('#resHolidaysresHolidayresHolidayss', resFlights);
  //   if (response.status === 'success' && response.data.data.length > 0) {
  //     history.push({
  //       pathname: '/holidays',
  //       state: { from: 'Search Holidays button', data: { holidaysData: response.data.data, flightsData: resFlights?.data?.data || { data: [], dictionaries: {}, meta: {} } } }
  //       // state: { from: 'Search Holidays button', data: response.data.data }
  //     });
  //     console.log('response', response.data.data);
  //   } else if (response.status === 'success' && response.data.data.length === 0) {
  //     toast.warning('Search Holidays Not Found.', toastOptions);
  //     console.log('responsezero', response.data);
  //   } else {
  //     toast.error('Something went wrong. Please try again.', toastOptions);
  //   }
  //   setLoading(false);
  // }

  return (
    <>
      <div className="container section-block-hero">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center">
            <h1 className="mb-2 hero-title">Embark on a Sacred Journey with Us</h1>
            <p className="hero-text mb-4">Your Trusted Companion for a Hassle-Free Hajj and Umrah Experience</p>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="booking-form">
              <div className="hero-form-title">Book for Hajj and Umrah</div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <SearchInput
                      id={"departure-search-input"}
                      keyName={"flyingFrom"}
                      placeholder={"Travelling from"}
                      lowerOne={"DEL"}
                      middle={"New Delhi"}
                      lowerTwo={"Indira Gandhi International Airport"}
                      options={departureOptions}
                    /> 
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <SearchInput
                      id={"destination-search-input"}
                      keyName={"flyingTo"}
                      placeholder={"Travelling to"}
                      lowerOne={"AUH"}
                      middle={"Abu Dhabi"}
                      lowerTwo={"Zayed International Airport"}
                      options={destinationOptions}
                    /> 
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3 departure-date-home-page">
                    <a href="#!" className="form-selection">
                      <label htmlFor="depature" className="form-label">Depature Date</label>
                      <div className="input-group">
                        <DatePicker oneTap id="flights-search-home-departure-date-datepicker" size="lg" style={dateStyles} onChange={handleDepartureDate} format="dd-MM-yyyy" />
                        {/* <DateRangePicker size="lg" style={dateStyles} placeholder="Travelling dates" onChange={handleCross} onOk={handleOK} format="dd-MM-yyyy" /> */}
                        {/* <input type="text" className="form-control header-form" placeholder="23-Oct-2024" aria-label="Travelling dates" aria-describedby="depature" /> */}
                        {/* <span className="input-group-text header-form-addon" id="depature"><i className="bi bi-calendar-event"></i></span> */}
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
                        <DatePicker oneTap id="flights-search-home-return-date-datepicker" size="lg" style={dateStyles} onChange={handleReturnDate} format="dd-MM-yyyy" />
                        {/* <input type="text" className="form-control header-form" placeholder="26-Oct-2024" aria-label="Travelling dates" aria-describedby="return" /> */}
                        {/* <span className="input-group-text header-form-addon" id="return"><i className="bi bi-calendar-event"></i></span> */}
                      </div>
                      <div className="helper-text">{returnDay}</div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <Traveller
                      id={"flight-traveller"}
                      keyName={"travelClass"}
                      placeholder={"Travelers & Class"}
                      defaultTravellers={"1"}
                      defaultFlightClass={"Economy"}
                      defaultValue={travelClass}
                    /> 
                    {/* <div className="dropdown">
                      <a className="form-selection" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <label for="travelers" className="form-label">Travelers & Class</label>
                        <div className="header-form">2 Travellers</div>
                        <div className="helper-text">Economy</div>
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
                        <li className="mb-2"><h5>Select Class</h5></li>
                        <li className="mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                              Economy
                            </label>
                          </div>
                        </li>
                        <li className="mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                              Business
                            </label>
                          </div>
                        </li>
                        <li className="mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                              First Class
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Button id={"search-flights-home-page-btn"} loading={loading} handleBtnClick={handleSearchHolidays} btnType={"primary"} classes={"float-end"} label={"Search Flights"} />
                  {/* <button type="button" className="btn btn-primary float-end">Search Flights</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DefaultBody id={"home-page-default-body"} />
    </>
  )
};

export default Home;
