import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import Button from '../components/Button';
import { handleAPIData } from '../hooks/useCustomApi';

const HotelConfirm = ({ id }) => {
  localStorage.setItem('current_route', '/hotelConfirm');
  const { userId, displayName, displayEmail, displayPhone, displayAddress, creditCard, debitCard, upi } = useSelector(state => state.myAccount);
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { state } = location;
  let creditCardData = { name: '', card: '', expiry: '', cvv: '' };
  let debitCardData = { name: '', card: '', expiry: '', cvv: '' };
  let internetBanking = '';
  let upiData = '';
  let paymentActive = 'credit';
  const [hotelConfirmDatum, setHotelConfirmDatum] = useState(state?.data || null);

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

  const getTotal = () => {
    return (((hotelConfirmDatum.roomSelectPrice * hotelConfirmDatum.nightsTotal) * (hotelConfirmDatum.taxes / 100)) + (hotelConfirmDatum.roomSelectPrice * hotelConfirmDatum.nightsTotal) + (hotelConfirmDatum.serviceFee) - 250).toLocaleString();
  }

  const handlePaymentLinkClick = (key) => {
    paymentActive = key;
  }

  const renderHeading = (val) => {
    const place = hotelPlaceOptions.filter(o => o.value === val);
    if (place.length > 0) {
      return `${place[0].label}, ${place[0].lowerOne}`
    }
  }

  const handleCreditCard = (event, key) => {
    creditCardData[key] = event.target.value;
  }

  const handleDebitCard = (event, key) => {
    debitCardData[key] = event.target.value;
  }

  const handleInternetBanking = (event) => {
    internetBanking = event.target.value;
  }

  const handleUPI = (event) => {
    upiData = event.target.value;
  }

  const handleMakePaymentClick = async () => {  
      const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;
      const cvvRegex = /^\d{3,4}$/;
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
      const cardNumberRegex = /^\d{16}$/;
  
  
      if ((!creditCardData.name || !creditCardData.card || !creditCardData.expiry || !creditCardData.cvv) && (!debitCardData.name || !debitCardData.card || !debitCardData.expiry || !debitCardData.cvv) && !internetBanking && !upiData) {
        toast.info('Please select any payment details', toastOptions);
        return;
      }
      if (paymentActive === 'credit' && (!creditCardData.name || !creditCardData.card || !creditCardData.expiry || !creditCardData.cvv)) {
        toast.info('Please fill all credit card details', toastOptions);
        return;
      } else if (paymentActive === 'debit' && (!debitCardData.name || !debitCardData.card || !debitCardData.expiry || !debitCardData.cvv)) {
        toast.info('Please fill all debit card details', toastOptions);
        return;
      } else if (paymentActive === 'internetBanking' && !internetBanking) {
        toast.info('Please select bank', toastOptions);
        return;
      } else if (paymentActive === 'upi' && !upiData) {
        toast.info('Please enter upi', toastOptions);
        return;
      }
  
      if (paymentActive === 'upi' && upiData && !upiRegex.test(upiData)) {
        toast.warning('Please enter a valid upi', toastOptions);
        return;
      }
  
      if ((paymentActive === 'debit') && debitCardData.cvv && !cvvRegex.test(debitCardData.cvv)) {
        toast.warning('Please enter a valid cvv', toastOptions);
        return;
      }
  
      if ((paymentActive === 'debit') && debitCardData.expiry && !expiryRegex.test(debitCardData.expiry)) {
        toast.warning('Please enter a valid expiry', toastOptions);
        return;
      }
  
      if ((paymentActive === 'debit') && debitCardData.card && !cardNumberRegex.test(debitCardData.card)) {
        toast.warning('Please enter a valid card number', toastOptions);
        return;
      }
  
      if ((paymentActive === 'credit') && creditCardData.cvv && !cvvRegex.test(creditCardData.cvv)) {
        toast.warning('Please enter a valid cvv', toastOptions);
        return;
      }
  
      if ((paymentActive === 'credit') && creditCardData.expiry && !expiryRegex.test(creditCardData.expiry)) {
        toast.warning('Please enter a valid expiry', toastOptions);
        return;
      }
  
      if ((paymentActive === 'credit') && creditCardData.card && !cardNumberRegex.test(creditCardData.card)) {
        toast.warning('Please enter a valid card number', toastOptions);
        return;
      }
  
      if (loading) {
        return;
      }
  
      const createPaymentDetails = (type) => {
        if (type === 'credit') {
          return creditCardData;
        } else if (type === 'debit') {
          return debitCardData;
        } else if (type === 'internetBanking') {
          return internetBanking;
        } else if (type === 'upi') {
          return upiData;
        }
      }
  
      const payload = {
        userId,
        hotelId: hotelConfirmDatum._id,
        placeName: renderHeading(hotelConfirmDatum.namePlace),
        address: hotelConfirmDatum.address,
        journeyDate: hotelConfirmDatum.journeyDate,
        returnDate: hotelConfirmDatum.returnDate,
        paymentDetails: {
          type: paymentActive,
          data: createPaymentDetails(paymentActive)
        }
      }
  
      setLoading(true);
      let response = await handleAPIData('POST', '/api/hotelBooking', payload);
      let bookingResponse = response.data;
      if (bookingResponse.status === 'success' && (bookingResponse.invalidHotel || bookingResponse.userNotLoggedIn)) {
        toast.info(bookingResponse.message, toastOptions);
      } else if (response.status === 'success' && bookingResponse.data) {
        history.push({
          pathname: '/hotelConfirmed',
          state: { from: 'Holiday Make Payment click', data: bookingResponse.data }
        });
      } else {
        toast.error('Something went wrong. Please try again.', toastOptions);
      }
      setLoading(false);
    };

  return (
    <>
      <div class="container-xxl section-block-inner">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <h2 class="mb-2">{renderHeading(hotelConfirmDatum.namePlace)}</h2>
                <p class="hero-text hero-text-dark">
                  Check in <span>{hotelConfirmDatum.journeyDate}</span> - Check out <span>{hotelConfirmDatum.returnDate}</span>
                </p>
            </div>
        </div>
      </div>
      <div class="container-xxl section-block mb-5">
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <div class="flight-details flight-details-big pb-4">
              <div class="row">
                <div class="col-12"><h3 class="mb-3">Payment details</h3></div>
              </div>
              <div class="row">
                <div class="col-3">
                  <div class="d-flex align-items-start">
                    <div class="nav flex-column me-3 tabs-cards" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => handlePaymentLinkClick('credit')}>Credit card</button>
                      <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => handlePaymentLinkClick('debit')}>Debit card</button>
                      <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => handlePaymentLinkClick('internetBanking')}>Internet banking</button>
                      <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => handlePaymentLinkClick('upi')}>UPI</button>
                    </div>
                  </div>
                </div>
                <div class="col-9">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                      <div class="row">
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name on card" onChange={(e) => handleCreditCard(e, 'name')} />
                        </div>
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Card number" onChange={(e) => handleCreditCard(e, 'card')} />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="MM/YYYY" onChange={(e) => handleCreditCard(e, 'expiry')} />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CVV" onChange={(e) => handleCreditCard(e, 'cvv')} />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                      <div class="row">
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name on card" onChange={(e) => handleDebitCard(e, 'name')} />
                        </div>
                        <div class="col-12 mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Card number" onChange={(e) => handleDebitCard(e, 'card')} />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="MM/YYYY" onChange={(e) => handleDebitCard(e, 'expiry')} />
                        </div>
                        <div class="col-4">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CVV" onChange={(e) => handleDebitCard(e, 'cvv')} />
                        </div>
                      </div>
                    </div>
                    
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                      <select class="form-select" aria-label="Large select example" onChange={handleInternetBanking}>
                        <option selected="">Select Bank</option>
                        <option value="hdfcBank">HDFC Bank</option>
                        <option value="iciciBank">ICICI Bank</option>
                        <option value="stateBankOfIndia">State Bank Of India</option>
                        <option value="axisBank">Axis Bank</option>
                      </select>
                    </div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter UPI ID" onChange={handleUPI} />
                    </div>
                  </div>
                  <div class="mt-4">                    
                    <Button id={"hotel-booking-make-payment-btn"} loading={loading} handleBtnClick={handleMakePaymentClick} btnType={"primary"} classes={"float-end"} label={"Make Payment"} />
                    {/* <a href="#!" class="btn btn-primary">Make Payment</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="booking-block">
              <h3 class="booking-title">Pricing Details</h3>
              <div class="booking-details-block">
                <p class="booking-details">Number of guests <span>1 adult</span></p>
                <p class="booking-details">${hotelConfirmDatum.roomSelectPrice} x {hotelConfirmDatum.nightsTotal} Nights<span>${(hotelConfirmDatum.roomSelectPrice * hotelConfirmDatum.nightsTotal).toLocaleString()}</span></p>
                <p class="booking-sub-title">Coupon applied <span>-$250</span></p>
                <p class="coupon-type mb-2"><span class="coupon-name">(FLAT $250 off)</span> <a href="#!" class="">delete</a></p>
                <div class="my-3 row">
                  <div class="col-auto">
                    <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Apply coupon" />
                  </div>
                  <div class="col-auto">
                    <a href="#!" class="btn btn-primary btn-sm">Apply</a>
                  </div>
                </div>
                <p class="booking-details">Service fee <span>${hotelConfirmDatum.serviceFee}</span></p>
                <p class="booking-details">Taxes ({hotelConfirmDatum.taxes}%) <span>${((hotelConfirmDatum.roomSelectPrice * hotelConfirmDatum.nightsTotal) * (hotelConfirmDatum.taxes / 100))}</span></p> 
              </div>
              <div class="booking-grand-total">
                <p>Grand total</p>  
                <h2>${getTotal()} <span>(Inclusive of Taxes)</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default HotelConfirm;
