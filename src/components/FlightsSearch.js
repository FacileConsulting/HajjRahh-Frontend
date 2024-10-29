import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DatePicker } from 'rsuite';
import Select from './Select';
import Counter from './Counter';
import Button from './Button';
import { updateFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlightsSearch = ({ id, loading, flightsCallback }) => {
  const dispatch = useDispatch();
  const { departure, destination } = useSelector(state => state.home);

  const dateStyles = {
    border: '1px solid #79747E',
    height: '47px',
    fontSize: '16px',
    lineHeight: '50px',
    borderRadius: '6px'
  };

  const travelClassOptions = [
    {
      value: 'ECONOMY',
      label: 'Economy'
    },
    {
      value: 'PREMIUM_ECONOMY',
      label: 'Economy Premium'
    },
    {
      value: 'BUSINESS',
      label: 'Business'
    },
    {
      value: 'FIRST',
      label: 'First Class'
    },
  ];  

  const flyingFromOptions = [
    {
      value: '',
      label: 'Flying From'
    },
    {
      value: 'BLR',
      label: 'Bengaluru'
    },
    {
      value: 'BOM',
      label: 'Mumbai'
    },
    {
      value: 'CCU',
      label: 'Kolkata'
    },
    {
      value: 'MAA',
      label: 'Chennai'
    },
    {
      value: 'DEL',
      label: 'Delhi'
    },
  ];
  
  const flyingToOptions = [
    {
      value: '',
      label: 'Flying To'
    },
    {
      value: 'AUH',
      label: 'Abu Dhabi'
    },
    {
      value: 'DXB',
      label: 'Dubai'
    },
    {
      value: 'SYD',
      label: 'Sydney'
    },
    {
      value: 'LGA',
      label: 'New York'
    },
    {
      value: 'LON',
      label: 'London'
    }
  ];

  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  const [roundTrip, setRoundTrip] = useState('active');
  const [oneWay, setOneWay] = useState('');
  const [flightDepartureDate, setFlightDepartureDate] = useState('');
  const [flightReturnDate, setFlightReturnDate] = useState('');

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  const handleFlightDepartureDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'flightDepartureDate', value: '' }));
      setFlightDepartureDate(null);
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'flightDepartureDate', value: date }));
      setFlightDepartureDate(value);
    }    
  }

  const handleFlightReturnDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'flightReturnDate', value: '' }));
      setFlightReturnDate(null);
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'flightReturnDate', value: date }));
      setFlightReturnDate(value);
    } 
  }

  const handleSearchClick = () => {
    flightsCallback('search');
  }



  const handleRoundTripClick = () => {
    setRoundTrip('active');
    setOneWay('');
    dispatch(updateFunc({ keyName: 'roundOneWay', value: 'roundTrip' }));
  }

  const handleOneWayClick = () => {
    setRoundTrip('');
    setOneWay('active');
    setFlightReturnDate(null);
    dispatch(updateFunc({ keyName: 'roundOneWay', value: 'oneWay' }));
    dispatch(updateFunc({ keyName: 'flightReturnDate', value: '' }));
  }

  const renderGender = () => {
    const genderData = [
      { id: 'adults', type: 'Adults :', ages: '>= 13', defaultValue: 1 },
      { id: 'children', type: 'Children :', ages: '3-12', defaultValue: 0 },
      { id: 'infants', type: 'Infants :', ages: '<= 2', defaultValue: 0 },
    ];

    return (
      <>
        {
          genderData && genderData.length > 0 && genderData.map((obj) => {
            return (
              <li>
                <div className="row">
                  <div className="col">
                    <h4 className="mb-0">{obj.type}</h4> <p className="small-text">{obj.ages}</p>
                  </div>
                  <div className="col">
                    <a className="dropdown-item" href="#">
                      <Counter id={`flights-search-${obj.id}`} counterByOther={true} defaultValue={obj.defaultValue} keyName={obj.id} />
                    </a>
                  </div>
                </div>
              </li>
            )
          })
        }
      </>
    )
  }


  return (
    <div id={id} className="section-listing">
      <div className="container-xxl">
        <div className="row">
          <ul className="list-inline flight-selection">
            <li className="list-inline-item">
              <a href="#!" className={`trip-type ${roundTrip}`} onClick={handleRoundTripClick}>Round Trip</a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className={`trip-type ${oneWay}`} onClick={handleOneWayClick}>One Way</a>
            </li>
            <li className="list-inline-item">
              <Select id={"flights-search-travel-class-ul"} options={travelClassOptions} selectIsList={true} />
            </li>
            <li className="list-inline-item">
              <div className="dropdown">
                <a className="class-guests dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" id="dropdownMenuClickableInside" data-bs-auto-close="outside" aria-expanded="false">
                  Guests
                </a>
                <ul className="dropdown-menu dropmenu-guest" aria-labelledby="dropdownMenuClickableInside">
                  {renderGender()}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col">
            <Select id={"flights-search-flying-from"} keyName={"flyingFrom"} eventType={2} options={flyingFromOptions} />
          </div>
          <div className="col">
            <Select id={"flights-search-flying-to"} keyName={"flyingTo"} eventType={2} options={flyingToOptions} />
          </div>
          <div className="col">
            <div className="input-group">
              <DatePicker oneTap id="flights-search-departure-datepicker" size="lg" style={dateStyles} placeholder="Departure Date" onChange={handleFlightDepartureDate} format="dd-MM-yyyy" />
            </div>
          </div>
          <div className="col">
            <div className="input-group">
              <DatePicker oneTap id="flights-search-return-datepicker" size="lg" style={dateStyles} placeholder="Return Date" onChange={handleFlightReturnDate} disabled={ oneWay ? true : false } format="dd-MM-yyyy" value={flightReturnDate} />
            </div>
          </div>
          <div className="col">
            <Button id={"flights-search-btn"} loading={loading} handleBtnClick={handleSearchClick} btnType={"primary"} label={"Search"} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default FlightsSearch;





