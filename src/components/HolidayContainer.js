import React from 'react';

const HolidayContainer = ({ id, holidayData }) => {
  console.log('holidayData', holidayData)

  return (
    <div id={id} key={id} className="row mb-4 trip-block">
      <div className="col-8">
        <div className="d-flex flex-row">
          <div className="trip-image df">
            <img src={`./assets/images/book_online/${holidayData.image}`} className="img-style" alt="" />
          </div>
          <div className="ps-3">
            <h3>{holidayData.packageName}</h3>
            {/* <h3>Best Of Dubai With Free 1 Hour Limousine Ride</h3> */}
            <p>{holidayData.packageDuration}</p>
            <ul className="list-inline list-unstyled tour-features">
              <li className="list-inline-item">
                <span className="material-symbols-outlined">
                  hotel
                </span>
                <p>Hotel</p>
              </li>
              <li className="list-inline-item">
                <span className="material-symbols-outlined">
                  directions_car
                </span>
                <p>Transfers</p>
              </li>
              <li className="list-inline-item">
                <span className="material-symbols-outlined">
                  restaurant
                </span>
                <p>Food Included</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-4 text-end">
        <h2 className="mb-0">{`$${holidayData.price}`}</h2>
        <p className="mb-4">Per person onwards</p>
        <button type="button" className="btn btn-primary btn-sm">View details</button>
      </div>
    </div>
  )
};

export default HolidayContainer;
