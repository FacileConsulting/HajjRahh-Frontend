import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetHomeFunc } from '../reducers/homeSlice';
import HolidaysModifySearch from '../components/HolidaysModifySearch';
import { toastOptions } from '../toastify'; 
import { handleAPIData } from '../hooks/useCustomApi';
import HolidaysFilter from '../components/HolidaysFilter';
import NoDataAvailable from '../components/NoDataAvailable';
import HolidayContainer from '../components/HolidayContainer';
import Select from '../components/Select';
import store from '../store'
import 'react-toastify/dist/ReactToastify.css';

const Holidays = ({ id }) => { 
  localStorage.setItem('current_route', '/holidays');

  const sortOptions = [
    {
      value: '',
      label: 'Select'
    },
    {
      value: 'bydate',
      label: 'By Date'
    },
    {
      value: 'byprice',
      label: 'By Price'
    },
    // {
    //   value: 'bycost',
    //   label: 'By cost'
    // }
  ]

  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const { trip3, trip4, trip7, trip11, trip16, star5, star4, star3, transBus, transLandOnly, transFlight, transCruise, transOptional, themeAdventure, themeAffordable, themeArtCulture, themeBeach, themeBestSeller, priceLt1000, priceGt1000, priceGt2000, priceGt4000, priceGt8000 } = useSelector(state => state.myAccount);
  const [holidaysData, setHolidaysData] = useState(state?.data || null);
  const [loading, setLoading] = useState(false);
  const [toCallback, setToCallback] = useState(false);
  const [panelClass, setPanelClass] = useState('filter-list');
  dispatch(resetHomeFunc());
  const { departure, destination, holidaySort, date } = useSelector(state => state.home);

  const capitalizeWords = (str) => { 
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  const preparePayload = () => {
    return {
      departure: capitalizeWords(departure),
      destination: capitalizeWords(destination),
      startDate: date.startDate,
      endDate: date.endDate
    }
  }

  const handleHolidaySearchFilter = async (type) => {
    setPanelClass('filter-list');
    if (loading) {
      return;
    }
    console.log('tripsers', trip3, trip4, trip7);
     
    
    if (type === 'filter' && !trip3 && !trip4 && !trip7 && !trip11 && !trip16 && !star5 && !star4 && !star3 && !transBus && !transLandOnly && !transFlight && !transCruise && !transOptional && !themeAdventure && !themeAffordable && !themeArtCulture && !themeBeach && !themeBestSeller && !priceLt1000 && !priceGt1000 && !priceGt2000 && !priceGt4000 && !priceGt8000) {
      toast.info('Please select atleast one filter', toastOptions);
      return;
    }
    if (type === 'filter' && (holidaysData === null || holidaysData.length === 0)) {
      setToCallback(!toCallback);
      toast.info('Please select atleast one search field', toastOptions);
      return;
    }
    
    let payload = {
      ...preparePayload(),
      trip3, trip4, trip7, trip11, trip16, star5, star4, star3, transBus, transLandOnly, transFlight, transCruise, transOptional, themeAdventure, themeAffordable, themeArtCulture, themeBeach, themeBestSeller, priceLt1000, priceGt1000, priceGt2000, priceGt4000, priceGt8000
    }

    if (type === 'search') {
      payload = {
        ...preparePayload()
      }
      setToCallback(!toCallback);
      if (!departure && !destination && !date.startDate && !date.endDate) {
        toast.info('Please select atleast one field', toastOptions);
        return;
      }
    }
    
    
    console.log('sfsdfdfdf', departure, destination, date.startDate, date.endDate, trip3, trip4, trip7, trip11, trip16, star5, star4, star3, transBus, transLandOnly, transFlight, transCruise, transOptional, themeAdventure, themeAffordable, themeArtCulture, themeBeach, themeBestSeller, priceLt1000, priceGt1000, priceGt2000, priceGt4000, priceGt8000);
    setLoading(true);
    let response = await handleAPIData('POST', '/api/searchHolidays', payload);
    if (response.status === 'success' && response.data.data.length > 0) {
      console.log('response', response.data.data);
      if (holidaySort) { 
        holidaySortBy(holidaySort, response.data.data);
      } else {
        setHolidaysData(response.data.data);
      }
    } else if (response.status === 'success' && response.data.data.length === 0) {
      toast.warning('Search Holidays Not Found.', toastOptions);
      setHolidaysData([]);
      console.log('responsezero', response.data.data);
    } else {
      toast.error('Something went wrong. Please try again.', toastOptions);
    }
    setLoading(false);
  }

  const handlePanelCallbackParent = () => {
    setPanelClass(panelClass === 'filter-list' ? 'filter-show' : 'filter-list');
  }

  const holidaySortBy = (type, holidaysData) => {
    if (type === 'byprice') {
      let sortedHolidaysData = holidaysData.sort((a, b) => new Date(a.price) - new Date(b.price));
      console.log('dsf', sortedHolidaysData);
      setHolidaysData([...sortedHolidaysData]);
    } else if (type === 'bydate') {
      const sortedDates = holidaysData.sort((a, b) => {
        const dateA = new Date(a.dateRange[0].split('-').reverse().join('-'));
        const dateB = new Date(b.dateRange[0].split('-').reverse().join('-'));
        return dateA - dateB;
      });
      console.log('bydate', sortedDates);
      setHolidaysData([...sortedDates]);
    }
  }

  useEffect(() => {
    console.log("Data updated: ", holidaySort);
    if (holidaysData && holidaysData.length > 0) {
      holidaySortBy(holidaySort, holidaysData);
    }    
  }, [holidaySort]); 

  return (
    <>
      <HolidaysModifySearch id={"holidays-modify-search"} loading={loading} holidaysCallback={handleHolidaySearchFilter} />
      <HolidaysFilter id={"holidays-filter"} loading={loading} toCallback={toCallback} panelClass={panelClass} holidaysCallback={handleHolidaySearchFilter} handlePanelCallback={handlePanelCallbackParent} />      
      <div className="container-xxl py-5 section-block">
        <div className="row mb-4 mt-4">
          <div className="col-auto me-auto">
            <h3>Upcoming Trips</h3>
          </div>
          <div className="col-auto">
            <div className="row g-1 align-items-center">
              <div className="col-auto">
                <span>Sort by:</span>
              </div>
              <div className="col-auto">
                <Select id={"holidays-sort"} options={sortOptions} classes={"form-sort"} />
              </div>
            </div>
          </div>
        </div>
        {
          Array.isArray(holidaysData) && holidaysData.length > 0 &&
            (
              <>
                {
                  Array.isArray(holidaysData) && holidaysData.length > 0 && holidaysData.map((holiday, index) => {
                    return (<HolidayContainer id={`holiday-${index}`} holidayData={holiday} />)
                  })
                }
              </>
            ) 
        }
        {
          Array.isArray(holidaysData) && holidaysData.length === 0 &&
          <NoDataAvailable text={"No Data Available. Please modify your search"} />
        }
        {
          holidaysData === null &&
          <NoDataAvailable text={"Please perform holiday search and avail latest packages"} />
        }
      </div>
    </>
  )
};

export default Holidays;
