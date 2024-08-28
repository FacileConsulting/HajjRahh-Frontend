// import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const handleAPIData = async (method, url, payload = null) => {
  const apiUrl = `${baseUrl}${url}`;
  console.log('payload', apiUrl, payload)
  try {
      let response;
      if (method === 'POST') {
          response = await axios.post(apiUrl, payload);
      } else if (method === 'GET') {
          response = await axios.get(apiUrl);
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