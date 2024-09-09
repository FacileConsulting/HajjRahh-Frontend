// import { useState, useEffect, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

// const baseUrl = "http://localhost:8000";
const baseUrl = "https://hajjrahh-backend-feg9fhcuhzbxd4a0.eastus-01.azurewebsites.net";

export const handleAPIData = async (method, url, payload = null) => {
  // const history = useHistory();
  const apiUrl = `${baseUrl}${url}`;
  if (!localStorage.getItem('access_token')) {
    console.log('No access token present');
    // history.push('/loginRegister');
  }
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
  const config = {
    headers: headers,
    timeout: 5000 // 5 seconds
};
  console.log('payload', apiUrl, payload);
  try {
      let response;
      if (method === 'POST') {
          response = await axios.post(apiUrl, payload, config);
      } else if (method === 'GET') {
          response = await axios.get(apiUrl, config);
      }

      console.log('hook response', response)
      if (!response.error && response.data) {
        return {
          data: response.data,          
          status: 'success',
        }
      } else if (response.error) {
        return {
          data: response.data,          
          status: 'success',
        }
      } else {
        const msg = `Error : ${url}`;
        return {
          status: 'error',
          message: msg
        }
      }
  } catch (error) {
    const msg = `Error : ${url}`;
    return {
      status: 'error',
      message: msg
    }
  }
};