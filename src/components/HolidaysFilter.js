import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkbox from './Checkbox';
import Button from './Button';
import store from '../store'


const HolidaysFilter = forwardRef((props, ref) => {
  const { id, loading, holidaysCallback, toCallback, panelClass, handlePanelCallback } = props;
  const childRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  

  const handlePanel = () => {
    handlePanelCallback();
  }

  const handleSearchClick = () => {
    holidaysCallback('filter');
  }

  const handleCancelClick = () => {
    console.log('childRefs', childRefs);
    for (let index = 0; index < childRefs.length; index++) {
      if (childRefs[index].current) {
        childRefs[index].current.resetRefCalled();        
      }
    }
  };

  useImperativeHandle(ref, () => ({
    handleCancelClick
  }));

  // Fetch data when component mounts
  useEffect(() => {
    handleCancelClick();
  }, [toCallback]); // Empty dependency array means this runs once on mount
  
  console.log('store.getState().items;', store.getState());
  return (
    <div id={id} className="section-listing-filter" >
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
                      <Checkbox ref={childRefs[0]} id={"holiday-filter-trip-3"} keyName={"trip3"} />
                      <label className="form-check-label" htmlFor="trip3For">
                        Up to 3 nights
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[1]} id={"holiday-filter-trip-4"} keyName={"trip4"} />
                      <label className="form-check-label" htmlFor="trip4For">
                        4 - 6 Nights
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[2]} id={"holiday-filter-trip-7"} keyName={"trip7"} />
                      <label className="form-check-label" htmlFor="trip7For">
                        7 - 10 Nights
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[3]} id={"holiday-filter-trip-11"} keyName={"trip11"} />
                      <label className="form-check-label" htmlFor="trip11For">
                        11 - 15 Nights
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[4]} id={"holiday-filter-trip-16"} keyName={"trip16"} />
                      <label className="form-check-label" htmlFor="trip16For">
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
                      <Checkbox ref={childRefs[5]} id={"holiday-filter-star-5"} keyName={"star5"} />
                      <label className="form-check-label" htmlFor="star5For">
                        5 star
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[6]} id={"holiday-filter-star-4"} keyName={"star4"} />
                      <label className="form-check-label" htmlFor="star6For">
                        4 star
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[7]} id={"holiday-filter-star-3"} keyName={"star3"} />
                      <label className="form-check-label" htmlFor="star3For">
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
                      <Checkbox ref={childRefs[8]} id={"holiday-filter-trans-bus"} keyName={"transBus"} />
                      <label className="form-check-label" htmlFor="transBusFor">
                        Bus
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">                  
                      <Checkbox ref={childRefs[9]} id={"holiday-filter-trans-landonly"} keyName={"transLandOnly"} />
                      <label className="form-check-label" htmlFor="transLandOnlyFor">
                        Landonly
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">                 
                      <Checkbox ref={childRefs[10]} id={"holiday-filter-trans-flight"} keyName={"transFlight"} />
                      <label className="form-check-label" htmlFor="transFlightFor">
                        Flight
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">               
                      <Checkbox ref={childRefs[11]} id={"holiday-filter-trans-cruise"} keyName={"transCruise"} />
                      <label className="form-check-label" htmlFor="transCruiseFor">
                        Cruise
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">             
                      <Checkbox ref={childRefs[12]} id={"holiday-filter-trans-optional"} keyName={"transOptional"} />
                      <label className="form-check-label" htmlFor="transOptionalFor">
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
                      <Checkbox ref={childRefs[13]} id={"holiday-filter-theme-adventure"} keyName={"themeAdventure"} />
                      <label className="form-check-label" htmlFor="themeAdventureFor">
                        Adventure
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">         
                      <Checkbox ref={childRefs[14]} id={"holiday-filter-theme-affordable"} keyName={"themeAffordable"} />
                      <label className="form-check-label" htmlFor="themeAffordableFor">
                        Affordable
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">      
                      <Checkbox ref={childRefs[15]} id={"holiday-filter-theme-artCulture"} keyName={"themeArtCulture"} />
                      <label className="form-check-label" htmlFor="themeArtCultureFor">
                        Art & Culture
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">   
                      <Checkbox ref={childRefs[16]} id={"holiday-filter-theme-beach"} keyName={"themeBeach"} />
                      <label className="form-check-label" htmlFor="themeBeachFor">
                        Beach
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[17]} id={"holiday-filter-theme-bestSeller"} keyName={"themeBestSeller"} />
                      <label className="form-check-label" htmlFor="themeBestSellerFor">
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
                      <Checkbox ref={childRefs[18]} id={"holiday-filter-price-lt1000"} keyName={"priceLt1000"} />
                      <label className="form-check-label" htmlFor="priceLt1000For">
                        Up To $1,000
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[19]} id={"holiday-filter-price-gt1000"} keyName={"priceGt1000"} />
                      <label className="form-check-label" htmlFor="priceGt1000For">
                        $1,000 to $2,000
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[20]} id={"holiday-filter-price-gt2000"} keyName={"priceGt2000"} />
                      <label className="form-check-label" htmlFor="priceGt2000For">
                        $2,000 to $4,000
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[21]} id={"holiday-filter-price-gt4000"} keyName={"priceGt4000"} />
                      <label className="form-check-label" htmlFor="priceGt4000For">
                        $4,000 to $8,000
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[22]} id={"holiday-filter-price-gt8000"} keyName={"priceGt8000"} />
                      <label className="form-check-label" htmlFor="priceGt8000For">
                        $8,000 and above
                      </label>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <div className={`text-center mt-3 ${panelClass}`} onClick={handlePanel}>
              <Button id={"holiday-filter-cancel-btn"} handleBtnClick={handleCancelClick} btnType={"secondary"} classes={"btn-sm holiday-cancel-btn"} label={"Cancel"} />
              <Button id={"holiday-filter-search-btn"} loading={loading} handleBtnClick={handleSearchClick} btnType={"primary"} classes={"btn-sm"} label={"Search"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default HolidaysFilter;
