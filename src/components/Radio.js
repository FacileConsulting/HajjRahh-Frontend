import React, { forwardRef, useImperativeHandle, useState } from 'react';
import $ from 'jquery';
import { changeInputFunc } from '../reducers/myAccountSlice';
import { useDispatch } from 'react-redux';

const Radio = forwardRef((props, ref) => {
  let { id, keyName, name, valueRadioName } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState('');  

  const resetRefCalled = (enableId, keyName, vals) => {
    $(`#${enableId}`).prop('checked', true);
    dispatch(changeInputFunc({ keyName, value: vals }));
    setValue(vals);
  };

  // Use useImperativeHandle to expose functions to the parent
  useImperativeHandle(ref, () => ({
    resetRefCalled
  }));

  const handleChange = (event) => {
    console.log('sdfsdfsdfsdf', id, keyName, valueRadioName, event.target.value);
    dispatch(changeInputFunc({ keyName, value: event.target.value }));
    setValue(event.target.value);
  };

  return (
    <input type="radio" name={name} className="form-check-input" id={id} onClick={handleChange} value={valueRadioName} defaultChecked={value === valueRadioName} />
  )
});

export default Radio;