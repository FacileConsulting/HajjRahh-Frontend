import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const HotelContainer = ({ id, hotelData, hotelCardCallback }) => {
  console.log('hotelData@@@', hotelData);
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const hotelPlaceOptions = [
    {
      value: 'jwmarriot-london',
      label: 'JW Marriot',
      lowerOne: 'London',
      lowerTwo: ''
    },
    {
      value: 'hayatt-newyork',
      label: 'Hayatt',
      lowerOne: 'London',
      lowerTwo: ''
    },
    {
      value: 'tajhotels-pune',
      label: 'Taj Hotels',
      lowerOne: 'Pune',
      lowerTwo: ''
    },
    {
      value: 'piramalhotels-bengaluru',
      label: 'Piramal Hotels',
      lowerOne: 'Bengaluru',
      lowerTwo: ''
    }
  ];

  const amenities = [
    {
      value: 'bar',
      label: 'Bar'
    },
    {
      value: 'airConditioning',
      label: 'Air Conditioning'
    },
    {
      value: 'businessServices',
      label: 'Business Services'
    },
    {
      value: 'freeInternet',
      label: 'Free Internet'
    }
  ];

  const popularType = [
    {
      value: 'breakfast',
      label: 'Bar'
    },
    {
      value: 'payPerNight',
      label: 'Air Conditioning'
    },
    {
      value: 'cancellation',
      label: 'Business Services'
    }
  ];

  const handleSelectRoomClick = () => {
    hotelCardCallback(hotelData);
  }

  

  const renderAmenities = (arr) => {
    const otherAmenities = arr.filter(item => item !== 'all');
    const labels = amenities
      .filter(item => otherAmenities.includes(item.value)) // Filter items matching `gets` values
      .map(item => item.label); // Extract only the label 
    
    return (
      <p className="mt-3">
        {labels.map((label, index) => (
          <span key={`am-${index}`}>
            {label}
            {index < labels.length - 1 && <i className="bi bi-dot"></i>}
          </span>
        ))}
      </p>
    );
  }

  const renderPopularType = (arr) => {
    const labels = popularType
      .filter(item => arr.includes(item.value)) 
      .map(item => item.label); 
    
    return (
      <p className="text-success pe-4">
        {labels.map((label, index) => (
          <span key={`pop-${index}`}>
            <i className="bi bi-patch-check-fill"></i>
            {label}
            <br/>
          </span>
        ))}
      </p>
    );
  }

  const renderHeading = (val) => {
    const place = hotelPlaceOptions.filter(o => o.value === val);
    if (place.length > 0) {
      return `${place[0].label}, ${place[0].lowerOne}`
    }
    return '';
  }

  const renderStars = (rating) => {
    // Calculate full, half, and empty stars
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);

    return (
      <p className="text-warning">
        {/* Full stars */}
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <i key={`full-${index}`} className="bi bi-star-fill"></i>
          ))}

        {/* Half star */}
        {halfStar === 1 && <i className="bi bi-star-half"></i>}

        {/* Empty stars */}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <i key={`empty-${index}`} className="bi bi-star"></i>
          ))}
      </p>
    )
  }

  return (
    <div id={id} key={id} className="hotels-block">
      <div className="container-xxl py-2">
        <div className="row mb-4 hotel-block">
          <div className="col-auto me-auto mb-2">
            <div className="d-flex flex-row">
              <div className="trip-image">
                <img src={`./assets/images/book_online/${hotelData.image}`} className="img-style" alt="" />
              </div>
              <div className="ps-3">
                {renderStars(Number(hotelData.starRating[0]))}
                <h3>{renderHeading(hotelData.namePlace)}</h3>
                <p><i className="bi bi-geo-alt"></i> {hotelData.address}</p>
                {renderAmenities(hotelData.amenities)}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mb-3"> 
            {renderPopularType(hotelData.popularType)}
          </div>
          <div className="col-lg-2 col-12 text-end">
            <h2 className="mb-0">${hotelData.pricePerDay}</h2>
            <p className="mb-4">Per day</p>
            <Button id={"select-room-hotel-page-btn"} loading={loading} handleBtnClick={handleSelectRoomClick} btnType={"primary"} classes={"btn-sm"} label={"Select Room"} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default HotelContainer;
