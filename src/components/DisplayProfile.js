import React from 'react';
import { useSelector } from 'react-redux';

const DisplayProfile = ({ id }) => {

  const { displayName, displayEmail, displayPhone, displayAddress } = useSelector(state => state.myAccount );
  const displayArray = [
    { label: 'Name', value: displayName },    
    { label: 'Email', value: displayEmail },    
    { label: 'Phone', value: displayPhone },    
    { label: 'Address', value: displayAddress }
  ]
  return (
    <>
      <div className="col-12 mb-4">
        <img src="./assets/images/profile.webp" className="img-profile" alt="..." />
      </div>
      {
        displayArray && displayArray.length > 0 && displayArray.map((obj) => {
          return (
            <div className="col-12 mb-4">
              <h4>{obj.label}</h4>
              <p>{obj.value || ''}</p>
            </div>
          )
        })
      }
    </>
  )
};

export default DisplayProfile;