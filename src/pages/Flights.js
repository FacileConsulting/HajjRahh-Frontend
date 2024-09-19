import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import FlightsSearch from '../components/FlightsSearch';
import FlightContainer from '../components/FlightContainer';
import NoDataAvailable from '../components/NoDataAvailable';

const Flights = ({ id }) => {
  localStorage.setItem('current_route', '/flights');
  const history = useHistory();
  const { roundOneWay, adults, children, infants, travelClass, flyingFrom, flyingTo, flightDepartureDate, flightReturnDate } = useSelector(state => state.home);
  const { displayEmail } = useSelector(state => state.myAccount);
  const [loading, setLoading] = useState(false);
  const [flightsData, setFlightsData] = useState({ data: [], dictionaries: {}, meta: {} });
  const [heading, setHeading] = useState({
    flyingFrom: '',
    flyingTo: '',
    guests: 0,
    roundOneWay: '',
    travelClass: ''
  });

  const flightCardCallback = () => {
    history.push('/flightDetails');
  }

  const convertDate = (dateStr) => {
    if (!dateStr) {
      return ''
    }
    const [day, month, year] = dateStr.split('-');
    const date = new Date(year, month - 1, day);
    const formattedYear = date.getFullYear();
    const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
    const formattedDay = String(date.getDate()).padStart(2, '0');
    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
  }

  const preparePayload = () => {
    return {
      flyingFrom: flyingFrom.split('^')[0],
      flyingTo: flyingTo.split('^')[0],
      flightDepartureDate: convertDate(flightDepartureDate),
      flightReturnDate: convertDate(flightReturnDate),
      adults,
      children,
      infants,
      travelClass: travelClass.split('^')[0]
    }
  }

  const handleFlightSearchFilter = async (type) => {
    let payload = {};
    // setPanelClass('filter-list');
    if (loading) {
      return;
    }

    // if (type === 'filter' && !trip3 && !trip4 && !trip7 && !trip11 && !trip16 && !star5 && !star4 && !star3 && !transBus && !transLandOnly && !transFlight && !transCruise && !transOptional && !themeAdventure && !themeAffordable && !themeArtCulture && !themeBeach && !themeBestSeller && !priceLt1000 && !priceGt1000 && !priceGt2000 && !priceGt4000 && !priceGt8000) {
    //   toast.info('Please select atleast one filter', toastOptions);
    //   return;
    // }
    // if (type === 'filter' && (holidaysData === null || holidaysData.length === 0)) {
    //   setToCallback(!toCallback);
    //   toast.info('Please select atleast one search field', toastOptions);
    //   return;
    // }

    // let payload = {
    //   ...preparePayload(),
    //   trip3, trip4, trip7, trip11, trip16, star5, star4, star3, transBus, transLandOnly, transFlight, transCruise, transOptional, themeAdventure, themeAffordable, themeArtCulture, themeBeach, themeBestSeller, priceLt1000, priceGt1000, priceGt2000, priceGt4000, priceGt8000
    // }

    if (type === 'search') {
      // setToCallback(!toCallback);
      if (!flyingFrom && !flyingTo && !flightDepartureDate && !flightReturnDate) {
        toast.info('Please select atleast one field', toastOptions);
        return;
      } else if (!flyingFrom) {
        toast.info('Please select Flying From field', toastOptions);
        return;
      } else if (!flyingTo) {
        toast.info('Please select Flying To field', toastOptions);
        return;
      } else if (!flightDepartureDate) {
        toast.info('Please select Departure Date', toastOptions);
        return;
      }
    }
    setLoading(true);
    payload = {
      ...preparePayload()
    }
    let response = await handleAPIData('POST', '/api/searchFlights', payload);
    console.log('tripsreresponseresponseresponsesponse', response);
    if (response?.status === 'success' && response?.data?.data?.data.length > 0) {
      const { data, dictionaries, meta } = response?.data?.data;
      setFlightsData({ data, dictionaries, meta });
      setHeading({
        flyingFrom: `${flyingFrom.split('^')[1]} (${flyingFrom.split('^')[0]})`,
        flyingTo: `${flyingTo.split('^')[1]} (${flyingTo.split('^')[0]})`,
        guests: adults + children + infants,
        roundOneWay,
        travelClass: travelClass.split('^')[1]
      });
    } else {
      setFlightsData({ data: [], dictionaries: {}, meta: {} });
      setHeading({
        flyingFrom: '',
        flyingTo: '',
        guests: 0,
        roundOneWay: '',
        travelClass: ''
      });
      toast.error('Something went wrong. Please try again.', toastOptions);
    }

    // if (response.status === 'success' && response.data.data.length > 0) {
    //   console.log('response', response.data.data);
    //   if (holidaySort) { 
    //     holidaySortBy(holidaySort, response.data.data);
    //   } else {
    //     setHolidaysData(response.data.data);
    //   }
    // } else if (response.status === 'success' && response.data.data.length === 0) {
    //   toast.warning('Search Holidays Not Found.', toastOptions);
    //   setHolidaysData([]);
    //   console.log('responsezero', response.data.data);
    // } else {
    //   toast.error('Something went wrong. Please try again.', toastOptions);
    // }
    setLoading(false);
  }

  const convertISODurationToReadable = (duration) => {
    let totalMinutes = 0;

    const regex = /P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?/;
    const matches = duration.match(regex);

    if (matches) {
      const days = parseInt(matches[1]) || 0; 
      const hours = parseInt(matches[2]) || 0; 
      const minutes = parseInt(matches[3]) || 0; 

      totalMinutes = (days * 24 * 60) + (hours * 60) + minutes;
    }
    return totalMinutes;
  }

  const formatFromToCodes = (arr) => {
    let newArray = [];
    for (let z = 0; z < arr.length; z++) {
      newArray.push([...new Set(arr[z])].join('-'));
    }
    return newArray;
  }

  const sumAndCovertToDHM = (arr) => {
    let totalMinutes = arr.reduce((accumulator, current) => accumulator + current, 0);

    const minutesInHour = 60;
    let minutesInDay = 24 * minutesInHour;

    const days = Math.floor(totalMinutes / minutesInDay);
    totalMinutes %= minutesInDay; 

    const hours = Math.floor(totalMinutes / minutesInHour);
    const minutes = totalMinutes % minutesInHour;

    let displayed = '';

    if (days) {
      displayed = `${days} day${days !== 1 ? 's' : ''}`
    }
    if (hours) {
      displayed = `${displayed}  ${hours} hour${hours !== 1 ? 's' : ''}`
    }
    if (minutes) {
      displayed = `${displayed}  ${minutes} minute${minutes !== 1 ? 's' : ''}`
    }

    return displayed.trim();
  }

  const formatTimeArray = (arr) => {
    const start = arr[0];
    const end = arr[arr.length-1];
    const part1 = start.split('T')[1];
    const part2 = end.split('T')[1];
    const startTime = `${part1.split(':')[0]}:${part1.split(':')[1]}`;
    const endTime = `${part2.split(':')[0]}:${part2.split(':')[1]}`;
    return `${startTime} - ${endTime}`.trim();
  }

  const formatHalts = (arr) => {  
    const returned = [];
    for (let z = 0; z < arr.length; z++) {
      const part0 = arr[z].split('^')[0];
      const part1 = new Date(arr[z].split('^')[1]);
      const part2 = new Date(arr[z].split('^')[2]);
      const differenceInMilliseconds = part1 - part2;
      const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
      const formatted = sumAndCovertToDHM([differenceInMinutes]);
      returned.push(`${formatted} | ${part0}`);
    } 
    return returned;
  }

  const modifyFlightData = (datum) => {
    const dictionaries = flightsData.dictionaries.carriers;
    // 11.00 - 16.40
    const timeArray = [];
    // BLR-SSD-AUH
    const fromToCodes = [];
    // 2 days 4 hours
    const durationArray = [];
    // 2 days 4 hours | HYD
    let halts = [];
    for (let x = 0; x < datum.itineraries.length; x++) {
      durationArray.push(convertISODurationToReadable(datum.itineraries[x].duration));
      let fromToCodesTemp = [];
      for (let y = 0; y < datum.itineraries[x].segments.length; y++) {
        fromToCodesTemp.push(datum.itineraries[x].segments[y].departure.iataCode);
        timeArray.push(datum.itineraries[x].segments[y].departure.at);
        fromToCodesTemp.push(datum.itineraries[x].segments[y].arrival.iataCode);
        timeArray.push(datum.itineraries[x].segments[y].arrival.at);

        if (y > 0) {
          const departureCode = datum.itineraries[x].segments[y].departure.iataCode;
          const arrivalAt = datum.itineraries[x].segments[y-1].arrival.at;
          const departureAt = datum.itineraries[x].segments[y].departure.at;
          halts.push(`${departureCode}^${departureAt}^${arrivalAt}`); 
        }
      }
      fromToCodes.push(fromToCodesTemp);
    }
    return {
      ...datum,
      roundOneWay: heading.roundOneWay === 'roundTrip' ? 'Round Trip' : 'One Way',
      halts: formatHalts(halts),
      time: formatTimeArray(timeArray),
      duration: sumAndCovertToDHM(durationArray),
      fromToCodes: formatFromToCodes(fromToCodes),
      validatingAirlineCodes: datum.validatingAirlineCodes.map(item => `${item}^${dictionaries[item]}`)
    }
  }

  const renderHeading = () => {
    return (
      <div className="row mb-4 mt-4">
        <div className="col">
          <h2 className="mb-2">{heading.flyingFrom} - {heading.flyingTo}</h2>
          <p>{flightsData.meta.count} Flights &nbsp;&nbsp; · &nbsp;&nbsp; {heading.roundOneWay === 'roundTrip' ? 'Round Trip' : 'One Way'} &nbsp;&nbsp; · &nbsp;&nbsp; {heading.travelClass} &nbsp;&nbsp; · &nbsp;&nbsp; {heading.guests} Guests</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <FlightsSearch id={"flights-search"} loading={loading} flightsCallback={handleFlightSearchFilter} />
      <div className="container-xxl py-5 section-block">
        {flightsData.data.length > 0 && renderHeading()}
        <div className="row mb-5 mt-5 align-items-end">
          {/*<div className="col-auto me-auto">
            <h4><i className="bi bi-funnel"></i> Filter</h4>
            <select className="filter-results" id="airlines" name="states[]" multiple="multiple">
              <option value="AL">Emirates</option>
              <option value="WY">Airasia</option>
            </select>
            <select className="filter-results" id="travel-time" name="states[]" multiple="multiple">
              <option value="AL">2-4 hours</option>
              <option value="WY">4-6 hours</option>
            </select>
            <select className="filter-results" id="stop-points" name="states[]" multiple="multiple">
              <option value="AL">1 stop</option>
              <option value="WY">non stop</option>
            </select>
            <select className="filter-results" id="halal-meal" name="states[]" multiple="multiple">
              <option value="AL">Egg</option>
              <option value="WY">Non veg</option>
            </select>
            <select className="filter-results" id="flight-time" name="states[]" multiple="multiple">
              <option value="AL">Morning (06:00 am to 11:59am)</option>
              <option value="WY">Afternoon (12:00 pm to 04:00 pm)</option>
            </select>
            <a href="#!">Reset filter</a>
          </div>*/}
          <div className="col-auto">
            <div className="row g-1 align-items-center mb-2">
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
        <div className="accordion" id="flight-contain">
          {
            Array.isArray(flightsData.data) && flightsData.data.length > 0 &&
            (
              <>
                {
                  Array.isArray(flightsData.data) && flightsData.data.length > 0 && flightsData.data.map((flight, index) => {
                    return (<FlightContainer id={`flight-${index}`} flightData={modifyFlightData(flight)} flightCardCallback={flightCardCallback} />)
                  })
                }
              </>
            )
          }
          {
            Array.isArray(flightsData.data) && flightsData.data.length === 0 &&
            <NoDataAvailable text={"No Data Available. Please modify or perform your search"} />
          }
        </div>
      </div>
    </>
  )
};

export default Flights;
