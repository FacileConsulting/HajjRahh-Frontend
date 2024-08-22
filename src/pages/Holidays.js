import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetHomeReducer } from '../reducers/homeSlice';
import HolidaysModifySearch from '../components/HolidaysModifySearch'; 
import NoDataAvailable from '../components/NoDataAvailable';
import HolidayContainer from '../components/HolidayContainer';

const Holidays = ({ id }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const [checker, setChecker] = useState({
    "trip3": false,  
    "trip4": false, 
    "trip7": false, 
    "trip11": false, 
    "trip16": false,
  });
  const [holidaysData, setHolidaysData] = useState(state?.data || null);
  const [panelClass, setPanelClass] = useState('filter-list');
  dispatch(resetHomeReducer());

  const holidaysCallback = (data) => {
    console.log('RRRRRRRRRRRRRRRRRRRR', data);
    setHolidaysData(data);
  } 

  const handlePanel = () => {
    setPanelClass(panelClass === 'filter-list' ? 'filter-show' : 'filter-list');
  }

  const handleCheckboxClick = (key) => {
    // setChecker({ ...checker, [key]: !checker[key] }, () => console.log('checkedchecked', checker));
  }

  return (
    <>
      <HolidaysModifySearch id={"holidays-modify-search"} holidaysCallback={holidaysCallback} />
      <div className="section-listing-filter">
        <div className="container-xxl">
          <div className="row">
            <div className="col">
              <ul className="d-flex flex-row listing-filters justify-content-center list-unstyled">
                <li className="filter-type-first text-end">
                  <a href="#!" onClick={handlePanel}><i className="bi bi-funnel-fill"></i></a>
                </li>
                <li className="filter-type">
                  <a href="#!" onClick={handlePanel}>Trip duration <i className="bi bi-chevron-down"></i></a>
                  <div className={panelClass}>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="holiday-trip-3" onClick={handleCheckboxClick('trip3')} />
                        <label className="form-check-label" htmlFor="holiday-trip-3">
                          Up to 3 nights
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="holiday-trip-4" onClick={handleCheckboxClick('trip4')} />
                        <label className="form-check-label" htmlFor="holiday-trip-4">
                          4 - 6 Nights
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="holiday-trip-7" onClick={handleCheckboxClick('trip7')} />
                        <label className="form-check-label" htmlFor="holiday-trip-7">
                          7 - 10 Nights
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="holiday-trip-11" onClick={handleCheckboxClick('trip11')} />
                        <label className="form-check-label" htmlFor="holiday-trip-11">
                          11 - 15 Nights
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="holiday-trip-16" onClick={handleCheckboxClick('trip16')} />
                        <label className="form-check-label" htmlFor="holiday-trip-16">
                          Above 16 Nights
                        </label>
                      </div>
                    </a>

                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!" onClick={handlePanel}>Hotel star <i className="bi bi-chevron-down"></i></a>
                  <div className={panelClass}>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          5 star
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          4 star
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Upto 3 star
                        </label>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!" onClick={handlePanel}>Transportation <i className="bi bi-chevron-down"></i></a>
                  <div className={panelClass}>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Bus
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Landonly
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Flight
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Cruise
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Optional
                        </label>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!" onClick={handlePanel}>Theme <i className="bi bi-chevron-down"></i></a>
                  <div className={panelClass}>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Adventure
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Affordable
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Art & Culture
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Beach
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Best seller
                        </label>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="filter-type">
                  <a href="#!" onClick={handlePanel}>Price <i className="bi bi-chevron-down"></i></a>
                  <div className={panelClass}>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Up To $1,000
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          $1,000 to $2,000
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          $2,000 to $4,000
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          $4,000 to $8,000
                        </label>
                      </div>
                    </a>
                    <a href="#!">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          $8,000 and above
                        </label>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <div className={`text-center mt-3 ${panelClass}`} onClick={handlePanel}>
                <button type="button" className="btn btn-secondary btn-sm holiday-cancel-btn">Cancel</button>
                <button type="button" className="btn btn-primary btn-sm">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
