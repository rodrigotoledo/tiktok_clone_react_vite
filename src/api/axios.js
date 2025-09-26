import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL+'/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.interceptors.request.use(
  async config => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axios;
