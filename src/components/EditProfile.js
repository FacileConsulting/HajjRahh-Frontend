import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeInputFunc } from '../reducers/myAccountSlice';
import {toastOptions} from '../toastify';
import { handleAPIData } from '../hooks/useCustomApi';
import Input from './Input';
import Button from './Button';

const EditProfile = ({ id }) => {
  const dispatch = useDispatch();
  const childRefs = [useRef(), useRef(), useRef(), useRef()];
  const { updateName, updateEmail, updatePhone, updateAddress } = useSelector(state => {
    console.log('state.myAccount', state)
    return state.myAccount 
  });
  const [loading, setLoading] = useState(false);


  const handleSaveChangesClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (loading) {
      return;
    }

    if (updateEmail && !emailRegex.test(updateEmail)) {
      toast.warning('Please enter a valid email', toastOptions);
      return;
    }

    if (updatePhone && !phoneRegex.test(updatePhone)) {
      toast.warning('Please enter a valid phone number', toastOptions);
      return;
    }

    console.log('save changes', updateName, updateEmail, updatePhone, updateAddress);
    // return;

    const payload = {
      type: 'EDIT_PROFILE',
      _id: '66a0fd5c54a6de2eb066aee9'
    }

    if (updateName) {
      payload.username = updateName.trim();
    }

    if (updateEmail) {
      payload.email = updateEmail.trim();
    }

    if (updatePhone) {
      payload.phoneNumber = updatePhone.trim();
    }

    if (updateAddress) {
      payload.address = updateAddress.trim();
    }

    setLoading(true);
    let response = await handleAPIData('/api/myAccount', payload);
    if (response.status === 'success' && response.data) {
      toast.success('Profile updated successfully', toastOptions);
      handleCancelClick();
      dispatch(changeInputFunc({ keyName: 'displayName', value: response.data.username }));
      dispatch(changeInputFunc({ keyName: 'displayEmail', value: response.data.email }));
      dispatch(changeInputFunc({ keyName: 'displayPhone', value: response.data.phoneNumber }));
      dispatch(changeInputFunc({ keyName: 'displayAddress', value: response.data.address }));
      console.log('response', response.data);
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

  return (
    <div className="tab-pane fade show active" id={id} role="tabpanel" tabIndex="0">
      <div className="row">
        <div className="col-4 mb-3">
          <Input ref={childRefs[0]} id={"my-account-edit-profile-update-name"} keyName={"updateName"} placeholder={"Update name"}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mb-3">
          <Input ref={childRefs[1]} id={"my-account-edit-profile-update-email"} keyName={"updateEmail"} placeholder={"Update email"}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mb-3">
          <Input ref={childRefs[2]} id={"my-account-edit-profile-update-phone"} keyName={"updatePhone"} placeholder={"Update phone"}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mb-3">
          <Input ref={childRefs[3]} id={"my-account-edit-profile-update-address"} keyName={"updateAddress"} placeholder={"Update address"}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button id={"my-account-edit-profile-save-changes-btn"} loading={loading} handleBtnClick={handleSaveChangesClick} btnType={"primary"} classes={"float-end"} label={"Save changes"} />
          <Button id={"my-account-edit-profile-cancel-btn"} handleBtnClick={handleCancelClick} btnType={"secondary"} classes={"float-end mx-4"} label={"Cancel"} />
        </div>
      </div>
    </div>
  )
};

export default EditProfile;