import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkbox from './Checkbox';
import Button from './Button';
import store from '../store'


const HotelsFilter = forwardRef((props, ref) => {
  const { id, loading, hotelsCallback, toCallback, panelClass, handlePanelCallback } = props;
  const { hotelTypeAll, hotelTypeHotel, hotelTypeAppartment, hotelTypeResort, hotelTypeVilla, hotelPriceLt500, hotelPriceLt1000, hotelPriceLt1500, hotelBreakfast, hotelPayPerNight, hotelCancellation, hotelRating30, hotelRating35, hotelRating40, hotelRating45, hotelRatingStar1, hotelRatingStar2, hotelRatingStar3, hotelRatingStar4, hotelRatingStar5, hotelAmenitiesAll, hotelAmenitiesAirConditioning,  hotelAmenitiesBar, hotelAmenitiesBusinessServices, hotelAmenitiesFreeInternet } = useSelector(state => state.myAccount);
  const childRefs = [ useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];


  const handlePanel = () => {
    handlePanelCallback();
  }

  const handleSearchClick = () => {
    hotelsCallback('filter');
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

  return (


    <div id={id} className="section-listing-filter" >
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <ul className="d-flex flex-row listing-filters justify-content-center align-items-start list-unstyled">
              <li className="filter-type-first text-end">
                <a href="#!" onClick={handlePanel}><i className="bi bi-funnel-fill"></i></a>
              </li>
              <li className="filter-type">
                <a href="#!" onClick={handlePanel}>Hotel Type<i className="bi bi-chevron-down"></i></a>
                <div className={panelClass}>                  
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[0]} id={"hotel-filter-type-all"} keyName={"hotelTypeAll"} defaultValue={hotelTypeAll} />
                      <label className="form-check-label" htmlFor="hotelTypeAll">
                        All
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[1]} id={"hotel-filter-type-hotel"} keyName={"hotelTypeHotel"} defaultValue={hotelTypeHotel} />
                      <label className="form-check-label" htmlFor="hotelTypeHotel">
                        Hotel
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[2]} id={"hotel-filter-type-appartment"} keyName={"hotelTypeAppartment"} defaultValue={hotelTypeAppartment} />
                      <label className="form-check-label" htmlFor="hotelTypeAppartment">
                        Appartment
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[3]} id={"hotel-filter-type-resort"} keyName={"hotelTypeResort"} defaultValue={hotelTypeResort} />
                      <label className="form-check-label" htmlFor="hotelTypeResort">
                        Resort
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[4]} id={"hotel-filter-type-villa"} keyName={"hotelTypeVilla"} defaultValue={hotelTypeVilla} />
                      <label className="form-check-label" htmlFor="hotelTypeVilla">
                        Villa
                      </label>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-type">
                <a href="#!" onClick={handlePanel}>Price range <i className="bi bi-chevron-down"></i></a>
                <div className={panelClass}>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[5]} id={"hotel-filter-hotelPriceLt500"} keyName={"hotelPriceLt500"} defaultValue={hotelPriceLt500} />
                      <label className="form-check-label" htmlFor="hotelPriceLt500">
                        Up to $500
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[6]} id={"hotel-filter-hotelPriceLt1000"} keyName={"hotelPriceLt1000"} defaultValue={hotelPriceLt1000} />
                      <label className="form-check-label" htmlFor="hotelPriceLt1000">
                        $500 - $1000
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[7]} id={"hotel-filter-hotelPriceLt1500"} keyName={"hotelPriceLt1500"} defaultValue={hotelPriceLt1500} />
                      <label className="form-check-label" htmlFor="hotelPriceLt1500">
                        $1000 - $1500
                      </label>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-type">
                <a href="#!" onClick={handlePanel}>Popular Type <i className="bi bi-chevron-down"></i></a>
                <div className={panelClass}>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[8]} id={"hotel-filter-hotelBreakfast"} keyName={"hotelBreakfast"} defaultValue={hotelBreakfast} />
                      <label className="form-check-label" htmlFor="hotelBreakfast">
                        Free Breakfast Included
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[9]} id={"hotel-filter-hotelPayPerNight"} keyName={"hotelPayPerNight"} defaultValue={hotelPayPerNight} />
                      <label className="form-check-label" htmlFor="hotelPayPerNight">
                        Pay At Hotel Available
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[10]} id={"hotel-filter-hotelCancellation"} keyName={"hotelCancellation"} defaultValue={hotelCancellation} />
                      <label className="form-check-label" htmlFor="hotelCancellation">
                        Free Cancellation Available
                      </label>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-type">
                <a href="#!" onClick={handlePanel}>Customer Rating <i className="bi bi-chevron-down"></i></a>
                <div className={panelClass}>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[11]} id={"hotel-filter-hotelRating30"} keyName={"hotelRating30"} defaultValue={hotelRating30} />
                      <label className="form-check-label" htmlFor="hotelRating30">
                        3+
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[12]} id={"hotel-filter-hotelRating35"} keyName={"hotelRating35"} defaultValue={hotelRating35} />
                      <label className="form-check-label" htmlFor="hotelRating35">
                        3.5+
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[13]} id={"hotel-filter-hotelRating40"} keyName={"hotelRating40"} defaultValue={hotelRating40} />
                      <label className="form-check-label" htmlFor="hotelRating40">
                        4+
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[14]} id={"hotel-filter-hotelRating45"} keyName={"hotelRating45"} defaultValue={hotelRating45} />
                      <label className="form-check-label" htmlFor="hotelRating45">
                        4.5+
                      </label>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-type">
                <a href="#!" onClick={handlePanel}>Rating Star <i className="bi bi-chevron-down"></i></a>
                <div className={panelClass}>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[15]} id={"hotel-filter-hotelRatingStar1"} keyName={"hotelRatingStar1"} defaultValue={hotelRatingStar1} />
                      <label className="form-check-label" htmlFor="hotelRatingStar1">
                        1 <i class="bi bi-star-fill"></i>
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[16]} id={"hotel-filter-hotelRatingStar2"} keyName={"hotelRatingStar2"} defaultValue={hotelRatingStar2} />
                      <label className="form-check-label" htmlFor="hotelRatingStar2">
                        2 <i class="bi bi-star-fill"></i>
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[17]} id={"hotel-filter-hotelRatingStar3"} keyName={"hotelRatingStar3"} defaultValue={hotelRatingStar3} />
                      <label className="form-check-label" htmlFor="hotelRatingStar3">
                        3 <i class="bi bi-star-fill"></i>
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[18]} id={"hotel-filter-hotelRatingStar4"} keyName={"hotelRatingStar4"} defaultValue={hotelRatingStar4} />
                      <label className="form-check-label" htmlFor="hotelRatingStar4">
                        4 <i class="bi bi-star-fill"></i>
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">                      
                      <Checkbox ref={childRefs[19]} id={"hotel-filter-hotelRatingStar5"} keyName={"hotelRatingStar5"} defaultValue={hotelRatingStar5} />
                      <label className="form-check-label" htmlFor="hotelRatingStar5"> 
                        5 <i class="bi bi-star-fill"></i>
                      </label>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-type">
                <a href="#!" onClick={handlePanel}>Amenities <i className="bi bi-chevron-down"></i></a>
                <div className={panelClass}>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[20]} id={"hotel-filter-hotelAmenitiesAll"} keyName={"hotelAmenitiesAll"} defaultValue={hotelAmenitiesAll} />
                      <label className="form-check-label" htmlFor="hotelAmenitiesAll">
                        All
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[21]} id={"hotel-filter-hotelAmenitiesAirConditioning"} keyName={"hotelAmenitiesAirConditioning"} defaultValue={hotelAmenitiesAirConditioning} />
                      <label className="form-check-label" htmlFor="hotelAmenitiesAirConditioning">
                        Air Conditioning
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[22]} id={"hotel-filter-hotelAmenitiesBar"} keyName={"hotelAmenitiesBar"} defaultValue={hotelAmenitiesBar} />
                      <label className="form-check-label" htmlFor="hotelAmenitiesBar">
                        Bar
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[23]} id={"hotel-filter-hotelAmenitiesBusinessServices"} keyName={"hotelAmenitiesBusinessServices"} defaultValue={hotelAmenitiesBusinessServices} />
                      <label className="form-check-label" htmlFor="hotelAmenitiesBusinessServices">
                        Business Services
                      </label>
                    </div>
                  </a>
                  <a href="#!">
                    <div className="form-check">
                      <Checkbox ref={childRefs[24]} id={"hotel-filter-hotelAmenitiesFreeInternet"} keyName={"hotelAmenitiesFreeInternet"} defaultValue={hotelAmenitiesFreeInternet} />
                      <label className="form-check-label" htmlFor="hotelAmenitiesFreeInternet">
                       Free Internet
                      </label>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <div className={`text-center mt-3 ${panelClass}`} onClick={handlePanel}>
              <Button id={"cab-filter-cancel-btn"} handleBtnClick={handleCancelClick} btnType={"secondary"} classes={"btn-sm cab-cancel-btn"} label={"Cancel"} />
              <Button id={"cab-filter-search-btn"} loading={loading} handleBtnClick={handleSearchClick} btnType={"primary"} classes={"btn-sm"} label={"Search"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default HotelsFilter;