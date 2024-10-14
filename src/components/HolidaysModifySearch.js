import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DatePicker } from 'rsuite';
import Select from '../components/Select';
import Button from './Button';
import { updateFunc, dateFunc, dateResetFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'react-toastify/dist/ReactToastify.css';

const HolidaysModifySearch = ({ id, loading, holidaysCallback }) => {
  const dispatch = useDispatch();
  const { departure, destination, holidayDepartureDate: dpDate, flightType } = useSelector(state => state.home);
  
  console.log('ERERERER', departure, destination, dpDate, flightType);

  const [holidayDepartureDate, setHolidayDepartureDate] = useState(dpDate || null);
  const [holidayReturnDate, setHolidayReturnDate] = useState(null);

  const dateStyles = {
    border: '1px solid #79747E', 
    height: '47px', 
    fontSize:'16px', 
    lineHeight: '50px',
    borderRadius: '6px'
  };
  
  const handleHolidayDepartureDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'holidayDepartureDate', value: '' }));
      setHolidayDepartureDate(null);
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'holidayDepartureDate', value: date }));
      setHolidayDepartureDate(value);
    }    
  }

  const handleHolidayReturnDate = (value) => {
    if (value == null) {
      dispatch(updateFunc({ keyName: 'holidayReturnDate', value: '' }));
      setHolidayReturnDate(null);
    } else {
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
      dispatch(updateFunc({ keyName: 'holidayReturnDate', value: date }));
      setHolidayReturnDate(value);
    } 
  }

  const destinationOptions = [
    {
      value: '',
      label: 'Where to'
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

  const sacredTypeOptions = [
    {
      value: '',
      label: 'Sacred Type'
    },
    {
      value: 'hajj',
      label: 'Hajj'
    },
    {
      value: 'umrah',
      label: 'Umrah'
    }
  ];   

  const flightOptions = [
    {
      value: 'direct',
      label: 'Direct'
    },
    {
      value: 'stopOver',
      label: 'Stop Over'
    }
  ];

  const flightClassOptions = [
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
    }
  ];

  const foodOptions = [
    {
      value: '',
      label: 'Food'
    },
    {
      value: 'veg',
      label: 'Veg'
    },
    {
      value: 'nonVeg',
      label: 'Non Veg'
    }
  ];

  const departureOptions = [
    {
      value: '',
      label: 'Travelling From'
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
    }
  ];

  const handleModifySearchClick = () => {
    holidaysCallback('search');
  }

  return (
    <div id={id} className="section-listing">
      <div className="container-xxl">
        <div className="row offset-1 mb-16">
          <div className="col-md-2">
            <Select id={"holidays-modify-search-departure-select"} keyName={"departure"} eventType={1} options={departureOptions} value={departure} />
          </div>
          <div className="col-md-2">
            <Select id={"holidays-modify-search-destination-select"} keyName={"destination"} eventType={1} options={destinationOptions} value={destination} />
          </div>
          <div className="col-md-2">
            <div className="input-group">
              <DatePicker oneTap id="holidays-modify-search-departure-datepicker" size="lg" style={dateStyles} placeholder="Departure Date" onChange={handleHolidayDepartureDate} format="dd-MM-yyyy" value={holidayDepartureDate} />
            </div>
          </div>
          <div className="col-md-2">
            <div className="input-group">
              <DatePicker oneTap id="holidays-modify-search-return-datepicker" size="lg" style={dateStyles} placeholder="Return Date" onChange={handleHolidayReturnDate} format="dd-MM-yyyy" value={holidayReturnDate} />
            </div>
          </div>
        </div>
        <div className="row offset-1">
          <div className="col-md-2">
            <Select id={"holidays-modify-search-sacred-type-select"} keyName={"sacredType"} eventType={1} options={sacredTypeOptions} />
          </div>
          <div className="col-md-2">
            <Select id={"holidays-modify-search-holiday-select"} keyName={"flightType"} eventType={1} options={flightOptions} />
          </div>
          <div className="col-md-2">
            <Select id={"holidays-modify-search-holiday-class-select"} keyName={"flightClass"} eventType={1} options={flightClassOptions} />
          </div>
          <div className="col-md-2">
            <Select id={"holidays-modify-search-food-select"} keyName={"foodType"} eventType={1} options={foodOptions} />
          </div>
          <div className="col">
            <Button id={"holiday-modify-search-btn"} loading={loading} handleBtnClick={handleModifySearchClick} btnType={"primary"} label={"Modify search"} />
           </div>
        </div>
      </div>
    </div>
  )
};

export default HolidaysModifySearch;





