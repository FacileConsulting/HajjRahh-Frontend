import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import Checkbox from './Checkbox';
import Button from './Button';

const PaymentMethod = ({ id }) => {
  const dispatch = useDispatch();
  const childRefs = [useRef(), useRef(), useRef()];
  const { creditCard, debitCard, upi } = useSelector(state => {
    console.log('state.myAccount', state)
    return state.myAccount 
  });
  const [loading, setLoading] = useState(false);

  const handleSaveClick = async () => {

    if (loading) {
      return;
    }

    console.log('creditCard, debitCard, upi', creditCard, debitCard, upi );
    // return;

    const paymentSetter = () => {
      const getValues = [];
      if (creditCard) {
        getValues.push('creditCard');
      } 
      if (debitCard) {
        getValues.push('debitCard');
      } 
      if (upi) {
        getValues.push('upi');
      }
      return getValues;
    }

    const payload = {
      type: 'PAYMENT_METHOD',
      _id: '66a0fd5c54a6de2eb066aee9',
      paymentMethodType: paymentSetter()
    }

    setLoading(true);
    let response = await handleAPIData('/api/myAccount', payload);
    console.log('response', response);
    if (response.status === 'success' && response.data.paymentMethodType) {
      toast.success('Payment Method types updated successfully', toastOptions);
    } else {
      toast.error('Something went wrong. Please try again.', toastOptions);
    }
    setLoading(false);
  };

  const handleResetClick = () => {
    for (let index = 0; index < childRefs.length; index++) {
      if (childRefs[index].current) {
        childRefs[index].current.resetRefCalled();        
      }
    }
  };

  return (
    <div className="tab-pane fade" id={id} role="tabpanel" tabIndex="0">
      <div className="row">
        <div className="col-4 mb-3">
          <p className="mb-1">Select mode of payments</p>
          <div className="form-check">
            <Checkbox ref={childRefs[0]} id={"my-account-payment-method-credit-card"} keyName={"creditCard"} />
            <label className="form-check-label mt-1" htmlFor="creditCardFor">
              Credit card
            </label>
          </div>
          <div className="form-check">
            <Checkbox ref={childRefs[1]} id={"my-account-payment-method--debit-card"} keyName={"debitCard"} />
            <label className="form-check-label mt-1" htmlFor="debitCardFor">
              Debit card
            </label>
          </div>
          <div className="form-check">
            <Checkbox ref={childRefs[2]} id={"my-account-payment-method-upi"} keyName={"upi"} />
            <label className="form-check-label mt-1" htmlFor="upiFor">
              UPI
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button id={"my-account-payment-method-save-btn"} loading={loading} handleBtnClick={handleSaveClick} btnType={"primary"} classes={"float-end"} label={"Save"} />
          <Button id={"my-account-payment-method-reset-btn"} handleBtnClick={handleResetClick} btnType={"secondary"} classes={"float-end mx-4"} label={"Reset"} />
        </div>
      </div>
    </div>
  )
};

export default PaymentMethod;
