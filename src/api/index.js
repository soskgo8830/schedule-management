import axios from 'axios';

const baseURL = 'http://localhost:3001';

// GET 요청 함수
export const get = async (url, params = {}) => {
  try {
    const response = await axios.get(`${baseURL}/${url}`, { params });
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

// POST 요청 함수
export const post = async (url, data = {}) => {
  try {
    const response = await axios.post(`${baseURL}/${url}`, data);
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

// DELETE 요청 함수
export const remove = async (url, id) => {
  try {
    const response = await axios.delete(`${baseURL}/${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};

// PUT 요청 함수
export const update = async (url, data = {}) => {
  try {
    const response = await axios.put(`${baseURL}/${url}`, data);
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};
