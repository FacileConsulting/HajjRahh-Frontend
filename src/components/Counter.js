import React, { useState } from 'react';
import { updateFunc } from '../reducers/homeSlice';
import { useDispatch } from 'react-redux';
import './components.css';

const Counter = ({ id, options, counterByOther, defaultValue }) => {
  const dispatch = useDispatch();
  
  const [count, setCount] = useState(defaultValue || 0);

  const handleIncrement = () => {
    if (id === "flights-search-adults") {
      dispatch(updateFunc({ keyName: 'adults', value: count + 1 }));
    } else if (id === "flights-search-children") {
      dispatch(updateFunc({ keyName: 'children', value: count + 1 }));
    } else if (id === "flights-search-infants") {
      dispatch(updateFunc({ keyName: 'infants', value: count + 1 }));
    } else if (id === "how-many-people") { 
      dispatch(updateFunc({ keyName: 'noOfPeople', value: count + 1 }));
    }    
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      if (id === "flights-search-adults") {
        dispatch(updateFunc({ keyName: 'adults', value: count - 1 }));
      } else if (id === "flights-search-children") {
        dispatch(updateFunc({ keyName: 'children', value: count - 1 }));
      } else if (id === "flights-search-infants") {
        dispatch(updateFunc({ keyName: 'infants', value: count - 1 }));
      } else if (id === "how-many-people") { 
        dispatch(updateFunc({ keyName: 'noOfPeople', value: count - 1 }));
      }
      setCount(count - 1);
    }      
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      if (id === "flights-search-adults") {
        dispatch(updateFunc({ keyName: 'adults', value: Number(value) }));
      } else if (id === "flights-search-children") {
        dispatch(updateFunc({ keyName: 'children', value: Number(value) }));
      } else if (id === "flights-search-infants") {
        dispatch(updateFunc({ keyName: 'infants', value: Number(value) }));
      } else if (id === "how-many-people") { 
        dispatch(updateFunc({ keyName: 'noOfPeople', value: Number(value) }));
      }
      setCount(Number(value));
    }
  };
  return (
    <>
      {
        counterByOther ?
        <div id={id} className="input-group">
          <span className="input-group-btn">
            <button type="button" className="btn-number" onClick={handleDecrement}>
              <span className="bi bi-dash"></span>
            </button>
          </span>
          <input 
            type="text" 
            onChange={handleChange}
            value={count}
            className="form-control input-number"
          />
          <span className="input-group-btn">
            <button type="button" className="btn-number" onClick={handleIncrement}>
              <span className="bi bi-plus"></span>
            </button>
          </span>
        </div> :
        <div id={id} className="d-flex align-items-center">
          <button className="inc-dec btn btn-primary" onClick={handleDecrement}>-</button>
          <input
            type="text"
            onChange={handleChange}
            className="inc-dec-input form-control mx-4 text-center"
            value={count}
          />
          <button className="inc-dec btn btn-primary" onClick={handleIncrement}>+</button>
        </div>
      }
    </>
  )
};

export default Counter;
