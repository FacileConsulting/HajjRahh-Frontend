import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetHomeReducer } from '../reducers/homeSlice';
import HolidaysModifySearch from '../components/HolidaysModifySearch'; 
import HolidaysFilter from '../components/HolidaysFilter';
import NoDataAvailable from '../components/NoDataAvailable';
import HolidayContainer from '../components/HolidayContainer';

const Holidays = ({ id }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const [holidaysData, setHolidaysData] = useState(state?.data || null);
  dispatch(resetHomeReducer());

  const holidaysCallback = (data) => {
    console.log('RRRRRRRRRRRRRRRRRRRR', data);
    setHolidaysData(data);
  } 

  return (
    <>
      <HolidaysModifySearch id={"holidays-modify-search"} holidaysCallback={holidaysCallback} />
      <HolidaysFilter id={"holidays-filter"} />      
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
                <select className="form-select form-sort" aria-label="Large select example">
                  <option selected="">Select</option>
                  <option value="1">By date</option>
                  <option value="2">By price</option>
                  <option value="3">By cost</option>
                </select>
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
