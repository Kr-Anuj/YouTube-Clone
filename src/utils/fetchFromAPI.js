import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    try {
      const response = await axios.get(`${BASE_URL}/${url}`, options);
      console.log('API Response:', response.data); // Log successful response
      return response.data;
    } catch (error) {
      console.error('Error fetching from API:', error.response?.data || error.message);
      return null; // Handle or rethrow the error if necessary
    }
  };