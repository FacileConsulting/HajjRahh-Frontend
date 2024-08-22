import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DateRangePicker } from 'rsuite';
import Select from '../components/Select';
import { handleAPIData } from '../hooks/useCustomApi';
import { toastOptions } from '../toastify';
import 'rsuite/DateRangePicker/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

const HolidaysModifySearch = ({ id, holidaysCallback }) => {
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
  const [loading, setLoading] = useState(false);
  
  const capitalizeWords = (str) => { 
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  const handleOK = (value) => { 
    const startDate = `${value[0].getDate()}-${value[0].getMonth()+1}-${value[0].getFullYear()}`; 
    const endDate = `${value[1].getDate()}-${value[1].getMonth()+1}-${value[1].getFullYear()}`;
    setDateRange({ startDate, endDate });
    // console.log('dateRange', startDate, endDate, value[0].getDate() );
  }

  const handleCross = (value) => {  
    setDateRange({ startDate: '', endDate: '' });
  }

  const handleModifySearch = async () => {
    if (loading) {
      return;
    }
    if (!departure && !destination && !dateRange.startDate && !dateRange.endDate) {
      toast.info('Please select atleast one field', toastOptions);
      return;
    }
    const payload = {
      departure: capitalizeWords(departure),
      destination: capitalizeWords(destination),
      startDate: dateRange.startDate,
      endDate: dateRange.endDate
    }
    console.log('sfsdfdfdf', departure, destination, dateRange.startDate, dateRange.endDate);
    setLoading(true);
    let response = await handleAPIData('POST', '/api/searchHolidays', payload);
    if (response.status === 'success' && response.data.data.length > 0) {
      console.log('response', response.data.data);
      holidaysCallback(response.data.data);
    } else if (response.status === 'success' && response.data.data.length === 0) {
      toast.warning('Search Holidays Not Found.', toastOptions);
      holidaysCallback([]);
      console.log('responsezero', response.data.data);
    } else {
      toast.error('Something went wrong. Please try again.', toastOptions);
    }
    setLoading(false);
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
            <button type="button" className={`btn btn-primary ${loading ? "disable" : ""}`} onClick={handleModifySearch}>
              <span className="for-loading-margin">Modify search</span>
              {loading && <span className="spinner-border spinner-border-sm" role="status"></span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HolidaysModifySearch;





