import React, { useState } from 'react';
import { departureFunc, destinationFunc } from '../reducers/homeSlice';
import { useDispatch } from 'react-redux';

const Select = ({ id, options, classes }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  

  const handleChange = (event) => {
    if (id === 'departure-select' || id === 'holidays-modify-search-departure-select') {
      dispatch(departureFunc(event.target.value));
    } else if (id === 'destination-select' || id === 'holidays-modify-search-destination-select') {
      dispatch(destinationFunc(event.target.value));
    }
    setSelectedOption(event.target.value);
  };

  return (
    <select id={id} value={selectedOption} onChange={handleChange} className={`form-select form-select-lg ${classes}`}>
      {
        options && options.length > 0 && options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })
      }
    </select>
  )
};

export default Select;
