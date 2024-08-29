import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DateRangePicker } from 'rsuite';
import Select from '../components/Select';
import Button from './Button';
import { dateFunc, dateResetFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'rsuite/DateRangePicker/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

const HolidaysModifySearch = ({ id, loading, holidaysCallback }) => {
  const dispatch = useDispatch();
  const { departure, destination } = useSelector(state => state.home);

  const dateStyles = {
    border: '1px solid #79747E', 
    height: '47px', 
    fontSize:'16px', 
    lineHeight: '50px',
    borderRadius: '6px'
  };  

  const destinationOptions = [
    {
      value: '',
      label: 'Where to'
    },
    {
      value: 'mecca',
      label: 'Mecca'
    },
    {
      value: 'mount-arafat',
      label: 'Mount Arafat'
    },
    {
      value: 'kaaba',
      label: 'Kaaba'
    },
    {
      value: 'jabal-al-nour',
      label: 'Jabal Al Nour'
    },
  ];

  const departureOptions = [
    {
      value: '',
      label: 'Travelling From'
    },
    {
      value: 'delhi',
      label: 'Delhi'
    },
    {
      value: 'mumbai',
      label: 'Mumbai'
    },
    {
      value: 'kolkata',
      label: 'Kolkata'
    },
    {
      value: 'chennai',
      label: 'Chennai'
    },
  ];
  
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: ''});
  
  const capitalizeWords = (str) => { 
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  const handleOK = (value) => { 
    const startDate = `${value[0].getDate()}-${value[0].getMonth()+1}-${value[0].getFullYear()}`; 
    const endDate = `${value[1].getDate()}-${value[1].getMonth()+1}-${value[1].getFullYear()}`;
    dispatch(dateFunc({ startDate, endDate }));
    setDateRange({ startDate, endDate });
    // console.log('dateRange', startDate, endDate, value[0].getDate() );
  }

  const handleCross = () => { 
    dispatch(dateResetFunc({ startDate: '', endDate: '' })); 
    setDateRange({ startDate: '', endDate: '' });
  }

  const handleModifySearchClick = () => {
    holidaysCallback('search', dateRange);
  }

  return (
    <div id={id} className="section-listing">
      <div className="container-xxl">
        <div className="row">
          <div className="col offset-1">
            <Select id={"holidays-modify-search-departure-select"} options={departureOptions} />
          </div>
          <div className="col">
            <Select id={"holidays-modify-search-destination-select"} options={destinationOptions} />
          </div>
          <div className="col">
            <div className="input-group">
              <DateRangePicker id="holidays-modify-search-datepicker" size="lg" style={dateStyles} placeholder="Travelling dates" onChange={handleCross} onOk={handleOK} format="dd-MM-yyyy" />
            </div>
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





