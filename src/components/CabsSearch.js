import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DatePicker, TimePicker } from 'rsuite';
import Select from './Select';
import Button from './Button';
import { updateFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'react-toastify/dist/ReactToastify.css';

const CabsSearch = ({ id, loading, cabsCallback }) => {
  const dispatch = useDispatch();
  const { cabPickUpPlace, cabDropPlace, cabDate, cabTime } = useSelector(state => state.home);

  console.log('ERERERER', cabPickUpPlace, cabDropPlace, cabDate, cabTime );

  const [roundTrip, setRoundTrip] = useState('active');
  const [oneWay, setOneWay] = useState('');

  const dateStyles = {
    border: '1px solid #79747E',
    height: '47px',
    fontSize: '16px',
    lineHeight: '50px',
    borderRadius: '6px'
  };

  const handleCabPickUpDate = (value) => {    
    const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
    console.log('dsfsdf date', date, value.getHours(), value.getMinutes());
    if (value == null) {
      dispatch(updateFunc({ keyName: 'cabDate', value: '' }));
    } else {
      const formattedHours = value.getHours() < 10 ? `0${value.getHours()}` : `${value.getHours()}`;
      const formattedMinutes = value.getMinutes() < 10 ? `0${value.getMinutes()}` : `${value.getMinutes()}`;
      const date = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}^${formattedHours}:${formattedMinutes}`;
      dispatch(updateFunc({ keyName: 'cabDate', value: date }));
    }
  }

  const cabPlaceOptions = [
    {
      value: 'bellandur',
      label: 'Bellandur'
    },
    {
      value: 'sarjapur',
      label: 'Sarjapur'
    },
    {
      value: 'hsrlayout',
      label: 'HSR Layout'
    }
  ];

  const cabPickUpPlaceOptions = [
    {
      value: '',
      label: 'Pick Up'
    },
    ...cabPlaceOptions
  ];

  const cabDropPlaceOptions = [
    {
      value: '',
      label: 'Drop'
    },
    ...cabPlaceOptions
  ];

  const handleCabSearchClick = () => {
    cabsCallback('search');
  }

  const handleRoundTripClick = () => {
    setRoundTrip('active');
    setOneWay('');
    dispatch(updateFunc({ keyName: 'cabTripType', value: 'roundTrip' }));
  }

  const handleOneWayClick = () => {
    setRoundTrip('');
    setOneWay('active');
    dispatch(updateFunc({ keyName: 'cabTripType', value: 'oneWay' }));
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
            </ul>
          </div>
          <div className="row">
            <div className="col">
              <Select id={"cabs-search-pickup-select"} keyName={"cabPickUpPlace"} eventType={1} options={cabPickUpPlaceOptions} value={cabPickUpPlace} />
            </div>
            <div className="col">
              <Select id={"cabs-search-drop-select"} keyName={"cabDropPlace"} eventType={1} options={cabDropPlaceOptions} value={cabDropPlace} />
            </div>
            <div className="col">
              <div className="input-group date">
                <DatePicker id="cabs-search-pickup-datepicker" size="lg" style={dateStyles} placeholder="PickUp Date" onChange={handleCabPickUpDate} format="dd-MM-yyyy HH:mm" />
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                {/* <TimePicker id="cabs-search-pickup-timepicker" size="lg" style={dateStyles} placeholder="PickUp Time" onChange={handleCabPickUpTime} format="HH:mm" /> */}
              </div>
            </div>
            <div className="col">
              <Button id={"cab-search-btn"} loading={loading} handleBtnClick={handleCabSearchClick} btnType={"primary"} label={"Search"} />
            </div>
          </div>
        </div>
      </div>
  )
};

export default CabsSearch;





