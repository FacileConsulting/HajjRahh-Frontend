import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeInputFunc } from '../reducers/myAccountSlice';
import { toastOptions } from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import Input from './Input';
import Button from './Button';

const Register = forwardRef((props, ref) => {
  const { id } = props;
  const dispatch = useDispatch();
  const childRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const { enterName, enterEmail, enterPhone, enterAddress, enterPassword, reeenterPassword } = useSelector(state => {
    console.log('state.myAccount register', state)
    return state.myAccount
  });
  const [loading, setLoading] = useState(false);


  const handleSignUpClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!enterName && !enterEmail && !enterPhone && !enterAddress && !enterPassword && !reeenterPassword) {
      toast.warning('Please enter something to update', toastOptions);
      return;
    }

    if (!enterName && !enterEmail && !enterPhone && !enterPassword && !reeenterPassword) {
      toast.warning('Please enter mandatory fields', toastOptions);
      return;
    }

    if (!enterName) {
      toast.warning('Please enter name', toastOptions);
      return;
    }

    if (!enterEmail) {
      toast.warning('Please enter email', toastOptions);
      return;
    }

    if (!enterPhone) {
      toast.warning('Please enter phone number', toastOptions);
      return;
    }

    if (!enterPassword) {
      toast.warning('Please enter password', toastOptions);
      return;
    }

    if (!reeenterPassword) {
      toast.warning('Please re-enter password', toastOptions);
      return;
    }

    if (enterPassword !== reeenterPassword) {
      toast.warning('Passwords did not matched', toastOptions);
      return;
    }

    if (loading) {
      return;
    }

    if (enterEmail && !emailRegex.test(enterEmail)) {
      toast.warning('Please enter a valid email', toastOptions);
      return;
    }

    if (enterPhone && !phoneRegex.test(enterPhone)) {
      toast.warning('Please enter a valid phone number', toastOptions);
      return;
    }

    console.log('sign up changes', enterName, enterEmail, enterPhone, enterAddress, enterPassword, reeenterPassword);
    // return;

    const payload = {};

    if (enterName && enterEmail && enterPhone && enterPassword && reeenterPassword) {
      payload.username = enterName.trim();
      payload.email = enterEmail.trim();
      payload.phoneNumber = enterPhone.trim();
      payload.address = enterAddress ? enterAddress.trim() : '';
      payload.password = enterPassword.trim();
    }

    setLoading(true);
    let response = await handleAPIData('POST', '/api/register', payload);
    if (response.status === 'success' && response.data.isDups && response.data.message) {
      toast.error(response.data.message, toastOptions);
      handleCancelClick();
    } else if (response.status === 'success' && response.data.userCreated && response.data.message) {
      toast.success(response.data.message, toastOptions);
      handleCancelClick();
      localStorage.setItem('access_token', response.data.token);
      dispatch(changeInputFunc({ keyName: 'displayName', value: response.data.username }));
      dispatch(changeInputFunc({ keyName: 'displayEmail', value: response.data.email }));
      dispatch(changeInputFunc({ keyName: 'displayPhone', value: response.data.phoneNumber }));
      dispatch(changeInputFunc({ keyName: 'displayAddress', value: response.data.address }));
      dispatch(changeInputFunc({ keyName: 'paymentMethodType', value: response.data.paymentMethodType }));
      dispatch(changeInputFunc({ keyName: 'emailSettings', value: response.data.isEnabledEmailNotification }));
      console.log('response', response.data);
    } else if (response.status === 'error' && response.data.message) {
      toast.error(response.data.message, toastOptions);
    } else {
      toast.error('Something went wrong. Please try again.', toastOptions);
    }
    setLoading(false);
  };

  const handleCancelClick = () => {
    for (let index = 0; index < childRefs.length; index++) {
      if (childRefs[index].current) {
        childRefs[index].current.resetRefCalled(index);
      }
    }
  };

  useImperativeHandle(ref, () => ({
    handleCancelClick
  }));

  return (
    <div className="tab-pane fade" id="register-pane" role="tabpanel" tabIndex="0">
      <div className="row">
        <div className="col-12 mb-3">
          <Input ref={childRefs[0]} id={"register-enter-name"} keyName={"enterName"} placeholder={"Enter name *"} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Input ref={childRefs[1]} id={"register-enter-email"} keyName={"enterEmail"} placeholder={"Enter email *"} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Input ref={childRefs[2]} id={"register-enter-phone"} keyName={"enterPhone"} placeholder={"Enter phone *"} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Input ref={childRefs[3]} id={"register-enter-address"} keyName={"enterAddress"} placeholder={"Enter address"} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Input ref={childRefs[4]} id={"register-enter-password"} keyName={"enterPassword"} placeholder={"Enter password *"} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Input ref={childRefs[5]} id={"register-reenter-password"} keyName={"reeenterPassword"} placeholder={"Re-enter password *"} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button id={"register-sign-up-btn"} loading={loading} handleBtnClick={handleSignUpClick} btnType={"primary"} classes={"float-end"} label={"Sign up"} />
          <Button id={"register-cancel-btn"} handleBtnClick={handleCancelClick} btnType={"secondary"} classes={"float-end mx-4"} label={"Cancel"} />
        </div>
      </div>
    </div>
  )
});

export default Register;
