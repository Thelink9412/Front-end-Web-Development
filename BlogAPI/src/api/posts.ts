import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3500'
})

apiClient.interceptors.response.use(async (response) => {
  if (import.meta.env.DEV) {
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  return response;
});

export default apiClient