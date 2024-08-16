import React, { useState } from 'react';
import { departureFunc, destinationFunc } from '../reducers/homeSlice';
import { useDispatch } from 'react-redux';

const Button = ({id, btnType, label, classes, handleBtnClick, loading }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <button type="button" id={id} className={`btn btn-${btnType} ${classes} ${loading ? "disable" : ""}`} onClick={handleBtnClick}>
      <span className="for-loading-margin">{label}</span>
      {loading && <span className="spinner-border spinner-border-sm" role="status"></span>}
    </button>
  )
};

export default Button;
