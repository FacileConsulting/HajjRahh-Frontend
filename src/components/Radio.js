import React, { forwardRef, useImperativeHandle, useState } from 'react';
import $ from 'jquery';
import { updateFunc } from '../reducers/homeSlice';
import { changeInputFunc } from '../reducers/myAccountSlice';
import { useDispatch } from 'react-redux';

const Radio = forwardRef((props, ref) => {
  let { id, keyName, name, valueRadioName, defaultValue } = props;
  const dispatch = useDispatch();
  if (defaultValue === valueRadioName) $(`#${id}`).prop('checked', defaultValue === valueRadioName);
  const [value, setValue] = useState(defaultValue);  

  const resetRefCalled = (enableId, keyName, vals) => {
    $(`#${enableId}`).prop('checked', true);
    dispatch(updateFunc({ keyName, value: vals }));
    dispatch(changeInputFunc({ keyName, value: vals }));    
    setValue(vals);
  };

  // Use useImperativeHandle to expose functions to the parent
  useImperativeHandle(ref, () => ({
    resetRefCalled
  }));

  const handleChange = (event) => {
    console.log('sdfsdfsdfsdf', id, keyName, valueRadioName, event.target.value, event.target.checked);
    dispatch(updateFunc({ keyName, value: event.target.value }));
    dispatch(changeInputFunc({ keyName, value: event.target.value })); 
    if (id === 'flight-traveller-ECONOMY') $('#flight-traveller-ECONOMY').prop('checked', false);
    if (id === 'flight-traveller-BUSINESS') $('#flight-traveller-BUSINESS').prop('checked', false);
    if (id === 'flight-traveller-FIRST') $('#flight-traveller-FIRST').prop('checked', false);
    $(`#${id}`).prop('checked', event.target.value === valueRadioName);
    setValue(event.target.value);
  };

  return (
    <input type="radio" name={name} className="form-check-input" id={id} onChange={handleChange} value={valueRadioName} defaultChecked={value === valueRadioName} />
  )
});

export default Radio;
