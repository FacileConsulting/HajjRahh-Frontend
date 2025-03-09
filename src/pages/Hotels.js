import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { resetHomeFunc } from '../reducers/homeSlice';
import { handleAPIData } from '../hooks/useCustomApi';
import HotelsFilter from '../components/HotelsFilter';
import HotelsSearch from '../components/HotelsSearch';
import HotelContainer from '../components/HotelContainer';
import NoDataAvailable from '../components/NoDataAvailable';
import Select from '../components/Select';
import DefaultBody from '../components/DefaultBody';

const Hotels = ({ id }) => {
  localStorage.setItem('current_route', '/hotels');
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [toCallback, setToCallback] = useState(false);
  const [hotelsData, setHotelsData] = useState([]);

  const sortOptions = [
    {
      value: '',
      label: 'Select'
    },
    {
      value: 'byrating',
      label: 'By Rating'
    },
    {
      value: 'byprice',
      label: 'By Price'
    },
    {
      value: 'byreview',
      label: 'By Review'
    }
  ]

  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const [panelClass, setPanelClass] = useState('filter-list');
  const { hotelPlace, hotelJourneyDate, hotelReturnDate, adults, children, infants, travelRooms } = useSelector(state => state.home);
  const { hotelSort, hotelTypeAll, hotelTypeHotel, hotelTypeAppartment, hotelTypeResort, hotelTypeVilla, hotelPriceLt500, hotelPriceLt1000, hotelPriceLt1500, hotelBreakfast, hotelPayPerNight, hotelCancellation, hotelRating30, hotelRating35, hotelRating40, hotelRating45, hotelRatingStar1, hotelRatingStar2, hotelRatingStar3, hotelRatingStar4, hotelRatingStar5, hotelAmenitiesAll, hotelAmenitiesAirConditioning,  hotelAmenitiesBar, hotelAmenitiesBusinessServices, hotelAmenitiesFreeInternet } = useSelector(state => state.myAccount);

  const hotelCardCallback = (data) => {
    history.push({
      pathname: '/hotelDetails',
      state: { from: 'Hotel View Details click', data: data }
    });
  }

  const handlePanelCallbackParent = () => {
    setPanelClass(panelClass === 'filter-list' ? 'filter-show' : 'filter-list');
  }

  const hotelSortBy = (type, hotelsData) => {
    if (type === 'byprice') {
      let sortedhotelsData = hotelsData.sort((a, b) => new Date(a.price) - new Date(b.price));
      console.log('dsf', sortedhotelsData);
      setHotelsData([...sortedhotelsData]);
    } else if (type === 'bydate') {
      const sortedDates = hotelsData.sort((a, b) => {
        const dateA = new Date(a.dateRange[0].split('-').reverse().join('-'));
        const dateB = new Date(b.dateRange[0].split('-').reverse().join('-'));
        return dateA - dateB;
      });
      console.log('bydate', sortedDates);
      setHotelsData([...sortedDates]);
    }
  }

  const handleBookNowClick = () => {
    history.push({
      pathname: '/hotelDetails',
      state: { from: 'Holiday Make Payment click', data: 'bookingResponse.data' }
    });
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
    return `${formattedDay}-${formattedMonth}-${formattedYear}`;
  }

  const preparePayload = () => {
    return {
      namePlace: hotelPlace.split('^')[0],
      hotelJourneyDate: convertDate(hotelJourneyDate),
      hotelReturnDate: convertDate(hotelReturnDate),
      adults,
      children,
      infants,
      travelRooms
    }
  }

  const handleHotelSearchFilter = async (type) => {
    let payload = {};
    setPanelClass('filter-list');
    if (loading) {
      return;
    }

    if (!hotelPlace && !hotelJourneyDate && !hotelReturnDate) {
      toast.info('Please select atleast one field', toastOptions);
      return;
    } else if (!hotelPlace) {
      toast.info('Please select place', toastOptions);
      return;
    } else if (!hotelJourneyDate) {
      toast.info('Please select journey date', toastOptions);
      return;
    } else if (!hotelReturnDate) {
      toast.info('Please select return date', toastOptions);
      return;
    } 
    
    if (type === 'filter' && !hotelTypeAll && !hotelTypeHotel && !hotelTypeAppartment && !hotelTypeResort && !hotelTypeVilla && !hotelPriceLt500 && !hotelPriceLt1000 && !hotelPriceLt1500 && !hotelBreakfast && !hotelPayPerNight && !hotelCancellation && !hotelRating30 && !hotelRating35 && !hotelRating40 && !hotelRating45 && !hotelRatingStar1 && !hotelRatingStar2 && !hotelRatingStar3 && !hotelRatingStar4 && !hotelRatingStar5 && !hotelAmenitiesAll && !hotelAmenitiesAirConditioning &&  !hotelAmenitiesBar && !hotelAmenitiesBusinessServices && !hotelAmenitiesFreeInternet) {
      toast.info('Please select atleast one filter', toastOptions);
      return;
    }
    if (type === 'filter' && (hotelsData === null || hotelsData.length === 0)) {
      setToCallback(!toCallback);
      toast.info('Please perform modify search operation first', toastOptions);
      return;
    }

    if (type === 'filter') {
      payload = {
        ...preparePayload(),
        hotelTypeAll, hotelTypeHotel, hotelTypeAppartment, hotelTypeResort, hotelTypeVilla, hotelPriceLt500, hotelPriceLt1000, hotelPriceLt1500, hotelBreakfast, hotelPayPerNight, hotelCancellation, hotelRating30, hotelRating35, hotelRating40, hotelRating45, hotelRatingStar1, hotelRatingStar2, hotelRatingStar3, hotelRatingStar4, hotelRatingStar5, hotelAmenitiesAll, hotelAmenitiesAirConditioning,  hotelAmenitiesBar, hotelAmenitiesBusinessServices, hotelAmenitiesFreeInternet
      }
    }

    if (type === 'search') {
      payload = {
        ...preparePayload()
      }
    }
    setToCallback(!toCallback);
    console.log('sfsdfdfdf', payload, hotelPlace, hotelJourneyDate, hotelReturnDate, travelRooms, hotelTypeAll, hotelTypeHotel, hotelTypeAppartment, hotelTypeResort, hotelTypeVilla, hotelPriceLt500, hotelPriceLt1000, hotelPriceLt1500, hotelBreakfast, hotelPayPerNight, hotelCancellation, hotelRating30, hotelRating35, hotelRating40, hotelRating45, hotelRatingStar1, hotelRatingStar2, hotelRatingStar3, hotelRatingStar4, hotelRatingStar5, hotelAmenitiesAll, hotelAmenitiesAirConditioning,  hotelAmenitiesBar, hotelAmenitiesBusinessServices, hotelAmenitiesFreeInternet);
    setLoading(true);
    let resHotels = await handleAPIData('POST', '/api/searchHotels', payload);
    let responseHotels = resHotels.data;
    console.log('responseHotels', responseHotels, hotelSort);

    if (responseHotels && responseHotels.status === 'success' && responseHotels.data.length > 0) {
      if (hotelSort) {
        hotelSortBy(hotelSort, responseHotels.data);
      } else {
        setHotelsData(responseHotels.data);
      }
    } else if (responseHotels && responseHotels.status === 'success' && responseHotels.data.length === 0) {
      toast.warning('Search Hotels Not Found.', toastOptions);
      setHotelsData([]);
      console.log('responsezero', responseHotels.data);
    } else {
      toast.error('Something went wrong. Please try again.', toastOptions);
    }
    setLoading(false);
  }

  useEffect(() => {
    console.log('useEff', state);
    if (state == null) {
      console.log('useEffinner');
      dispatch(resetHomeFunc());
    }

  }, []);

  useEffect(() => {
    console.log("Data updated: ", hotelSort);
    if (hotelsData && hotelsData.length > 0) {
      hotelSortBy(hotelSort, hotelsData);
    }
  }, [hotelSort]);

  return (
    <>
      <HotelsSearch id={"hotels-search"} loading={loading} hotelsCallback={handleHotelSearchFilter} />
      {
        hotelsData.length > 0 ?
          <>
            <HotelsFilter id={"hotels-filter"} loading={loading} toCallback={toCallback} panelClass={panelClass} hotelsCallback={handleHotelSearchFilter} handlePanelCallback={handlePanelCallbackParent} />
            <div className="container-xxl py-5 section-block">
              <div className="row mt-4">
                <div class="col-auto me-auto">
                  <h3>Search results</h3>
                </div>
                <div className="col-auto">
                  <div className="row g-1 align-items-center mb-2">
                    <div className="col-auto">
                      <span>Sort by:</span>
                    </div>
                    <div className="col-auto">
                      <Select id={"hotels-sort"} keyName={"hotelSort"} eventType={1} options={sortOptions} classes={"form-sort"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="hotel-contain">
                {
                  hotelsData.map((hotel, index) => {
                    return (<HotelContainer id={`hotel-${index}`} hotelData={hotel} hotelCardCallback={hotelCardCallback} />)
                  })
                }
              </div>
            </div>
          </> : <DefaultBody />
      }
    </>
  )
};

export default Hotels;
