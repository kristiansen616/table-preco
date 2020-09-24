import axios from 'axios'
// import { Notify } from 'quasar'

const axiosInstance = axios.create({})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
  Vue.axios = Vue.prototype.$axios
}
axiosInstance.defaults.baseURL = '/api'
if (process.env.PROD) {
  axiosInstance.defaults.baseURL = process.env.API + '/api'
}
export { axiosInstance }
