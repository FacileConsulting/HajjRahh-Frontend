import React from 'react';

const HolidayContainer = ({ id, flightData, flightCardCallback }) => {
  
  const handleFlightCardClick = () => {
    flightCardCallback();
  }

  return (
    <div id={id} key={id} className="accordion-item flight-block" onClick={handleFlightCardClick}>
      <h2 className="accordion-header">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <div className="col-md-2 col-sm-12 flight-logo">
                <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
              </div>
              <div className="col-md-3 col-sm-12">
                <h3>{flightData?.time}</h3>
                <p>{flightData?.validatingAirlineCodes[0].split('^')[1]}</p>
              </div>
              <div className="col-md-4 col-sm-12">
                <h3>{flightData?.duration}</h3>
                {/* <p>{flightData?.fromToCodes}</p> */}
                {
                  flightData?.fromToCodes && flightData.fromToCodes.length > 0 && flightData.fromToCodes.map((item) => {
                    return (
                      <p>{item}</p>
                    )
                  })
                }
              </div>
              <div className="col-md-3 col-sm-12">
                <h3>{flightData?.halts.length} {flightData.halts.length > 1 ? 'stops' : 'stop'}</h3>
                {
                  flightData?.halts && flightData.halts.length > 0 && flightData.halts.map((item) => {
                    return (
                      <p>{item}</p>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 text-end">
            <div className="d-flex justify-content-end">
              <div>
                <h2 className="mb-2">${flightData?.price?.grandTotal}</h2> 
                <p>{flightData?.roundOneWay}</p>
              </div>
              <div className="ps-5 text-center">
                <a href="#!" className="btn btn-primary btn-sm mb-2">Book now</a>
                <a href="#!" className="flight-details-link collapsed" data-bs-toggle="collapse" data-bs-target={`#flight-accordion-${id}`} aria-expanded="false" aria-controls={`flight-accordion-${id}`}>Quick view</a>
              </div>
            </div>
          </div>
        </div>
      </h2>
      <div id={`flight-accordion-${id}`} className="accordion-collapse collapse" data-bs-parent="#flight-contain">
        <div className="accordion-body flight-details">
          <div className="d-flex flex-row">
            <div className="flight-logo">
              <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
            </div>
            <div className="airport-details">
              <span className="travel-line"></span>
              <p>Monday, August 12 · 11:00</p>
              <h3>Bangalore International Airport (BLR)</h3>
              <p className="mt-4">Monday, August 12 · 13:00</p>
              <h3>Hyderabad International Airport (Hyd)</h3>
            </div>
            <div className="ps-5">
              <p className="small-text">Trip time: 2 hours</p>
              <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
            </div>
          </div>
          <div className="transit-block">
            Transit time: 1 hours 30 minutes - Hyderabad International Airport (HYD)
          </div>
          <div className="d-flex flex-row">
            <div className="flight-logo">
              <img src="./assets/images/Emirates_logo.svg" className="img-style" alt="" />
            </div>
            <div className="airport-details">
              <span className="travel-line"></span>
              <p>Monday, August 12 · 14:30</p>
              <h3>Hyderabad International Airport (Hyd)</h3>
              <p className="mt-4">Monday, August 12 · 16:40</p>
              <h3>Abudhabi International Airport (AUH)</h3>
            </div>
            <div className="ps-5">
              <p className="small-text">Trip time: 2 hours 10 minutes</p>
              <p className="small-text">ANA · Business class · Boeing 787 · NH 847</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HolidayContainer;
