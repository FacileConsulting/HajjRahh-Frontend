import React, { forwardRef, useImperativeHandle, useState } from 'react';
import $ from 'jquery';
import { changeInputFunc, resetInputFunc } from '../reducers/myAccountSlice';
import { useDispatch } from 'react-redux';

const Checkbox = forwardRef((props, ref) => {
  let { id, keyName } = props;
  console.log('sdfsdfsdfsdf@@@@@@@@@', id, keyName);
  const dispatch = useDispatch();
  const [value, setValue] = useState(false);  

  const resetRefCalled = (index) => {
    $(`#${id}`).prop('checked', false);
    dispatch(resetInputFunc(keyName));
    setValue(false);
  };

  // Use useImperativeHandle to expose functions to the parent
  useImperativeHandle(ref, () => ({
    resetRefCalled
  }));

  const handleChange = (event) => {
    console.log('sdfsdfsdfsdf', id, keyName, event.target.checked);
    dispatch(changeInputFunc({ keyName, value: event.target.checked }));
    setValue(event.target.checked);
  };

  return (
    <input type="checkbox" name={keyName} className="form-check-input" id={id} onChange={handleChange} defaultChecked={value} />
  )
});

export default Checkbox;
