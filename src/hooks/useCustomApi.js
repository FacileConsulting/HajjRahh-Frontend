// import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:8888";

export const handleAPIData = (url, payload) => {
  const apiUrl = `${baseUrl}${url}`;
  console.log('payload', apiUrl, payload)
  return axios.post(apiUrl, payload)
    .then(response => {
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
          data: [],
          status: 'error',
          message: msg
        }
      }
    })
    .catch(err => {
      const msg = `Error : ${url}`;
      return {
        data: [],
        status: 'error',
        message: msg
      }
    });
}