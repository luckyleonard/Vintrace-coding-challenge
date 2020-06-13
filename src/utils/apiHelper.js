import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

async function api_request({ method = 'GET', url, data = {} }) {
  return await axios({
    url: `${API_BASE_URL}${url}`,
    method,
    data,
  });
}

export default api_request;
