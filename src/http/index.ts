import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000
})

axios.interceptors.request.use(config => {
  return config  
})

axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject(response)
  }
})

export default axios
