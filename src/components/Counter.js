import React, { useReducer, useState } from 'react';
import { noOfPeopleFunc } from '../reducers/homeSlice';
import { useDispatch } from 'react-redux';
import './components.css';

const Counter = ({ id, options }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    dispatch(noOfPeopleFunc(count + 1));
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(noOfPeopleFunc(count - 1));
      setCount(count - 1);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
        dispatch(noOfPeopleFunc(Number(value)));
        setCount(Number(value));
    }
  };
  return (
    <div className="d-flex align-items-center">
      <button className="inc-dec btn btn-primary" onClick={handleDecrement}>-</button>
      <input
        type="text"
        onChange={handleChange}
        className="inc-dec-input form-control mx-4 text-center"
        value={count}
      />
      <button className="inc-dec btn btn-primary" onClick={handleIncrement}>+</button>
    </div>
  )
};

export default Counter;
