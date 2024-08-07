import axios from 'axios';

// Access the environment variable
const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async (endpoint) => {
  try {
    // Use the environment variable in your API request
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
